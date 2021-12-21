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
import React, { useState } from 'react';
/* eslint no-eval: 0 */

export default function Calc() {
    const [inputs, setInputs] = useState(0);

    // const resultRef = useRef();

    const addToInput = (e) => {
        // nameBtn.current.reset();
        
        const lastIn = inputs[inputs.length-1]
        console.log('target value: ' + e.target.value);
        console.log();
        // const inp = [inputs]
        if (inputs === 0) {
            setInputs(e.target.value);
        } else {
            if ((lastIn === '+' || lastIn === '-' || lastIn === '/' || lastIn === '*') && ((e.target.value === '+' || e.target.value === '-' || e.target.value === '/' || e.target.value === '*'))) {
                setInputs(inputs.slice(0, (inputs.length - 1)) + e.target.value)
            } else {
                setInputs(inputs + e.target.value);
            }
        }
    };

    const evalInputs = () => {
        // setInputs(eval(inputs) || 'can not evaluate')
        setInputs(() => {
            // if (err) {
            //     alert('input is invalid')
            //     setInputs(0)
            //     console.log(err)
            // } else {
            return (
                eval(inputs)
            )
            // }
        })
    }

    const resetHandler = () => {
        setInputs(0)
    }

    return (
        <div className='wrapper'>
            
            <div className='calculator'>
                <h1>12-21 Assignment</h1> <p>Calculator</p>
                <input
                    className='result'
                    name="result"
                    value={inputs || '0'}

                />
                <br />
                <button onClick={addToInput} value={9}>9</button>
                <button onClick={addToInput} value={8}>8</button>
                <button onClick={addToInput} value={7}>7</button>
                <button onClick={addToInput} value={'*'}>*</button>
                <br />
                <button onClick={addToInput} value={6}>6</button>
                <button onClick={addToInput} value={5}>5</button>
                <button onClick={addToInput} value={4}>4</button>
                <button onClick={addToInput} value={'+'}>+</button>
                <br />
                <button onClick={addToInput} value={3}>3</button>
                <button onClick={addToInput} value={2}>2</button>
                <button onClick={addToInput} value={1}>1</button>
                <button onClick={addToInput} value={'-'}>-</button>
                <br />
                <button onClick={addToInput} value={0}>0</button>
                <button onClick={addToInput} value={'.'}>.</button>
                <button onClick={evalInputs} >=</button>
                <button onClick={addToInput} value={'/'}>/</button>
                <br />
                <button className="clear" onClick={resetHandler}>Reset</button>
                {/* <div>
                <b>Value</b> <br />
                {inputs}

            </div> */}
            </div>
        </div>
    )
};

