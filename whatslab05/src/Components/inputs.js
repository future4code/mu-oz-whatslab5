import React from "react";
import styled from "styled-components";

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


class Inputs extends React.Component {
    state = {
        mensagemEscrita: "",
        user: ""
    }

    onChangeMessage = (e) => {
        this.setState({
            mensagemEscrita: e.target.valueee
        })
    }
    onChangeUser = (e) => {
        this.setState({
            user: e.target.value
        })
    }

    render() {
        return <Div>
            <NameDiv 
                type="text" 
                placeholder="Usuário" 
                onChange={this.onChangeUser} 
                value={this.state.user}
            />
            <MessageDiv 
                type="text" 
                placeholder="Mensagem" 
                onChange={this.onChangeMessage} 
                valueee={this.state.mensagemEscrita}
            />
            <ButtonDiv onClick={this.funcao}>Enviar</ButtonDiv>
        </Div>
    }
}

export default Inputs;