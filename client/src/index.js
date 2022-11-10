import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Route
import { BrowserRouter } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './components/reducers/index';
import ScrollToTop from "./helpers/ScrollToTop"
import './style.css';

const store = createStore(rootReducer,composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop/>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
