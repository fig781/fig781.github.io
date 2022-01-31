import { Container } from 'react-bootstrap';
import { supabase } from '../utils/supabaseClient';
import { useState, useEffect } from 'react';
import ArticlesAdmin from '../components/ArticlesAdmin';
import Login from '../components/Login';

const Admin = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <Container>
      {!session ? <Login /> : <ArticlesAdmin session={session} />}
    </Container>
  );
};

export default Admin;
