import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// function Hello(props) {
//   return <h1>Hello World!!</h1>
// }
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ReactDOM.render(<Hello />, document.getElementById("root"));

// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );
// ReactDOM.render(myelement, document.getElementById('root'));

// class HelloMessage extends React.Component {
//   render() {
//     return (
//       <div>
//         Hello {this.props.name}
//       </div>
//     );
//   }
// }


// ReactDOM.render(
//   <HelloMessage name="React" />,
//   document.getElementById('root')
// );
// const myElement = <h1>I love REACT~!~!~!</h1> //jsx type
// const myElement = React.createElement('h1', {}, 'did not use JSX') //react element type
// const x = 15
// const myElement = <h1>React is {x} times better with JSX</h1> //jsx type

// const myElement = (
//   <ul>
//     <li>Apple</li>
//     <li>Google</li>
//     <li>Amazon</li>
//     <li>IBM</li>
//     <li>Facebook</li>
//   </ul>
// )

// const myElement = (
//   <div>
//     <h1>Hello World</h1>
//     <p>I love React and nodejs~!~</p>
//   </div>
// )
// const myElement = (
//   <input type="text"/>
// )

// const myElement = <h1 className="myClass">Hello World~!~!</h1>
const x = 11;
// let txt = 'Hello WORLD!@~@~!'
// if (x < 10) {
//   txt = 'Hello'
// }
// const myElement = <h1 className="myClass">{txt}</h1>


const myElement = <h1 className="myClass">{(x) < 10 ? "Hello" : "Hello WORLD~~~~~~~~"}</h1>


ReactDOM.render(myElement, document.getElementById('root'));