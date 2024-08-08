// src/SnippetItem.js
import React from 'react';

function SnippetItem({ snippet }) {
  return (
    <li>
      <pre>{snippet.content}</pre>
    </li>
  );
}

export default SnippetItem;
