import React from 'react';
import { observer } from 'mobx-react';

class BooksView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    render() {

    if (!this.props.isLoaded) {
        return(
            <div id = "view-block">
                <p id = "view-block-p-results">Loading...</p>
            </div>
        );
    }
    else {
        return (
            <div id = "view-block">
                <p id = "view-block-p-results">Found {this.props.totalBooks} results</p>
                <div id = "view-block-books">
                    {this.props.books.map(book => (
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