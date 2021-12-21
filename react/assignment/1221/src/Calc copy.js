import React, { useState } from "react";

export default function Calculator() {
    const [number, setNumber] = useState(0) // 입력숫자 여러개 눌러서 하나의 수로.
    const [buttonClicked, setButtonClicked] = useState(''); // 클릭한 버튼의 종류를 감지
    const [calcResult, setCalcResult] = useState(0) // 계산 혹은 입력을 화면에 출력
    // const [writedNum, setWritedNum] = useState([])
    //입력한 수들을 담을 배열

    let writedNum = []
    // 클릭된 수를 상태에 담기
    function clickedNum(e) {
        if (number) {
            setNumber(number + e.target.value)
            writedNum.push(number)
                .then(console.log(writedNum))
        }
        else {
            setNumber(e.target.value)
            writedNum.push(number)
                .then(console.log(writedNum))
        }
        // console.log("배열에 값이 담겼는가 : ", writedNum)
    }

    // 연산버튼 감지해서 담기.
    const arithmetic = (e) => {
        e.preventDefault();
        setButtonClicked(e.target.value)
        //입력값 배열에 담기
        // console.log("배열에 값이 담겼는가 : ", writedNum)
        // number 초기화
        // setNumber(number => 0);
    }

    const showNum = (e) => {


        setNumber(parseInt(number))
    }

    // 합쳐진 number를 배열에 담고, number 초기화

    // 계산함수
    const Calculation = (e) => {
        // writedNum.push(number)
        switch (buttonClicked) {
            case "+":
                // setNumber(writedNum[0] + e.target.value);
                setNumber(parseInt(number));
                break;
            case "-":
                setNumber(calcResult - parseInt(number));
                break;
            case "*":
                setNumber(calcResult * parseInt(number));
                break;
            case "/":
                setNumber(calcResult / parseInt(number));
                break;
            case "=":
                setNumber(calcResult);
                break;
            default: setCalcResult("Calc Result");
        }
    }
    const resetHandler = () => {
        setNumber(number => 0);
        let writedNum = [];
    }

    return (
        <div>
            <textarea onChangeCapture={showNum} onChange={showNum} value={number}></textarea>
            <form onSubmit={Calculation}>
                <button type="button" value="1" onClick={clickedNum}>1</button>
                <button type="button" value="2" onClick={clickedNum}>2</button>
                <button type="button" value="3" onClick={clickedNum}>3</button>
                <button type="button" value="4" onClick={clickedNum}>4</button>
                <br />
                <button type="button" value="5" onClick={clickedNum}>5</button>
                <button type="button" value="6" onClick={clickedNum}>6</button>
                <button type="button" value="7" onClick={clickedNum}>7</button>
                <button type="button" value="8" onClick={clickedNum}>8</button>
                <br />
                <button type="button" value="9" onClick={clickedNum}>9</button>
                <button type="sumbit" onClick={clickedNum} value="+">+</button>
                <button type="sumbit" onClick={clickedNum} value="-">-</button>
                <button type="sumbit" onClick={clickedNum} value="*">*</button>
                <br />
                <button type="sumbit" onClick={clickedNum} value="/">/</button>
                <button type="sumbit" onClick={arithmetic} value="=">=</button>
                <button className="clear" onClick={resetHandler}>Reset</button>
            </form>
        </div>
    )
}