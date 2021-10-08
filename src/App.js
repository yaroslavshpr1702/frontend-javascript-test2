import './App.css';
import React from 'react';
import SearchInput from './components/SearchInput';
import BooksView from './components/BooksView';
import { observer } from 'mobx-react';

class App extends React.Component {
  render() {

  return (
    <div id = "app-block">
      <SearchInput />
      <BooksView />
    </div>
  );
  }
}

export default observer(App);