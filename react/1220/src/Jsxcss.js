import React from "react";
import Hello from "./Hello";
import "./Jsxcss.css";


function Jsxcss() {
    let name = 'react 에요'
    const myStyle = {
        backgroundColor: 'blue',
        color: 'white',
        fonSize: '24', //default px
        padding: "1rem"
    }
    return (
        <React.Fragment>
            {/* 이렇게 주석 처리 한다~*/}
            <Hello />
            <h1 style={myStyle}>{name}</h1>
            <div className="pink-box"></div>
        </React.Fragment>
    );
}

export default Jsxcss;