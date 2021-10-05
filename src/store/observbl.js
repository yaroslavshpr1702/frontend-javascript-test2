import React from 'react';
import {observer} from 'mobx-react';
import {makeAutoObservable, observable} from 'mobx';

class Search_Book {
    count = 0;
    constructor() {
        makeAutoObservable(this);
        //this.search_string = React.createRef();
    }

    increment() {
        this.count = this.count + 1;
        console.log('inc', this.count);
    }
    decrement()
    {
        this.count = this.count - 1;
        console.log('dec', this.count);
    }

    search_this(searched_book) {
        var search_string = searched_book;
        console.log('Taken ', searched_book);
        console.log('Found ', search_string);
    }
}

export default new Search_Book();