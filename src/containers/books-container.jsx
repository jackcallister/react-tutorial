'use strict';

import React from 'react';
import FluxComponent from 'flummox/component';
import Books from '../components/books';

class BooksContainer extends React.Component {

  render() {
    return (
      <FluxComponent connectToStores={['books']}>
        <Books />
      </FluxComponent>
    );
  }
}

export default BooksContainer;
