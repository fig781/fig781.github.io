import { DropdownButton, Dropdown } from 'react-bootstrap';

const TagSelector = () => {
  const tags = [
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
    <DropdownButton id='dropdown-basic-button' title='Tag'>
      {tags.map((tag) => {
        <Dropdown.Item>{tag}</Dropdown.Item>;
      })}
    </DropdownButton>
  );
};

export default TagSelector;
