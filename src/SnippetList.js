// src/SnippetList.js
import React from 'react';
import SnippetItem from './SnippetItem';

function SnippetList() {
  // Replace with actual snippets data (e.g., from state or props)
  const snippets = [
    { id: 1, content: 'console.log("Hello, world!");' },
    { id: 2, content: 'const foo = 42;' }
  ];

  return (
    <ul>
      {snippets.map(snippet => (
        <SnippetItem key={snippet.id} snippet={snippet} />
      ))}
    </ul>
  );
}

export default SnippetList;
