import React from "react";
import styled from "styled-components";

const MessagesDiv = styled.div`
    padding: 5px 20px;
    
`

class Messages extends React.Component {
    state = {
        mensagem: "teste"
    }

    createChat = () => {
        return this.props.messages.map((i) => {
            return <p>{i}</p>;
          });
    }

    render() {
        return <MessagesDiv>
            {this.createChat()}
        </MessagesDiv>
    }
}

export default Messages;