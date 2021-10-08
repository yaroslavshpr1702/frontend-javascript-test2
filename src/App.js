import './App.css';
import React from 'react';
import SearchInput from './components/SearchInput';
import BooksView from './components/BooksView';
import { observer } from 'mobx-react';
import Search_Book from './components/store/observbl';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      selected_category: 'all',
      selected_sorting: 'revelance'
    };
  };

  search_book_string = () => {
    const {input} = this.state;
    console.log('Taken - ', input);
    var search_query = "https://www.googleapis.com/books/v1/volumes?q=" + input + "+inauthor:keyes";
    console.log('Search query - ', search_query);

    const {selected_category} = this.state;
    const {selected_sorting} = this.state;
    console.log('Category - ', selected_category);
    console.log('Sorting - ', selected_sorting);

    Search_Book.search_this(search_query, selected_category, selected_sorting);
  };
  onKeyPressHandler = event => {
      if (event.key === 'Enter') {
        this.search_book_string();
      };
  }
  inputChange = event => {
    this.setState({ input: event.target.value})
  };
  takeCategoryValue = e => {
    this.setState({selected_category: e});
    console.log('Category ', this.selected_category);
  };
  takeSortingValue = e => {
    this.setState({selected_sorting: e});
    console.log('Sorting ', this.selected_sorting);
  };
  
  render() {

  return (
    <div id = "app-block">
      <SearchInput 
        input = {this.state.input} 
        selected_category = {this.state.selected_category} 
        selected_sorting = {this.state.selected_sorting}

        search_book_string = {this.search_book_string}
        onKeyPressHandler = {this.onKeyPressHandler}
        inputChange = {this.inputChange}
        takeCategoryValue = {this.takeCategoryValue}
        takeSortingValue = {this.takeSortingValue}
      />
      <BooksView />
    </div>
  );
  }
}

export default observer(App);