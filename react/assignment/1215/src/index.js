import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Garage, Gundam, Headercomp, Container} from './myComponents';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Headercomp headerTitle="This is my header from props"/>
  </React.StrictMode>,
  document.getElementById('Headercomp')
);
ReactDOM.render(
  <React.StrictMode>
    <Gundam camp="Earth" model="X10A" engine="Atomic" year="Cosmic 70" pilot="Yamato" cargo="Archangel"/>
  </React.StrictMode>,
  document.getElementById('Gundam')
);

ReactDOM.render(
  <React.StrictMode>
    <Garage />
  </React.StrictMode>,
  document.getElementById('Garage')
);

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById('Container')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
