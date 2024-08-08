// src/SnippetForm.js
import React, { useState } from 'react';

function SnippetForm() {
  const [snippet, setSnippet] = useState('');

  const handleChange = (event) => {
    setSnippet(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send snippet to backend or update state)
    console.log('Snippet submitted:', snippet);
    setSnippet('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={snippet}
        onChange={handleChange}
        placeholder="Enter your code snippet here..."
        rows="5"
        cols="50"
      />
      <button type="submit">Add Snippet</button>
    </form>
  );
}

export default SnippetForm;
