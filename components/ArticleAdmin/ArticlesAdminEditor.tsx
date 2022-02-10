import { Modal, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import TagSelector from './TagSelector';
import styles from '../../styles/ArticlesAdminEditor.module.css';
import { Article } from '../../utils/types';
import { supabase } from '../../utils/supabaseClient';

const ArticlesAdminEditor = ({ show, onHide, article, handleArticleSubmit }) => {
  const { id, title, description, tags, published, isVisable, articleFilePath } =
    article;

  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const [tagsInput, setTagsInput] = useState(tags);
  const [publishedInput, setPublishedInput] = useState(published);
  const [isVisableInput, setIsVisableInput] = useState(isVisable);
  const [filePathInput, setFilePathInput] = useState(articleFilePath);
  const [rawFile, setRawFile] = useState(null);

  useEffect(() => {
    setTitleInput(title);
    setDescriptionInput(description);
    setTagsInput(tags ? tags : []);
    setPublishedInput(published);
    setIsVisableInput(isVisable);
    setFilePathInput(articleFilePath);
  }, [title, description, tags, published, isVisable, articleFilePath]);

  const deleteTag = (tag: string) => {
    const remainingTags = tagsInput.filter((t: string) => {
      return t !== tag;
    });
    setTagsInput(remainingTags);
  };

  const addTag = (tag: string) => {
    if (tagsInput.length < 4 && !tagsInput.includes(tag)) {
      setTagsInput([...tagsInput, tag]);
    }
  };

  const handleSubmitButton = () => {
    if (publishedInput) {
      const formattedArticleData: Article = {
        id: id,
        title: titleInput,
        description: descriptionInput,
        tags: tagsInput,
        published: publishedInput,
        isVisable: isVisableInput,
        isDeleted: false,
        articleFilePath: filePathInput,
      };
      handleArticleSubmit(formattedArticleData);
      onHide();
    } else {
      console.error('Set the Published date before submitting');
    }
  };

  const formattedFileName = (filePath: string) => {
    //from articles/Articles/README.md to README.md
    let arr = filePath.split('');
    const len = arr.length;
    let x = len - 1;
    for (x; x >= 0; x--) {
      if (arr[x] === '/') {
        break;
      }
    }

    return arr.slice(x + 1, len).concat();
  };

  const handleFileChange = (e) => {
    const file = (e.target as HTMLInputElement).files[0];
    setRawFile(file);
  };

  const handleFileUpload = async () => {
    if (rawFile === null) return;

    const fileExt = rawFile.name.split('.').pop();
    const rawFileName = rawFile.name.split('.').shift();
    const fileName = `${rawFileName}${
      Math.floor(Math.random() * (10000000 - 1)) + 10000000
    }.${fileExt}`;
    const filePath = `Articles/${fileName}`;

    try {
      const { data, error } = await supabase.storage
        .from('articles')
        .upload(filePath, rawFile, {
          cacheControl: '3600',
          upsert: false,
        });
      if (error) throw error;

      setFilePathInput(data.Key);
    } catch (error) {
      console.log(error);
    }
  };

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
            <div className='mb-2 mt-1'>
              {tagsInput &&
                tagsInput.map((tag: string) => {
                  return (
                    <span
                      className={`${styles.tag} border me-2 p-1 rounded`}
                      key={tag}
                      onClick={() => deleteTag(tag)}>
                      {tag}
                    </span>
                  );
                })}
            </div>

            <TagSelector tagSelected={addTag} />
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
          <Form.Group className='mb-3' controlId='formFile'>
            <Form.Label>MD File</Form.Label>
            <p>Current File: {filePathInput && formattedFileName(filePathInput)}</p>
            <Form.Control type='file' accept='.md' onChange={handleFileChange} />
            <Button className='mt-2' onClick={handleFileUpload}>
              Apply File
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmitButton} variant='primary'>
          Submit
        </Button>
        <Button onClick={onHide} variant='secondary'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ArticlesAdminEditor;
