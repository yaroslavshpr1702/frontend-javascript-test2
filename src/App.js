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
      selected_sorting: 'revelance',
      
      totalBooks: 0,
      books: [],
      isLoaded: false
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

    console.log('Something changed!\n-', Search_Book.search_str);
    this.setState({isLoaded: false});
    fetch(Search_Book.search_str)
        .then(response => response.json())
        .then(
        data => this.setState({
            totalBooks: data.totalItems,
            books: data.items,
            isLoaded: true
        })
    )
    console.log('Updated');
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
  
  componentDidMount() {
    console.log('Start!');
    fetch("https://www.googleapis.com/books/v1/volumes?q=js+inauthor:keyes")
    .then(response => response.json())
    .then(
        data => this.setState({
            totalBooks: data.totalItems,
            books: data.items,
            isLoaded: true
        }),
    );
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
      <BooksView 
        totalBooks = {this.state.totalBooks}
        books = {this.state.books}
        isLoaded = {this.state.isLoaded}
      />
    </div>
  );
  }
}

export default observer(App);