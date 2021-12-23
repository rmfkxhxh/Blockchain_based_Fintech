import React from "react";
import Styled from "styled-components"

const Circle = Styled.div`
    width: 5rem;
    height: 5rem;
    background: ${props => props.color || 'red'};
    border-radius: 50%;
`;
export default Circle;