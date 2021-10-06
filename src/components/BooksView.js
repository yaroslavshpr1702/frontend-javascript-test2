import React from 'react';
import { observer } from 'mobx-react';

class BooksView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalBooks: 0,
            books: [],
            searchBook: 'ya'
        };
        this.takeSearchString = this.takeSearchString.bind(this);
    };

    takeSearchString = (strng) => {
        this.setState({searchBook: strng});
        console.log('I take it! ', strng);
    }

    componentDidMount() {
        fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes")
        .then(response => response.json())
        .then(
            data => this.setState({
                totalBooks: data.totalItems,
                books: data.items
            })
        );
    };

    componentDidUpdate(strng) {
        fetch(strng)
        .then(response => response.json())
        .then(
            data => this.setState({
                totalBooks: data.totalItems,
                books: data.items
            })
        );
    }

    render() {
    const {totalBooks, books, searchBook} = this.state;
        return(
            <div id = "view-block">
                <p id = "view-block-p-results">Found {totalBooks} results{this.takeSearchString}</p>
                <div id = "view-block-books">
                    {books.map(item => (
                        <div className = "book-panel">
                            <img src={item.volumeInfo.imageLinks.smallThumbnail}/>
                            <p className = "book-category">
                                {item.volumeInfo.categories}
                            </p>
                            <h2>{item.volumeInfo.title}</h2>
                            <p className = "book-author">
                                {item.volumeInfo.authors}
                            </p>
                        </div>
                    )
                    )}
                </div>
            </div>
        );
    };
}

export default observer(BooksView);