import React from "react";
import styled from "styled-components";

const MessagesDiv = styled.div`
    padding: 5px 20px;

`

const Div = styled.div`
    display: flex;
`
const P = styled.p`
    font-weight: bold;
`

  function Messages ({messages}){
      return (
          <MessagesDiv>
              {messages.map((index) => (
              <Div>
                <P>{index.user}</P>
                <p>: {index.message}</p>
              </Div>
            ))}
          </MessagesDiv>
      ) 
}

export default Messages;
