import React from 'react';
import {observer} from 'mobx-react';
import {makeObservable, makeAutoObservable, observable, decorate, action, computed} from 'mobx';

class Search_Book {
    
    count = 0
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
        console.log('Found ', searched_book);
    }
}

export default new Search_Book()