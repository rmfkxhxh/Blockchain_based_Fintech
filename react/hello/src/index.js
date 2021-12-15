import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {Car, Garage} from './Car';
import Car from './Car';
import Gundam from './Gundam';
import Arcangel from './Arcangel'
import Headercomp from './Headercomp'
import Container from './Unmountcomp'

// import Garage from './Car';
import reportWebVitals from './reportWebVitals';
function Hello(props) {
  return <h1>Hello World!!</h1>
}
ReactDOM.render(
  <React.StrictMode>
    <Headercomp />
    {/* <Garage color="red"/> */}
    {/* <Car color="blue" otherColor='red'/> */}
    {/* <Gundam model="limited edition"/> */}
    <Gundam cargo="Archangel"/>
    {/* <Arcangel /> */}
  </React.StrictMode>,
  // <Car />,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <Headercomp newTitle="StaticProps New Title!!~~~!!!!!!!"/>
  </React.StrictMode>,
  document.getElementById('header')
);
ReactDOM.render(
  <React.StrictMode>
    {/* <Garage color="red"/> */}
    {/* <Car color="blue" otherColor='red'/> */}
    {/* <Gundam model="limited edition"/> */}
    {/* <Gundam cargo="Archangel"/> */}
    {/* <Arcangel /> */}
    <Container />
  </React.StrictMode>,
  // <Car />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

