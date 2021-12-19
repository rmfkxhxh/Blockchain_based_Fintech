import React, {useState} from "react";

function Wow() {
    const [inputs, setInput] = useState({});
    console.log('start')
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(inputsValues => ({...inputsValues, [name]: value})) //키는 []
        console.log('handlechange')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted ' + inputs)
    }

    return (
        <>
            <h1>Wow.js</h1>
            <form onSubmit={handleSubmit}>
                {console.log('return')}
                <label>Enter your name : &nbsp; 
                    <input 
                        type="text"
                        name="username"
                        value={inputs.username || ""} //값이 없으면 string 값
                        onChange={handleChange}>
                    </input>
                </label>
                <label>
                    <input 
                        type="number"
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}>
                    </input>
                </label>
                <input type="submit" />
                {console.log('return2')}
            </form>
        </>
    );
}
export default Wow;