import styles from '../../styles/ArticleListItem.module.css';

import { Badge } from 'react-bootstrap';
import Link from 'next/link';

const ArticleListItem = ({ article }) => {
  const formattedPublished = (published: string) => {
    //from 2022-01-31 to 01-31-2022
    let arr: string[] = published.split('');
    arr.push('-');
    let year = arr.splice(0, 4);
    arr = arr.concat(year);
    arr.shift();

    return arr;
  };

  return (
    <Link href={`/articles/${article.id}`}>
      <a
        className={` ${styles.container} d-flex justify-content-between align-items-center p-2`}>
        <span className='fs-5'>{article.title}</span>
        <div>
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
        <span className='fw-light'>
          {article.published && formattedPublished(article.published)}
        </span>
      </a>
    </Link>
  );
};

export default ArticleListItem;
