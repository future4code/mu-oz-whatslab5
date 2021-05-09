import React,{useState} from "react";
import styled from "styled-components";
import Messages from "./Components/messages";

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
  width: 30%;
`


function App() {
  const [messages, setMessages] = useState ([])
  const [user, setUser] = useState ("")
  const [message, setMessage] = useState ("")

  function sendMessages (){
    const getMessages = {
      user: user,
      message: message
    }

    const important = [...messages, getMessages]
    setMessages(important)

    setUser ("")
    setMessage ("")

    console.log(message)
    console.log(messages)
    console.log(getMessages)
  }
    return <MainColumn>
      <Messages messages={messages}/>
            <Div>
            <NameDiv 
                type="text" 
                placeholder="Usuário" 
                onChange={(e) => {setUser(e.target.value)}} 
                value={user}
            />
            <MessageDiv 
                type="text" 
                placeholder="Mensagem" 
                onChange={(e) => {setMessage(e.target.value)}} 
                value={message}
            />
            <ButtonDiv onClick={sendMessages}>Enviar</ButtonDiv>
        </Div>  
        </MainColumn>
        }


export default App;
