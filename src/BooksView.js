import './App.css';
import React from 'react';
import Search_Book from './store/observbl';
import { observer } from 'mobx-react';

const BooksView = observer(() => {
    return(
        <div id = "view-block">

        </div>
    );
})

export default BooksView;