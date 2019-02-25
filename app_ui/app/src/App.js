import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/store';
import Routes from './Routes';

export const store = configureStore();

class App extends Component {
  render() {
    return(
      <div className = 'App'>
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
