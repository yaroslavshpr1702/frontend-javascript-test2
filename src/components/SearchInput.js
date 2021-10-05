import React from 'react';

class SearchInput extends React.Component {
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
            <p>
                <input type = "text" name = "search-text" onChange = {this.inputChange} value = {input}/>
                <button onClick = {this.search_book_string}>Search</button>
            </p>
        )
      }
}

export default SearchInput;