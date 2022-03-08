import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export default async function parseMarkdown(markdown) {
  const engine = unified().use(remarkParse);
  const ast = engine.parse(markdown);
  const processedAst = engine.runSync(ast);

  cleanNode(processedAst);

  return processedAst;
}

//used to delete all of the position attributes from the parsed markdown and
//clean up unused nodes
const cleanNode = (node) => {
  delete node.position;

  if (node.value === undefined) delete node.value;
  if (node.tagName === undefined) delete node.tagName;
  if (node.data) {
    delete node.data.hName;
    delete node.data.hChildren;
    delete node.data.hProperties;
  }

  if (node.children) node.children.forEach(cleanNode);

  return node;
};
