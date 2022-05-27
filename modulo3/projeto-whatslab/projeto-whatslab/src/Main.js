import React from "react";
import {Container, ButtonUser, ButtonMessage, ButtonSend} from "./styled";


export class Main extends React.Component {
    state={
        dados:[
            {
                usuario: "",
                mensagem: "",
            }
        ]
    }
}

recebeUsuario (event) {
    this.setState({usuario: event.target.value})
}

recebeMensagem (event) {
    this.setState({mensagem: event.target.value})
}




// function App(){
//     return(
//       <Container>
  
       
//         <ButtonUser></ButtonUser>
        
//         <ButtonMessage></ButtonMessage>
        
//         <ButtonSend>Botão</ButtonSend>
        
  
//       </Container>
  
//     )
//   }
  
  export default App;