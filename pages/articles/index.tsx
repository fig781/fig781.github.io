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

  const uniqueTags = (articles) => {
    const tags = [];

    articles.forEach(article => {
      article.tags.forEach(tag => {
        if (!tags.includes(tag)) {
          tags.push(tag)
        }
      })
    })

    return tags;
  }

  const sortOptions = [
    'Latest',
    'Oldest'
    //Most Popular
    //Least Popular
  ]

  const filter = (input: String, tag: String, sort: String) => {
    let articlesList = articles

    if (input) {
      articlesList = filterByTitle(input, articlesList);
      console.log(input, articlesList)
    }

    if (tag) {
      articlesList = filterByTag(tag, articlesList);
      console.log(tag, articlesList)
    }

    if (sort) {
      articlesList = sortArticles(sort, articlesList)
    }

    setArticlesList(articlesList);
    console.log(input, tag, sort);
  };

  const sortArticles = (sort, articlesList) => {
    if (sort === 'Latest') {

    }
  }

  const filterByTag = (tag: String, articleList) => {
    return articleList.filter(article => {
      if (article.tags.includes(tag)) {
        return article
      }
    })
  }

  const filterByTitle = (filterText: String, articleList) => {
    if (!filterText || !articleList) return articles;

    return articles.filter((article) => {
      if (article.title.toLowerCase().includes(filterText.toLowerCase())) {
        return article;
      }
    });
  };

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
        <ArticleSearch filter={filter} tagOptions={uniqueTags(articles)} sortOptions={sortOptions} />
        <div>
          {articlesList &&
            articlesList.map((article) => {
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
