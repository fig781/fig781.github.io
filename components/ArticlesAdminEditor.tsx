import { Modal, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const ArticlesAdminEditor = ({ show, onHide, article }) => {
  //not working atm
  const [title, setTitle] = useState(article.title);
  const [description, setDescription] = useState(article.description);
  const [tags, setTags] = useState(article.tags);
  const [published, setPublished] = useState(article.published);
  const [isVisable, setIsVisable] = useState(article.isVisable);

  //https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops
  // article.title !== title && setTitle(article.title);
  // article.description !== description && setDescription(article.description);
  // article.tags !== tags && setTags(article.tags);
  // article.published !== published && setPublished(article.published);
  // article.isVisable !== isVisable && setIsVisable(article.isVisable);

  return (
    <Modal
      {...{ show, onHide }}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      backdrop='static'>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='formTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter email'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formIsVisable'>
            <Form.Check
              type='switch'
              label='Visable?'
              value={isVisable}
              onChange={(e) => setIsVisable(e.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary'>Submit</Button>
        <Button onClick={onHide} variant='secondary'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ArticlesAdminEditor;
