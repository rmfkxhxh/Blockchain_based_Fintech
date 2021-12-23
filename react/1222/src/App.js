import logo from './logo.svg';
import './App.css';
import UserManage from './UserManage';
import Box from './Box';
import Reactcss from './Reactcss';
import Circle from './CircleDiv';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        </header>
      </div>
      <div>
        <UserManage />
        <Box />
        <Reactcss />
        <Circle color='yellow'>내 동그라미</Circle>
      </div>
    </>
  );
}

export default App;
