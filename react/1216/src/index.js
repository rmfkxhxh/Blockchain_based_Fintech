import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Gundam from './Gundam';
import GundamCopy from './Gundamcopy';
import Football from './Football';
import Goal from './Goal';
// import Garage from './Car';
import Fate from './Fate';

import Archangel from './Archangel';
import reportWebVitals from './reportWebVitals';

const characters = ["Siro", "Saver", "Archer", "Tosaka", "Lyn", "Verserker"]
ReactDOM.render(
  <React.StrictMode>
    <Football />
  </React.StrictMode>,
  document.getElementById('header')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <Gundam model="X10A"/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <Archangel/>
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <GundamCopy />
  </React.StrictMode>,
  document.getElementById('footer')
);
ReactDOM.render(
  <React.StrictMode>
    <Goal isGoal={false} />
  </React.StrictMode>,
  document.getElementById('root1')
);
ReactDOM.render(
  <React.StrictMode>
    <Fate characters={characters} />
  </React.StrictMode>,
  document.getElementById('root2')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

