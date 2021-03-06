import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import {compose, applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';



// REDUCERS
import reducers from "./reducers"

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


//Redux setup
const store = createStore(reducers, compose(applyMiddleware(thunk)))





ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorkerRegistration.register();
