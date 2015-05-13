'use strict';

const BooksWebUtils = {

  fetch() {
    return new Promise((resolve) =>
      setTimeout(function() {
        resolve([{id: 1, title: 'Game of Thrones'}]);
      }, 1000)
    );
  }
};

export default BooksWebUtils;
