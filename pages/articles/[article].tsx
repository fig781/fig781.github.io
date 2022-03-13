import { supabase } from '../../utils/supabaseClient';
import { GetServerSideProps, GetStaticProps, GetStaticPaths } from 'next';
import parseMarkdown from '../../utils/parseMarkdown';
import NavBar from '../../components/Articles/NavBar';
import Footer from '../../components/Articles/Footer';
import styles from '../../styles/Article.module.css';
import formattedDisplayPublishedDate from '../../utils/formatDisplayPublishedDate';
import { Badge } from 'react-bootstrap';
import Head from 'next/head';
import MarkdownRenderer from '../../components/MarkdownDisplay/MarkdownRenderer';

const Article = ({ article, parsedMarkdown }) => {
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
            {article.tags &&
              article.tags.map((tag: string) => {
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

        {/*Proper markdown display component goes here */}
        <MarkdownRenderer ast={parsedMarkdown} />
      </div>
      <Footer />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const articleId = params.article;

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

export const getStaticPaths = async () => {
  try {
    let { data, error } = await supabase
      .from('articles')
      .select('id')
      .eq('isVisable', true)
      .eq('isDeleted', false);

    if (error) throw error;

    return {
      paths: data.map((article) => {
        return { params: { article: article.id.toString() } };
      }),
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
};
export default Article;
