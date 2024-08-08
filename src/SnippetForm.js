// src/SnippetForm.js
import React, { useState } from 'react';
import axios from 'axios';

function SnippetForm() {
  const [title, setTitle] = useState('');
  const [snippet, setSnippet] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSnippetChange = (event) => {
    setSnippet(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the snippet to the backend
      const response = await axios.post('http://localhost:8000/api/snippets/', {
        title: title,
        code: snippet,
      });

      // Handle successful response
      console.log('Snippet submitted:', response.data);

      // Optionally, reset the form
      setTitle('');
      setSnippet('');
    } catch (error) {
      // Handle error
      console.error('There was an error submitting the snippet:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <textarea
        value={snippet}
        onChange={handleSnippetChange}
        placeholder="Enter your code snippet here..."
        rows="5"
        cols="50"
      />
      <button type="submit">Add Snippet</button>
    </form>
  );
}

export default SnippetForm;