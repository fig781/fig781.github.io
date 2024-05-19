import { supabase } from '../../utils/supabaseClient';
import { GetStaticProps, GetStaticPaths } from 'next';
import parseMarkdown from '../../utils/parseMarkdown';
import NavBar from '../../components/Articles/NavBar';
import Footer from '../../components/Articles/Footer';
import styles from '../../styles/Article.module.css';
import formattedDisplayPublishedDate from '../../utils/formatDisplayPublishedDate';
import CBadge from '../../components/CBadge';
import Head from 'next/head';
import MarkdownRenderer from '../../components/MarkdownDisplay/MarkdownRenderer';
import { getAllPosts, getPostBySlug } from "../../utils/articleHelpers";

//@ts-ignore
const Article = ({ article, markdown }) => {

  return (
    <main className={styles.main}>
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
              article.tags.map((tag: string, i: number) => {
                return (
                  <span key={`${i}${tag}`}>
                    <CBadge tag={tag} />
                  </span>
                );
              })}
          </div>
        </header>

        {/*Proper markdown display component goes here */}
        <MarkdownRenderer ast={markdown} />
      </div>
      <Footer />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //@ts-ignore
  const post = getPostBySlug(params.slug);

  const parsedMarkdown = await parseMarkdown(post.content || "");

  return {
    props: {
      article: post,
      markdown: parsedMarkdown
    }
  }
};

export const getStaticPaths = async () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((article) => {
      return {
        params: {
          slug: article.slug
        }
      }
    }),
    fallback: false,
  };
};

export default Article;
