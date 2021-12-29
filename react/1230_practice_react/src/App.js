// import logo from './logo.svg';
// import './App.css';

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

// export default App;
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
// import CMInput from './pages/components/CMInput';
// import CMButton from './pages/components/CMButton';



function App() {
  var container = {
    backgroundColor: 'antiquewhite',
    width: '80%',
    margin: '0 auto',
  };

  return (
    <div style={container}>
      <LoginPage />
      <hr />
      <JoinPage />
      <hr />
    </div>
  );
}

export default App;