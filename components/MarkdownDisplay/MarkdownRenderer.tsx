import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Prism from 'prismjs';

//import different prism languages I need
require('prismjs/components/prism-javascript');
require('prismjs/components/prism-css');
require('prismjs/components/prism-jsx');
require('prismjs/components/prism-python');

const getComponent = (node) => {
  //need to render in getComponent to access node
  const link = ({ children }) => {
    return (
      <Link href={node?.url}>
        <a>{children}</a>
      </Link>
    );
  };

  const img = ({ children }) => {
    return <Image src={node?.url} alt={node?.alt} layout='fill' />;
  };

  const code = ({ children }) => {
    return (
      <pre className={`language-${node?.lang}`} tabIndex={0}>
        <code className={`language-${node?.lang}`}>{node.value}</code>
      </pre>
    );
  };

  switch (node.type) {
    case 'root':
      const root = ({ children }) => <>{children}</>;
      return root;

    case 'paragraph':
      return p;
    case 'text':
      const text = () => <>{node.value}</>;
      return text;
    case 'strong':
      return strong;
    case 'image':
      return img;
    case 'link':
      return link;
    case 'list':
      return ul;
    case 'listItem':
      return li;
    case 'code':
      return code;
    case 'pre':
      return pre;
    case 'inlineCode':
      return inlineCode;

    /* Handle all types here … */

    default:
      console.log('Unhandled node type', node);
      return;
  }
};

const li = ({ key, children }) => {
  return <li key={key}>{children}</li>;
};

const ul = ({ children }) => {
  return <ul>{children}</ul>;
};

const p = ({ children }) => {
  return <p>{children}</p>;
};

const strong = ({ children }) => {
  return <strong>{children}</strong>;
};

const inlineCode = ({ children }) => {
  return <span>{children}</span>;
};

const pre = ({ children }) => {
  return <pre>{children}</pre>;
};

const Node = (node) => {
  const Component = getComponent(node);
  const { children } = node;

  return children ? (
    <Component {...node}>
      {children.map((child, index) => (
        <Node key={index} {...child} />
      ))}
    </Component>
  ) : (
    <Component {...node} />
  );
};

const MarkdownRenderer = ({ ast }) => {
  useEffect(() => {
    Prism.highlightAll();
    console.log('ran');
  }, []);

  return <Node {...ast} />;
};

export default React.memo(MarkdownRenderer);
