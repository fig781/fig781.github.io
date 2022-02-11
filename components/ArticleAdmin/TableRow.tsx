import { Badge } from 'react-bootstrap';
import { FaTrashAlt, FaPencilAlt, FaEyeSlash } from 'react-icons/fa';
import styles from '../../styles/TableRow.module.css';

const TableRow = ({
  article,
  editButtonClicked,
  toggleHideArticle,
  deleteArticle,
}) => {
  const formattedPublished = (published: string) => {
    //from 2022-01-31 to 01-31-2022
    let arr: string[] = published.split('');
    arr.push('-');
    let year = arr.splice(0, 4);
    arr = arr.concat(year);
    arr.shift();

    return arr;
  };

  const formattedFileName = (filePath: string) => {
    //from articles/Articles/README.md to README.md
    let arr = filePath.split('/');
    return arr[arr.length - 1];
  };

  return (
    <tr>
      <td>{article.isVisable ? 'Yes' : 'No'}</td>
      <td>{article.id}</td>
      <td>{article.title}</td>
      <td className={styles.descriptionColumn}>{article.description}</td>
      {
        <td>
          {article.tags &&
            article.tags.map((tag: string) => {
              return (
                <span key={tag}>
                  <Badge bg='secondary'>{tag}</Badge>{' '}
                </span>
              );
            })}
        </td>
      }
      <td>{article.published && formattedPublished(article.published)}</td>
      <td>
        {article.articleFilePath && formattedFileName(article.articleFilePath)}
      </td>
      <td className='text-center'>
        <FaPencilAlt className='me-2' onClick={() => editButtonClicked(article)} />{' '}
        <FaEyeSlash
          className='me-2'
          onClick={async () => toggleHideArticle(article.id, article.isVisable)}
        />{' '}
        <FaTrashAlt onClick={async () => deleteArticle(article.id)} />
      </td>
    </tr>
  );
};

export default TableRow;
