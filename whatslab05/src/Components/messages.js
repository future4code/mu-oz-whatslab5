import React from "react";
import styled from "styled-components";

const MessagesDiv = styled.div`
    padding: 5px 20px;
    
`

class Messages extends React.Component {
    state = {
        mensagem: "teste"
    }

    

    render() {
        return <MessagesDiv>
            <p>usuaroX: mensagemEscrita</p>
        </MessagesDiv>
    }
}

export default Messages;