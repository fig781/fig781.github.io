import { useState, useEffect } from 'react';

import NavBar from '../../components/Articles/NavBar';
import { supabase } from '../../utils/supabaseClient';
import styles from '../../styles/ArticlesList.module.css';
import ArticleListItem from '../../components/Articles/ArticleListItem';
import Footer from '../../components/Articles/Footer';
import ArticleSearch from '../../components/Articles/ArticleSearch';
import Head from 'next/head';

const ArticlesList = ({ articles }) => {
  const [articlesList, setArticlesList] = useState(articles);

  useEffect(() => {
    setArticlesList(articles);
  }, [articles]);

  return (
    <main>
      <Head>
        <title>Articles | Aden Eilers</title>
        <link rel='shortcut icon' type='image/jpg' href='./Images/html.png' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <NavBar articleButton={false} />
      <section className={styles.listContainer}>
        <h1 className='px-2 mt-2 mb-4'>Articles</h1>
        <ArticleSearch />
        <div>
          {articlesList.map((article) => {
            return <ArticleListItem key={article.id} article={article} />;
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    let { data: articles, error } = await supabase
      .from('articles')
      .select('id, title, published, tags')
      .eq('isVisable', true)
      .eq('isDeleted', false)
      .order('published', { ascending: false });

    if (error) throw error;

    return {
      props: {
        articles: articles,
      },
    };
  } catch (error) {
    //likely want to log this
    console.log(error);
    return {
      props: {
        articles: [],
      },
    };
  }
};

export default ArticlesList;
