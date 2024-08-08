import React from 'react';
import SnippetForm from './SnippetForm';
import SnippetList from './SnippetList';

function App() {
  return (
    <div className="App">
      <h1>Code Snippet Manager</h1>
      <SnippetForm />
      <SnippetList />
    </div>
  );
}

export default App;
