import React from "react";
import Messages from "./Components/messages";
import Inputs from "./Components/inputs";
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

function App() {
  return (
    <MainColumn>
      <Messages/>
      <Inputs/>
    </MainColumn>
  );
}

export default App;
