import React, { Component } from 'react';
import 'rxjs';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import routes from './routes';
import store, { history } from './store';

// common components
import Header from './common/Header';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Header />
            {routes}
            <Footer />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
