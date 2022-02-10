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

export interface FileData {
  created_at: string;
  id: string;
  last_accessed_at: string;
  metadata: object;
  name: string;
  updated_at: string;
}
//add other types  as needed
