import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  return (
    <div id = "search-block">
      <h1>Search for Books</h1>
      <p>
        <input type = "text" name = "search-text"></input>
        Categories
        <select name = "search-categories">
          <option selected value="all">all</option>
          <option value = "art">art</option>
          <option value = "biography">biography</option>
          <option value = "computers">computers</option>
          <option value = "history">history</option>
          <option value = "medical">medical</option>
          <option value = "poetry">poetry</option>
        </select>
        Sorting By
        <select name = "search-sorting">
          <option selected value = "revelance">revelance</option>
          <option value = "newest">newest</option>
        </select>
      </p>
    </div>
  );
}

export default App;
