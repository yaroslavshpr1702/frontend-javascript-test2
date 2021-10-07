import React from 'react';
import { observer } from 'mobx-react';
import BooksView from './BooksView';
import Search_Book from './store/observbl';

class SearchInput extends React.Component {
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
      }
      takeSortingValue = e => {
        this.setState({selected_sorting: e});
        console.log('Sorting ', this.selected_sorting);
      }

      render() {
        const { input, selected_category, selected_sorting } = this.state;

        return (
        <div id = "search-block">
          <h1>Search for Books</h1>
          <p>
                <input type = "text" name = "search-text" value = {input} onKeyPress = {this.onKeyPressHandler} onChange = {this.inputChange}/>
                <button onClick = {this.search_book_string}>Search</button>
          </p>
          <button onClick = {() => Search_Book.increment()}>+</button>
          <button onClick = {() => Search_Book.decrement()}>-</button>
          {"count = " + Search_Book.count}
          <p>
            Categories
            <select name = "search-categories" value = {selected_category} onChange = {e => this.takeCategoryValue(e.target.value)}>
              <option selected value="all">all</option>
              <option value = "art">art</option>
              <option value = "biography">biography</option>
              <option value = "computers">computers</option>
              <option value = "history">history</option>
              <option value = "medical">medical</option>
              <option value = "poetry">poetry</option>
            </select>
            Sorting By
            <select name = "search-sorting" value = {selected_sorting} onChange = {e => this.takeSortingValue(e.target.value)}>
              <option selected value = "revelance">revelance</option>
              <option value = "newest">newest</option>
            </select>
          </p>
        </div>
            
            
        )
      }
}

export default observer(SearchInput);