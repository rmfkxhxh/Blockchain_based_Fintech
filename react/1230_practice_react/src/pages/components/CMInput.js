import React from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
  height: 40px;
  width: 300px;
  border-radius: 10px;
  font-size: 20px;
  border: 2px solid gray;
`;

function CMInput(props) {
  return <StyledInput placeholder={`Enter ${props.hint}`} type={props.hint} />;
}

export default CMInput;