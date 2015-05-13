'use strict';

import { Store } from 'flummox';

class BooksStore extends Store {

  constructor(flux) {
    super();

    const booksActionConstants = flux.getConstants('books');

    this.state = {
      books: [],
      loading: true
    };

    this.registerAsync(
      booksActionConstants.loadBooks,
      this.handleLoadBooksBegin,
      this.handleLoadBooksSuccess,
      this.handleLoadBooksFailure
    );
  }

  handleLoadBooksBegin() {

  }

  handleLoadBooksSuccess(books) {
    this.setState({
      books: books,
      loading: false
    });
  }

  handleLoadBooksFailure() {

  }
}

export default BooksStore;
