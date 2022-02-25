import { GetServerSideProps } from 'next';

import NavBar from '../../components/Articles/NavBar';
import { supabase } from '../../utils/supabaseClient';
import ArticleCard from '../../components/Articles/ArticleCard';

import { Container } from 'react-bootstrap';

const Articles = ({ popularArticles, recentArticles }) => {
  return (
    <main>
      Comming Soon...
      {/* <NavBar articleButton={true} />
      <Container>
        <h1>Articles</h1>
        <section>
          <h3>Recent</h3>
          <div className='d-flex'>
            {recentArticles &&
              popularArticles.map((article) => {
                return <ArticleCard key={article.id} article={article} />;
              })}
          </div>
        </section>
        <section>
          <h3>Popular</h3>
          <div className='d-flex'>
            {popularArticles &&
              popularArticles.map((article) => {
                return <ArticleCard key={article.id} article={article} />;
              })}
          </div>
        </section>
      </Container> */}
    </main>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   let { data: popularArticles, error: popularArticlesError } = await supabase
//     .from('articles')
//     .select('id, title, description, published, tags, devPublicReactionsCount')
//     .eq('isVisable', true)
//     .eq('isDeleted', false)
//     .order('devPublicReactionsCount', { ascending: false })
//     .limit(3);

//   if (popularArticlesError) {
//     popularArticles = [];
//   }

//   let { data: recentArticles, error: recentArticlesError } = await supabase
//     .from('articles')
//     .select('id, title, description, published, tags, devPublicReactionsCount')
//     .eq('isVisable', true)
//     .eq('isDeleted', false)
//     .order('published', { ascending: false })
//     .limit(3);

//   if (recentArticlesError) {
//     recentArticles = [];
//   }

//   return {
//     props: {
//       popularArticles: popularArticles,
//       recentArticles: recentArticles,
//     },
//   };
// };

export default Articles;
