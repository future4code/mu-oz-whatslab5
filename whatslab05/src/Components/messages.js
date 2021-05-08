import React from "react";
import styled from "styled-components";

const MessagesDiv = styled.div`
    padding: 5px 20px;
`

class Messages extends React.Component {
    render() {
        return <MessagesDiv>
            <p>teste mensagens</p>
        </MessagesDiv>
    }
}

export default Messages;