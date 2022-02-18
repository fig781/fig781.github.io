import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../../utils/supabaseClient';

interface DevArticle {
  id: number;
  public_reactions_count: number;
}

interface MyArticle {
  id: number;
  devId: number;
}

const handleLogin = async (email: string, password: string) => {
  try {
    const { user, session, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) throw error;

    return session;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAllDevArticles = async () => {
  try {
    const res = await fetch(
      'https://dev.to/api/articles?username=fig781&per_page=1000'
    );
    if (!res.ok) throw new Error('Request Failed');

    const data = await res.json();
    if (data === null || data.length === 0) return null;

    const formattedData = data.map((article) => {
      return {
        id: article.id,
        public_reactions_count: article.public_reactions_count,
      };
    });

    return formattedData;
  } catch (error) {
    console.log(error);
  }
};

const getAllMyArticlesWithDevId = async () => {
  //losing my mind trying to get the query IS NOT NULL to work
  try {
    let { data: articles, error } = await supabase
      .from('articles')
      .select('id,devId')
      .eq('isDeleted', false)
      .not('devId', 'is', null);

    if (error) throw error;

    return articles;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const syncArticlesData = async (
  myArticles: MyArticle[],
  devArticles: DevArticle[]
) => {
  if (devArticles === null || myArticles === null) return null;

  let updatedArticles = [];

  for (const myArticle of myArticles) {
    for (const devArticle of devArticles) {
      if (myArticle.devId === devArticle.id) {
        let updatedArticle = await updateMyArticleWithDevInfo(myArticle, devArticle);
        updatedArticle !== null && updatedArticles.push(updatedArticle);
      }
    }
  }

  return updatedArticles;
};

const updateMyArticleWithDevInfo = async (
  myArticle: MyArticle,
  devArticle: DevArticle
) => {
  try {
    const { data, error } = await supabase
      .from('articles')
      .update({
        devPublicReactionsCount: devArticle.public_reactions_count,
      })
      .match({ id: myArticle.id });

    if (error) throw error;

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }

  if (!req.headers.username || !req.headers.password) {
    res.status(400).json({ message: 'Invalid login credentials' });
    return;
  }

  try {
    const username = req.headers.username.toString();
    const password = req.headers.password.toString();
    const session = await handleLogin(username, password);
    if (session === null) {
      res.status(400).json({ message: 'Invalid login credentials' });
      return;
    }

    const myArticles = await getAllMyArticlesWithDevId();
    if (myArticles === null) {
      res.status(404).json({ message: 'No my articles found' });
      return;
    }

    const myDevArticles = await getAllDevArticles();
    if (myDevArticles === null) {
      res.status(404).json({ message: 'No Dev articles found' });
      return;
    }

    const updatedArticles = await syncArticlesData(myArticles, myDevArticles);
    res.status(200).json(updatedArticles);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}
