import { GetServerSideProps } from 'next';
import { useState, useEffect } from 'react';

import NavBar from '../../components/Articles/NavBar';
import { supabase } from '../../utils/supabaseClient';
import styles from '../../styles/ArticlesList.module.css';
import ArticleListItem from '../../components/Articles/ArticleListItem';

import { Container } from 'react-bootstrap';

const ArticlesList = ({ articles }) => {
  const [articlesList, setArticlesList] = useState(articles);

  useEffect(() => {
    setArticlesList(articles);
  }, [articles]);

  return (
    <main>
      <NavBar />
      <section className={styles.listContainer}>
        <h1 className='px-2 my-2'>Articles</h1>
        <div>
          {articlesList.map((article) => {
            return <ArticleListItem key={article.id} article={article} />;
          })}
        </div>
      </section>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
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
