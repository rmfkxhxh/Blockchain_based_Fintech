import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0)
    const countUp = (e) => {
        // setCount(count+1)
        setCount(prevNumber => prevNumber+1)
        // setCount(count++)
        console.log("+1", e.type)
    }
    const countDown = (e) => {
        // setCount(count-1)
        setCount(prevNumber => prevNumber-1)
        // setCount(count--)
        console.log("-1", e.type)
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={countUp}>+1</button>
            <button onClick={countDown}>-1</button>
        </>
    );
}

export default Counter;