import React, { useState, useRef } from 'react';

export default function Calc() {
    const [inputs, setInputs] = useState(0);

    // const resultRef = useRef();

    const addToInput = (e) => {
        // nameBtn.current.reset();
        // const inp = [inputs]
        const lastIn = [inputs].at(-1)
        if (inputs === 0) {
            setInputs(e.target.value);
        } else {
            if (lastIn === '+' || lastIn === '-' || lastIn === '/' || lastIn === '*') {
                setInputs([inputs].slice(0, ([inputs].length - 1)) + e.target.value)
            } else {
                setInputs(inputs + e.target.value);
            }
        }

        console.log("input : ", lastIn)
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

