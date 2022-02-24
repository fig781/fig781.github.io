import { Button, Card } from 'react-bootstrap';

const ArticleCard = ({ article }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{article.title && article.title}</Card.Title>
        <Card.Text>{article.description && article.description}</Card.Text>
        <Card.Footer>
          {article.published && article.published}
          {article.devPublicReactionsCount && article.devPublicReactionsCount}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
