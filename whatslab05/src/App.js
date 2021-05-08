import React from "react";
import Inputname from "./Components/inputname";
import Messages from "./Components/messages";
import Inputmessage from "./Components/inputmessage";
import Button from "./Components/button";
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

const Inputs = styled.div`
  display: flex;
`

function App() {
  return (
    <MainColumn>
      <Messages/>
      <Inputs>
        <Inputname/>
        <Inputmessage/>
        <Button/>
      </Inputs>
    </MainColumn>
  );
}

export default App;
