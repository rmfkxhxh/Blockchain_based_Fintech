import React, {useState} from "react";

function Wow() {
    const [inputs, setInput] = useState({});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput(inputsValues => ({...inputsValues, [name]: value})) //키는 []
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
    }

    return (
        <form onSubmit={handleSubmit}>
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
        </form>
    );
}
export default Wow;