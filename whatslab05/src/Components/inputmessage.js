import React from "react";
import { Children } from "react";
import styled from "styled-components";

const MessageDiv = styled.div`
    width: 70%;
    & > input {
        width:100%
    }
`

class Inputmessage extends React.Component {
    render() {
        return <MessageDiv>
            <input type="text" placeholder="Mensagem"/>
        </MessageDiv>

    }
}

export default Inputmessage;