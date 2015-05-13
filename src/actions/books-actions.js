'use strict';

import { Actions } from 'flummox';
import BooksWebUtils from '../web-utils/books-web-utils';

class BooksActions extends Actions {

  async loadBooks() {
    const response = await BooksWebUtils.fetch();
    return await response;
  }
}

export default BooksActions;
