import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Gundam, Archangel, Football, Goal, Fate} from './MyComponent';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <h1>Gundam</h1>
    <Gundam model="X10A"/>
    -----------------------
  </React.StrictMode>,
  document.getElementById('header')
);
ReactDOM.render(
  <React.StrictMode>
    <h1>Archangel</h1>
    <Archangel />
    -----------------------
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <h1>Football</h1>
    <Football />
    <br></br>
    -----------------------
  </React.StrictMode>,
  document.getElementById('root1')
);
ReactDOM.render(
  <React.StrictMode>
    <h1>isGoal</h1>
    <Goal isGoal={false}/>
    <br></br>
    -----------------------
  </React.StrictMode>,
  document.getElementById('root2')
);
const characters = ["Siro", "Saver", "Archer", "Tosaka", "Lyn", "Verserker"]
ReactDOM.render(
  <React.StrictMode>
    <h1>Fate</h1>
    <Fate characters={characters}/>
    <br></br>
    -----------------------
  </React.StrictMode>,
  document.getElementById('footer')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
