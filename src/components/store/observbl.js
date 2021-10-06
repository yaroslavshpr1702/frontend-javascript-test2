import {makeAutoObservable} from 'mobx';

class Search_Book {
    count = 0;

    search_str = '';
    search_category = '';
    search_sort = '';
    constructor() {
        makeAutoObservable(this);
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
        this.search_str = searched_book;
        console.log('FoundSB ', this.search_str);
    }
}

export default new Search_Book();