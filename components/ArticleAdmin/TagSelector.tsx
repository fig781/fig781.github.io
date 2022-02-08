import { Dropdown } from 'react-bootstrap';
import styles from '../../styles/TagSelector.module.css';

const TagSelector = ({ tagSelected }) => {
  const tags: string[] = [
    'algorithms',
    'beginner',
    'career',
    'css',
    'dotnet',
    'go',
    'git',
    'html',
    'javascript',
    'nextjs',
    'node',
    'performance',
    'python',
    'react',
    'supabase',
    'sql',
    'tailwind',
    'testing',
    'tutorial',
    'typescript',
    'vue',
  ];

  return (
    <Dropdown>
      <Dropdown.Toggle variant='primary' id='dropdown-basic'>
        Add Tag
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.tagMenu}>
        {tags.map((tag: string) => {
          return (
            <Dropdown.Item key={tag} onClick={() => tagSelected(tag)}>
              {tag}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default TagSelector;
