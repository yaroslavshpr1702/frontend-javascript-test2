import React from 'react';
import { observer } from 'mobx-react';
import Search_Book from './store/observbl';

class BooksView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalBooks: 0,
            books: [],
            isLoaded: false,
            isBtnClicked: false
        };
        this.buttonClick = this.buttonClick.bind(this);
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

    buttonClick() {
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
    }

    render() {
    const {totalBooks, books, isLoaded} = this.state;

    if (!isLoaded) {
        return(
            <div id = "view-block">
                <p id = "view-block-p-results">Loading...</p>
            </div>
        );
    }
    else {
        return (
            <div id = "view-block">
                <p id = "view-block-p-results">Found {totalBooks} results</p> 
                <button onClick = {this.buttonClick}>Update result</button>
                <div id = "view-block-books">
                    {books.map(book => (
                        <a key = {book.id} href = {book.volumeInfo.infoLink}>
                            <div className = "book-panel">
                                {
                                    (book.volumeInfo.imageLinks)?
                                    <img src = {book.volumeInfo.imageLinks.smallThumbnail} alt="no img"/>
                                    :""
                                }
                                <p className = "book-category">
                                    {(book.volumeInfo.categories)?book.volumeInfo.categories.map(category =>(
                                        <span>{category}/</span>
                                    )
                                    ):""}
                                </p>
                                <h2>{book.volumeInfo.title}</h2>
                                <p className = "book-author">
                                    {(book.volumeInfo.authors)?book.volumeInfo.authors.map(author => (
                                        <span>{author}/</span>
                                    )
                                    ):""}
                                </p>
                            </div>
                        </a>
                    )
                    )}
                </div>
            </div>
        );
    }
    };
}

export default observer(BooksView);