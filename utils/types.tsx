interface Article {
  id: number;
  isVisable: boolean;
  title: string;
  description: string;
  tags: string[];
  published: string;
  isDeleted: boolean;
}

//add other types  as needed
export default Article;
