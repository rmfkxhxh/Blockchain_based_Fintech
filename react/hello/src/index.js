import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Car, Garage} from './Car';
// import Garage from './Car';
import reportWebVitals from './reportWebVitals';
function Hello(props) {
  return <h1>Hello World!!</h1>
}
ReactDOM.render(
  <React.StrictMode>
    <Garage color="red"/>
  </React.StrictMode>,
  // <Car />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

