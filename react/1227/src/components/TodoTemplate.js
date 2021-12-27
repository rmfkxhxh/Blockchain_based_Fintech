import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    width: 512px;
    height:  768px;

    position: relative;  //나중에 박스 하단에 추가버튼 위치 시키기 위한 설정 
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 0 auto; //page center에 나타나도록 설정
    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
`;

function TodoTemplate({ children }) {
    return (
        <TodoTemplateBlock>{children}</TodoTemplateBlock>
    )
}

export default TodoTemplate;