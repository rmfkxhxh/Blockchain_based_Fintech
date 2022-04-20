import React, { useState, useEffect } from "react";
import BrickGame from "./BrickGame2"
import styled, { css } from "styled-components";

const BlackScreen = styled.div`
    color: white;
    text-align: center;
    justify-content: center;
    font-size : 10em;
    background-color: black;
    display: block;
    width: 100%;
    height: 500px;

    // animation: fadeout 3s;
    // -moz-animation: fadeout 3s; /* Firefox */
    // -webkit-animation: fadeout 3s; /* Safari and Chrome */
    // -o-animation: fadeout 3s; /* Opera */
    // animation-fill-mode: forwards;
    // @keyframes fadeout {
    //     from {
    //         opacity: 1;
    //     }
    //     to {
    //         opacity: 0;
    //     }
    // }
    // @-moz-keyframes fadeout { /* Firefox */
    //     from {
    //         opacity: 1;
    //     }
    //     to {
    //         opacity: 0;
    //     }
    // }
    // @-webkit-keyframes fadeout { /* Safari and Chrome */
    //     from {
    //         opacity: 1;
    //     }
    //     to {
    //         opacity: 0;
    //     }
    // }
    // @-o-keyframes fadeout { /* Opera */
    //     from {
    //         opacity: 1;
    //     }
    //     to {
    //         opacity: 0;
    //     }
    // }
`;


export default function Start() {
    const [inputs, setInput] = useState({});
    let [isTitle, setisTitle] = useState(false);
    let [isgameStart, setisGameStart] = useState(false);
    // function onClickButton() {
    //     setisGameStart(true);
    // }
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(inputsValues => ({ ...inputsValues, [name]: value })) //키는 []
        console.log('handlechange')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
        setisGameStart(true)
    }
    const handleClick = (e) => {
        e.preventDefault();
        // e.toggle('fade');
        setisTitle(true);
    }

    return (
        <>
            {(isTitle) ? (
                (isgameStart) ? (
                    <BrickGame row={inputs.row} col={inputs.col} />) : (
                    <form onSubmit={handleSubmit}>
                        <p>행 값을 입력해주세요 </p>
                        <input type={"number"} value={inputs.row || 5} onChange={handleChange} name="row" id="row" />
                        <p>열 값을 입력해주세요 </p>
                        <input type={"number"} value={inputs.col || 4} onChange={handleChange} name="col" id="col" />
                        <br></br>
                        <input type="submit" />
                    </form>
                )

            ) : (
                <BlackScreen onClick={handleClick}>
                    Brick Game
                </BlackScreen>
            )}
        </>
    );
}