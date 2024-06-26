import { useState, useEffect } from 'react';

import NavBar from '../../components/Articles/NavBar';
import { supabase } from '../../utils/supabaseClient';
import styles from '../../styles/ArticlesList.module.css';
import ArticleListItem from '../../components/Articles/ArticleListItem';
import Footer from '../../components/Articles/Footer';
import ArticleSearch from '../../components/Articles/ArticleSearch';
import Head from 'next/head';
import { getAllPosts } from '../../utils/articleHelpers';

const ArticlesList = ({ articles }) => {

  const [articlesList, setArticlesList] = useState(articles);

  const uniqueTags = (articles) => {
    const tags = [];

    articles.forEach((article) => {
      article.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });

    return tags;
  };

  const sortOptions = [
    'Latest',
    'Oldest',
    //Most Popular
    //Least Popular
  ];

  const filter = (input: String, tag: String, sort: String) => {
    let articlesList = [...articles];

    if (input) {
      articlesList = filterByTitle(input, articlesList);
    }

    if (tag !== 'Tag') {
      articlesList = filterByTag(tag, articlesList);
    }

    if (sort !== 'Sort') {
      articlesList = sortArticles(sort, articlesList);
    }

    setArticlesList(articlesList);
  };

  const sortArticles = (sort, articlesList) => {
    if (sort === 'Latest') {
      return articlesList.sort((date1, date2) => {
        date1 = new Date(date1.pubDate);
        date2 = new Date(date2.pubDate);
        return date2 - date1;
      });
    }

    if (sort === 'Oldest') {
      return articlesList.sort((date1, date2) => {
        date1 = new Date(date1.pubDate);
        date2 = new Date(date2.pubDate);
        return date1 - date2;
      });
    }
  };

  const filterByTag = (tag: String, articleList) => {
    return articleList.filter((article) => {
      if (article.tags.includes(tag)) {
        return article;
      }
    });
  };

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
        <ArticleSearch
          filter={filter}
          tagOptions={uniqueTags(articles)}
          sortOptions={sortOptions}
        />
        <div>
          {articlesList &&
            articlesList.map((article) => {
              return <ArticleListItem key={article.title} article={article} />;
            })}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export const getStaticProps = async ({ params }) => {
  const articles = getAllPosts();

  return {
    props: {
      articles: articles
    },
  };
};

export default ArticlesList;
