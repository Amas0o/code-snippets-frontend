// src/SnippetList.js
import React, {useEffect, useState} from 'react';
import { fetchSnippets } from './api/Snippets';


const SnippetList = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
      const getSnippets = async () => {
          const data = await fetchSnippets();
          console.log(data)
          setSnippets(data);
      };

      getSnippets();
  }, []);

  return (
      <div>
          <h1>Code Snippets</h1>
          <ul>
              {snippets.map(snippet => (
                  <li key={snippet.id}>{snippet.title} - {snippet.code}</li>
              ))}
          </ul>
      </div>
  );
};

export default SnippetList;
