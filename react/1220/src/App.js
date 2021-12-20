import logo from './logo.svg';
import Jsxtest from './Jsxtest';
import Jsxcss from './Jsxcss';
import Block4 from './Block4';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    // <div className="App">
    <div>
      <h1>12-20</h1>
      <Jsxtest />
      <div>Hello Div</div>
      <Jsxcss />
      <h1>Block4 Routing</h1>
      <Block4 />
    </div>
  );
}

export default App;
