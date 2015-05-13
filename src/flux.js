'use strict';

import Flummox from 'flummox';

import BooksActions from './actions/books-actions';
import BooksStore from './stores/books-store';

class Flux extends Flummox {
  constructor() {
    super();

    this.createActions('books', BooksActions);
    this.createStore('books', BooksStore, this);
  }
}

export default Flux;
