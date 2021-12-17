import { useState } from "react";

function Hordform() {
    const [clan, setClan] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`The clan name you entered was ${clan}`)
    };


    return(
        <form onSubmit={handleSubmit}>
            <label>Enter Your Clans: &nbsp; 
                <input 
                type="text" 
                value={clan}
                onChange={(e) => setClan(e.target.value)}
                />
            </label> &nbsp; 
            <input type="submit" value="Submit"></input>      
            <div>{clan}</div>      
        </form>
    );
}

export default Hordform;