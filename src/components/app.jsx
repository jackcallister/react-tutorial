'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './header';

class App extends React.Component {

  getChildContext () {
    return {
      flux: this.props.flux
    };
  }

  render() {
    return (
      <main>
        <Header />

        <RouteHandler />
      </main>
    );
  }
}

App.childContextTypes = {
  flux: React.PropTypes.object.isRequired
};

export default App;
