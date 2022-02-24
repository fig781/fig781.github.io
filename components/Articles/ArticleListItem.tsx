import styles from '../../styles/ArticleListItem.module.css';
import formatDisplayPublishedDate from '../../utils/formatDisplayPublishedDate';

import { Badge } from 'react-bootstrap';
import Link from 'next/link';

const ArticleListItem = ({ article }) => {
  return (
    <Link href={`/articles/${article.id}`}>
      <a
        className={` ${styles.container} d-flex justify-content-between align-items-center p-2`}>
        <div className=''>
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
        </div>
        <div>
          <span className='fw-light'>
            {article.published && formatDisplayPublishedDate(article.published)}
          </span>
        </div>
      </a>
    </Link>
  );
};

export default ArticleListItem;
