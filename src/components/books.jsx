'use strict';

import React from 'react';
import Book from './book';

class Books extends React.Component {

  renderBooks() {
    return this.props.books.map((book) => {
      return <Book key={book.id} title={book.title} />;
    });
  }

  render() {
    const books = this.renderBooks();

    return (
      <ul>
        {books}
      </ul>
    );
  }
}

export default Books;
