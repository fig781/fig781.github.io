import { Modal, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const ArticlesAdminEditor = ({ show, onHide, article }) => {
  const { id, title, description, tags, published, isVisable } = article;

  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const [tagsInput, setTagsInput] = useState(tags);
  const [tag, setTag] = useState('');
  const [publishedInput, setPublishedInput] = useState(published);
  const [isVisableInput, setIsVisableInput] = useState(isVisable);

  useEffect(() => {
    setTitleInput(title);
    setDescriptionInput(description);
    setTagsInput(tags);
    setPublishedInput(published);
    setIsVisableInput(isVisable);
  }, [title, description, tags, published, isVisable]);

  return (
    <Modal
      {...{ show, onHide }}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      backdrop='static'>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          {id ? 'Edit Article' : 'New Article'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3' controlId='formTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={2}
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formTags'>
            <Form.Label>Tags</Form.Label>

            <Button>Add</Button>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formPublished'>
            <label className='me-2' htmlFor='pulished'>
              Published Date
            </label>
            <input
              type='date'
              name='published'
              id='published'
              value={publishedInput}
              onChange={(e) => setPublishedInput(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formIsVisable'>
            <Form.Check
              type='switch'
              label='Visable?'
              checked={isVisableInput}
              onChange={() => setIsVisableInput(!isVisableInput)}
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
