import React from 'react';
import { observer } from 'mobx-react';

class BooksView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            totalBooks: 0,
            books: []
        };
    }

    giveItems() {
        fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                    isLoaded: true,
                    totalBooks: result.totalItems,
                    books: result.items
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: true
                });
            }
        );
    }

    render() {
    const {error, totalBooks, isLoaded, books} = this.state;
    if (error) {
        return (
            <div id = "view-block">
                <p>Error {error.message}</p>
            </div>)
    } else if(!isLoaded) {
        return (
            <div id = "view-block">
                <p>
                    {totalBooks}<br/>
                    Loading...
                </p>
            </div>
        )
    } else {
        return(
            <div id = "view-block">
                <p>Found {totalBooks} results</p>
                <ul>
                    {books.map(item => {
                        <li key={item.name}>
                            {item.volumeInfo.title}
                        </li>
                    })}
                </ul>
            </div>
        );
    }


    }
}

export default observer(BooksView);