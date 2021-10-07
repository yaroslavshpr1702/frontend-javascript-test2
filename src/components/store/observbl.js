import {makeAutoObservable} from 'mobx';

class Search_Book {
    search_str = '';
    search_category = '';
    search_sort = '';
    
    constructor() {
        makeAutoObservable(this);
    }

    search_this(searched_book, searched_category, searched_sorting) {
        this.search_str = searched_book;
        this.search_category = searched_category;
        this.search_sort = searched_sorting;
        console.log('Found str - ', this.search_str, ',\ncat - ', this.search_category, ',\nsort - ', this.search_sort);
    }
}

export default new Search_Book();