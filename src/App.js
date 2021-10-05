import './App.css';
import React from 'react';
import Search_Book from './store/observbl';
import SearchInput from './components/SearchInput';
import { observer } from 'mobx-react';

//const App = observer(() => {
class App extends React.Component {


  render() {

  return (
    <div id = "search-block">
      <h1>Search for Books</h1>
      <SearchInput />
      <button onClick = {() => Search_Book.increment()}>+</button>
      <button onClick = {() => Search_Book.decrement()}>-</button>
      {"count = " + Search_Book.count}
      <p>
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
}

export default observer(App);
