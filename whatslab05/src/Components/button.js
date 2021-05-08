import React from "react";
import styled from "styled-components";

const Div = styled.div`
    width: 10%;
    & > button {
        width: 100%;
    }
`

class Button extends React.Component {
    render() {
        return <Div>
            <button>Enviar</button>
        </Div>
    }
}

export default Button;