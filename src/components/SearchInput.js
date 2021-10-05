import React from 'react';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };
        this.onKeyPressHandler = this.onKeyPressHandler
      };
    
      search_book_string = () => {
        const {input} = this.state;
        console.log('Taken ', input);
      };
      onKeyPressHandler = event => {
          if (event.key === 'Enter') {
            const {input} = this.state;
            this.search_book_string(input);
          };
      }
    
      inputChange = event => {
        this.setState({ input: event.target.value})
      };

      render() {
        const { input } = this.state;

        return (
            <p>
                <input type = "text" name = "search-text" value = {input} onKeyPress = {this.onKeyPressHandler} onChange = {this.inputChange}/>
                <button onClick = {this.search_book_string}>Search</button>
            </p>
        )
      }
}

export default SearchInput;