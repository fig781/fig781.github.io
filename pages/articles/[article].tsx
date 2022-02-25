import { supabase } from '../../utils/supabaseClient';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import parseMarkdown from '../../utils/parseMarkdown';
import NavBar from '../../components/Articles/NavBar';
import Footer from '../../components/Articles/Footer';
import styles from '../../styles/Article.module.css';
import formattedDisplayPublishedDate from '../../utils/formatDisplayPublishedDate';
import { Badge } from 'react-bootstrap';
import Head from 'next/head';

const Article = ({ article, parsedMarkdown }) => {
  const router = useRouter();

  return (
    <main>
      <Head>
        <title>{article.title} | Aden Eilers</title>
        <link rel='shortcut icon' type='image/jpg' href='./Images/html.png' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <NavBar articleButton={true} />
      <div className={styles.mainContainer}>
        <header>
          <h1 className='mb-0'>{article.title}</h1>
          <p className='mb-0'>
            Written by Aden Eilers on{' '}
            {formattedDisplayPublishedDate(article.published)}
          </p>
          <div className='mb-5'>
            {article.tags.map((tag: string) => {
              return (
                <span key={`${article.id}${tag}`}>
                  <Badge className={styles.badge} pill text='dark'>
                    {tag}
                  </Badge>{' '}
                </span>
              );
            })}
          </div>
        </header>
        <div dangerouslySetInnerHTML={{ __html: parsedMarkdown }} />
      </div>
      <Footer />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const articleId = context.query.article;

    let { data: article, error: articleError } = await supabase
      .from('articles')
      .select(
        'id, title, published, articleFilePath, tags, devURL, devPublicReactionsCount'
      )
      .eq('id', articleId);

    if (articleError) throw articleError;

    const { data: articleFile, error: articleFileError } = await supabase.storage
      .from('articles')
      .download(article[0].articleFilePath);

    if (articleFileError) throw articleFileError;

    const blobToText = await articleFile.text();
    const parsedMarkdown = await parseMarkdown(blobToText);

    return {
      props: {
        article: article[0],
        parsedMarkdown,
      },
    };
  } catch (error) {
    //likely want to log this
    console.log(error);
    return {
      props: {
        article: [],
        parsedMarkdown: '',
      },
    };
  }
};
export default Article;
