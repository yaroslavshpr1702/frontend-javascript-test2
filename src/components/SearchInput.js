import React from 'react';
import { observer } from 'mobx-react';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
      };

      render() {
        return (
        <div id = "search-block">
          <h1>Search for Books</h1>
          <p>
                <input type = "text" name = "search-text" value = {this.props.input} onKeyPress = {this.props.onKeyPressHandler} onChange = {this.props.inputChange}/>
                <button onClick = {this.props.search_book_string}>Search</button>
          </p>
          <p>
            Categories
            <select name = "search-categories" value = {this.props.selected_category} onChange = {e => this.props.takeCategoryValue(e.target.value)}>
              <option defaultValue value="all">all</option>
              <option value = "art">art</option>
              <option value = "biography">biography</option>
              <option value = "computers">computers</option>
              <option value = "history">history</option>
              <option value = "medical">medical</option>
              <option value = "poetry">poetry</option>
            </select>
            Sorting By
            <select name = "search-sorting" value = {this.props.selected_sorting} onChange = {e => this.props.takeSortingValue(e.target.value)}>
              <option defaultValue value = "revelance">revelance</option>
              <option value = "newest">newest</option>
            </select>
          </p>
        </div>
        )
      }
}

export default observer(SearchInput);