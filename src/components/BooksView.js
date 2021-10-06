import React from 'react';
import { observer } from 'mobx-react';

class BooksView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    giveItems(search_books_string) {
        fetch(search_books_string)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                    items: result.items
                });
            },
            (error) => {
                this.State({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
    const {error, isLoaded, items} = this.state;
    if (error) {
        return (
            <div id = "view-block">
                <p>Error {error.message}</p>
            </div>)
    } else if(!isLoaded) {
        return (
            <div id = "view-block">
                <p>Loading...</p>
            </div>
        )
    } else {
        return(
            <div id = "view-block">

            </div>
        );
    }


    }
}

export default observer(BooksView);