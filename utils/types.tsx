export interface Article {
  id: number | null;
  isVisable: boolean;
  title: string;
  description: string;
  tags: string[];
  published: string;
  isDeleted: boolean;
  articleFilePath: string | null;
}

//add other types  as needed
