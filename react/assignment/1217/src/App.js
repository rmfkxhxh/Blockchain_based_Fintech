import logo from './logo.svg';
import './App.css';
import {Calculator,Textaddition} from './Mycomponent'

function App() {
  return (
    <>
      <Calculator />
      <img src={logo} className="App-logo" alt="logo" />
      <Textaddition />
      <img src={logo} className="App-logo" alt="logo" />
    </>
  )
}

export default App;
