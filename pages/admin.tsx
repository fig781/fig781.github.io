import { Container } from 'react-bootstrap';
import { supabase } from '../utils/supabaseClient';
import { useState, useEffect } from 'react';
import ArticlesAdmin from '../components/ArticleAdmin/ArticlesAdmin';
import Login from '../components/Login';

const Admin = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <>{!session ? <Login /> : <ArticlesAdmin session={session} />}</>;
};

export default Admin;
