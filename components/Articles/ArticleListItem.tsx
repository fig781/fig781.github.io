import styles from '../../styles/ArticleListItem.module.css';
import formatDisplayPublishedDate from '../../utils/formatDisplayPublishedDate';

import CBadge from '../CBadge';
import Link from 'next/link';

const ArticleListItem = ({ article }) => {
  return (
    <Link href={`/articles/${article.id}`}>
      <a
        className={` ${styles.container} d-flex justify-content-between align-items-center p-2`}>
        <div>
          <span className='fs-5'>{article.title}</span>

          <div>
            {article.tags.map((tag: string) => {
              return (
                <span key={`${article.id}${tag}`}>
                  <CBadge tag={tag} />
                </span>
              );
            })}
          </div>
        </div>
        <div className={styles.dateContainer}>
          <span className={styles.date}>
            {article.published && formatDisplayPublishedDate(article.published)}
          </span>
        </div>
      </a>
    </Link>
  );
};

export default ArticleListItem;
