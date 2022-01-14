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

import React, { useEffect, useState } from "react";
import axios from "axios";
// import Crawling from "Crawling";

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const datas = await axios.get("http://localhost:4000/");
      setData(datas.data);
      console.log(data)
    };
    getData();
    
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (data === null) {
    return <div>Load..</div>;
  } else {
    // console.log(typeof(data));
    return (
      <div>
        {data}
        {/* {data.map((ele) => (
          <>
            <div>
              현재 {ele.text}의 현황 : {ele.num}
            </div>
            <br />
          </>
        ))} */}
      </div>
    );
  }
};

export default App;
