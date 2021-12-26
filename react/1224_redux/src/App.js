// import logo from './logo.svg';
import './App.css';
// import './ReduxExercise'
// import './modules'
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

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
    <div>
      <CounterContainer />
      <hr/>
      <TodosContainer />
    </div>
  )
};

export default App;
