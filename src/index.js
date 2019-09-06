import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css//bootstrap.min.css';
import 'react-quill/dist/quill.snow.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

document.body.style = 'background: #F1F1F1;';
ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
