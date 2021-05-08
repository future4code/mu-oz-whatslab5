import React from "react";
import styled from "styled-components";

const NameDiv = styled.div`
    width: 20%;
`

class Inputname extends React.Component {
    render() {
        return <NameDiv>
            <input type="text" placeholder="Usuário"/>
        </NameDiv>

    }
}

export default Inputname;