//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search_Book from './store/observbl';
import { observer } from 'mobx-react';

//const App = observer(() => {
class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = { input: '' };
  };

  search_book_string = () => {
    const {input} = this.state;
    console.log('Taken ', input);
  };

  inputChange = event => {
    this.setState({ input: event.target.value})
  };

  render() {
  const { input } = this.state;

  return (
    <div id = "search-block">
      <h1>Search for Books</h1>
      <p>
        <input type = "text" name = "search-text" onChange = {this.inputChange} value = {input}/>
        <button onClick = {this.search_book_string}>Search</button>
      </p>
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
