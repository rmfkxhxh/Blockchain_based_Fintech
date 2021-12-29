import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height: 40px;
  width: 300px;
  border-radius: 10px;
  border: 2px solid green;
  background-color: #03c75a;
  font-size: 16px;
  font-weight: 700;
`;

function CMButton(props) {
  return <StyledButton>{props.text}</StyledButton>;
}

export default CMButton;