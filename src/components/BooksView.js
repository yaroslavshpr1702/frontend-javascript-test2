import React from 'react';
import { observer } from 'mobx-react';
import Search_Book from './store/observbl';

class BooksView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalBooks: 0,
            books: [],
            isLoaded: false
        };
    };

    componentDidMount() {
        console.log('Start!');
        fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes")
        .then(response => response.json())
        .then(
            data => this.setState({
                totalBooks: data.totalItems,
                books: data.items,
                isLoaded: true
            }),
        );
    };

    componentDidUpdate(prevProps) {
        console.log('Something changed! ', Search_Book.search_str);
        console.log('this.props.books - ', this.props.books);
        console.log('prevProps.books - ', prevProps.books);
        if (this.props.books !== prevProps.books)
        {
            fetch(Search_Book.search_str)
            .then(response => response.json())
            .then(
            data => this.setState({
                totalBooks: data.totalItems,
                books: data.items,
                isLoaded: true
            })
        );
        }
        
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
        return(
                    <div id = "view-block">
                        <p id = "view-block-p-results">Found {totalBooks} results</p>
                        <div id = "view-block-books">
                            {books.map(item => (
                                <div className = "book-panel">
                                    <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="no img"/>
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
    }

        
    };
}

export default observer(BooksView);