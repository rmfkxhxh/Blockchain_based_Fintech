import React from 'react';

function Jsxtest() {
    let name = "my name is react~~~~~~~~!!!!!!!!!!!!~~~~~~~~~"
    return (
        <React.Fragment> 
            <div>
                <h1>Hello World~~~</h1>
            </div>
            <div>
                <h1>Hello React!!!!!!!~~~</h1>
                <h2>{name}</h2>
            </div>
            <form>
                <input type="text" value='input'/>
            </form>
            <br />
            <label>hello label</label>
        </React.Fragment>
    );
}

export default Jsxtest;