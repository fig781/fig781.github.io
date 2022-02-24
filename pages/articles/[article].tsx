import { supabase } from '../../utils/supabaseClient';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { remark } from 'remark';
import html from 'remark-html';

const Article = ({ article }) => {
  const router = useRouter();

  return <div>test</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const articleId = context.query.article;

    const { data: article, error: articleError } = await supabase
      .from('articles')
      .select(
        'id, title, published, articleFilePath, tags, devURL, devPublicReactionsCount'
      )
      .eq('id', articleId);

    if (articleError) throw articleError;

    const { data: articleFile, error: articleFileError } = await supabase.storage
      .from('articles')
      .download(article[0].articleFilePath);

    if (articleFileError) throw articleFileError;
    return {
      props: {
        article,
      },
    };
  } catch (error) {
    //likely want to log this
    console.log(error);
    return {
      props: {
        article: [],
      },
    };
  }
};
export default Article;
