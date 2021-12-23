import React, {useState} from "react";
import CheckBox from "./CheckBox";

function Reactcss() {
    const [check, setCheck] = useState(false)
    const onChange = (e) => {
        setCheck(e.target.checked);
    };
    return (
        <div>
            <CheckBox onChange={onChange} checked={check}>
                Agreement contract.
            </CheckBox>
            <p>
                <b>check: </b>
                {check ? 'true' : 'false'}
            </p>
        </div>
    )
}

export default Reactcss;