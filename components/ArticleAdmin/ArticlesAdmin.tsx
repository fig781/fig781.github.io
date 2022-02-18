import { Button, Spinner, Container, Table } from 'react-bootstrap';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabaseClient';
import ArticlesAdminEditor from './ArticlesAdminEditor';
import TableRow from '../ArticleAdmin/TableRow';
import { Article } from '../../utils/types';

const ArticlesAdmin = ({ session }) => {
  const defaultArticle: Article = {
    id: null,
    devId: null,
    isVisable: true,
    title: '',
    description: '',
    tags: [],
    published: '',
    isDeleted: false,
    articleFilePath: null,
    devUrl: null,
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(defaultArticle);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);

      let articles = await getAllArticles();
      if (articles === null) {
        setLoading(false);
        return;
      }

      setArticles(articles);
      setLoading(false);
    };

    getArticles();
  }, []);

  const getAllArticles = async () => {
    try {
      let { data: articles, error } = await supabase
        .from('articles')
        .select(
          'id,title,description,isVisable,tags,published,isDeleted,articleFilePath,devId,devURL'
        )
        .eq('isDeleted', 'false')
        .order('created_at', { ascending: false });
      if (error) throw error;

      return articles;
    } catch (e) {
      console.log(e);
    }
  };

  const toggleHideArticle = async (id: number, isVisable: boolean) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('articles')
        .update({ isVisable: !isVisable })
        .eq('id', id);
      if (error) throw error;

      let updatedArticles = articles.map((article) => {
        if (id === article.id) {
          article['isVisable'] = data[0].isVisable;
        }
        return article;
      });

      setArticles(updatedArticles);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const deleteArticle = async (id: number) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('articles')
        .update({ isDeleted: true })
        .eq('id', id);
      if (error) throw error;
      console.log(data);

      let updatedArticles = articles.filter((article) => {
        return article.id !== id;
      });

      setArticles(updatedArticles);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const editButtonClicked = (article: Article) => {
    setShowEditor(true);
    setCurrentArticle(article);
  };

  const handleArticleUpdate = async (article: Article) => {
    setLoading(true);
    if (article.id) {
      //Update article
      try {
        const { data, error } = await supabase
          .from('articles')
          .update({
            title: article.title,
            description: article.description,
            published: article.published,
            tags: article.tags,
            isVisable: article.isVisable,
            articleFilePath: article.articleFilePath,
            devId: article.devId,
            devURL: article.devUrl,
          })
          .eq('id', article.id);
        if (error) throw error;

        const updatedArticles = articles.map((a) => {
          return a.id === article.id ? article : a;
        });

        setArticles(updatedArticles);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      //Make new Article
      try {
        const { data, error } = await supabase.from('articles').insert([
          {
            title: article.title,
            description: article.description,
            published: article.published,
            tags: article.tags,
            isVisable: article.isVisable,
            user_id: session.user.id,
            articleFilePath: article.articleFilePath,
            devId: article.devId,
            devURL: article.devUrl,
          },
        ]);
        if (error) throw error;

        setArticles([data[0], ...articles]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Container>
      <ArticlesAdminEditor
        show={showEditor}
        onHide={() => setShowEditor(false)}
        article={currentArticle}
        handleArticleSubmit={handleArticleUpdate}
      />
      <header className='text-center'>
        <h1>Articles Admin</h1>
      </header>
      <section className='d-flex flex-wrap my-3 justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <Button variant='primary' className='me-3'>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </Button>
          <Button variant='primary' className='me-3'>
            <Link href='/articles'>
              <a>Articles</a>
            </Link>
          </Button>
          <div>
            {loading && (
              <Spinner animation='border' variant='primary' className='d-flex' />
            )}
          </div>
        </div>
        <div>
          <Button
            variant='primary'
            onClick={() => editButtonClicked(defaultArticle)}>
            New Article
          </Button>
        </div>
      </section>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Visable</th>
            <th>id</th>
            <th>devID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Published</th>
            <th>File</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {articles &&
            articles.map((article) => {
              return (
                <TableRow
                  key={article.id}
                  article={article}
                  editButtonClicked={editButtonClicked}
                  toggleHideArticle={toggleHideArticle}
                  deleteArticle={deleteArticle}
                />
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ArticlesAdmin;
