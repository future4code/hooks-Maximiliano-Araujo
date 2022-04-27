import React from 'react';
import './App.css';
import { Container ,Buttons ,ButtonUser ,ButtonMessage,ButtonSend } from './styled';





function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Container>
        <Buttons>
          <ButtonUser>User</ButtonUser>
          <ButtonMessage>Message</ButtonMessage>
          <ButtonSend>Send</ButtonSend>
        </Buttons>
      </Container>



      /* <body classname="mainContainer">
        <div className="container">
          <div className="buttons">
            <input className="buttonUser">User</input>
            <input className="buttonMessage">Message</input>
            <button className="buttonSend">Send</button>
          </div>
        </div>
      </body> */
    // </div>

  );
}

export default App;