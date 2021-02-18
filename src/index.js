import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
// import {createStore , applyMiddleware , compose } from "redux";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {myReducer} from "./reducers/myReducer";
// import thunk from 'redux-thunk';


const store = createStore(myReducer);


ReactDOM.render( <Provider store={store}><Router> <App /> </Router></Provider>  ,document.getElementById('root'));


