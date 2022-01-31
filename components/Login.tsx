import { Button, Form, Spinner } from 'react-bootstrap';
import { supabase } from '../utils/supabaseClient';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading(true);
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });
      //redirect to admin page
    } catch (error) {
      alert(error.error_description || error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form className='mt-5'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className='d-flex align-items-center'>
          <Button
            variant='primary'
            type='submit'
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email, password);
            }}>
            Submit
          </Button>
          {loading && <Spinner animation='border' />}
        </div>
      </Form>
    </>
  );
};

export default Login;
