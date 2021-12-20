import logo from './logo.svg';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Assignment Routing</h1>
      </header>
      <div>
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
