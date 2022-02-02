import { Button, Form, Spinner, Container, Table, Badge } from 'react-bootstrap';
import Link from 'next/link';
import { FaTrashAlt, FaPencilAlt, FaEyeSlash } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

const ArticlesAdmin = ({ session }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  // type Articles = {
  //   id: number;
  //   visable: boolean;
  //   title: string;
  //   description: string;
  //   tags: string[];
  //   published: string;
  // };

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        let { data: articles, error } = await supabase
          .from('articles')
          .select('id,title,description,isVisable,tags,published,isDeleted')
          .eq('isDeleted', 'false');

        articles.forEach((article) => {
          article.tags = article.tags.tags;
        });

        setArticles(articles);
        if (error) {
          throw error;
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  const toggleHideArticle = async (id: number, isVisable: boolean) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('articles')
        .update({ isVisable: !isVisable })
        .eq('id', id);
      if (error) throw error;
      console.log(data);

      let updatedArticles = articles.map((article) => {
        if ((id = article.id)) {
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

  const TableRow = ({ article }) => {
    return (
      <tr>
        <td>{article.isVisable ? 'Yes' : 'No'}</td>
        <td>{article.id}</td>
        <td>{article.title}</td>
        <td>{article.description}</td>
        {
          <td>
            {article.tags.map((tag: string) => {
              return (
                <span key={tag}>
                  <Badge bg='secondary'>{tag}</Badge>{' '}
                </span>
              );
            })}
          </td>
        }
        <td>{article.published}</td>
        <td className='text-center'>
          <FaPencilAlt className='me-2' />{' '}
          <FaEyeSlash
            className='me-2'
            onClick={async () => toggleHideArticle(article.id, article.isVisable)}
          />{' '}
          <FaTrashAlt />
        </td>
      </tr>
    );
  };

  return (
    <Container className='border'>
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
        <Button variant='primary'>New Article</Button>
      </section>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Visable</th>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Published</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => {
            return <TableRow key={article.id} article={article} />;
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ArticlesAdmin;
