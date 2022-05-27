import React from "react";

import { Container, Buttons, ButtonUser, ButtonMessage, ButtonSend } from "./styled";


function App() {
  return (
    <Container>

      <Buttons>
        <ButtonUser></ButtonUser>
        <ButtonMessage></ButtonMessage>
        <ButtonSend>Botão</ButtonSend>
      </Buttons>



import {Container, Buttons, ButtonUser, ButtonMessage, ButtonSend} from "./styled"


function App(){
  return(
    <Container>
      
      <Buttons></Buttons>
      <ButtonUser>User</ButtonUser>      
      <ButtonMessage>Enviar</ButtonMessage>
      <ButtonSend>Send</ButtonSend>


    </Container>

  )
}

export default App;