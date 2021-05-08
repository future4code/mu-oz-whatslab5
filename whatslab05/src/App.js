import React from "react";
import Messages from "./Components/messages";
import styled from "styled-components";


const MainColumn = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  border: 1px solid black;
  width: 31%;
  height: 100vh;
  margin: auto;
`
const Div = styled.div`
  display: flex;
`

const NameDiv = styled.input`
    width: 20%;
`

const MessageDiv = styled.input`
    width: 70%;
`
const ButtonDiv = styled.button`
    width: 10%;
`

export default class App extends React.Component {
  state = {
    message: "",
    user: "",
    messageList: []
};

onChangeMessage = (e) => {
    this.setState({
        message: e.target.valueee
    });
};

onChangeUser = (e) => {
    this.setState({
        user: e.target.value
    });
};

createList = () => {
  this.setState({
    messageList: [...messageList, this.state.message],
    message: ""
  });
};

  render () {
    return (
      <MainColumn>
        <Messages messages={this.state.messageList}/>
        <Div>
              <NameDiv 
                  type="text" 
                  placeholder="Usuário" 
                  onChange={this.onChangeUser} 
                  valueName={this.state.user}
              />
              <MessageDiv 
                  type="text" 
                  placeholder="Mensagem" 
                  onChange={this.onChangeMessage} 
                  valueMessage={this.state.message}
              />
              <ButtonDiv onClick={this.createList}>Enviar</ButtonDiv>
          </Div>
      </MainColumn>
    );
  }
}