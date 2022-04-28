import styled from 'styled-components';



export const Container = styled.div`
  margin: 2px auto;
  background-image: url(./whatsapp.jpg);  
  height: 98vh;
  width: 50vw; 
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Buttons =styled.div`
  box-sizing: border-box; 
  background-color: white;
  display: flex;
  height: 5vh;
  max-width: 100vw;
` ;

export const ButtonUser =styled.input`
 width: 10vw;
  background-color: white;
  border: 1px solid black;
  border-radius: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonMessage = styled.input`
 border-radius: 5%;
  width: 34vw;
  background-color: white;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonSend = styled.button `
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 13%;
  background-color: aqua;
  width: 5vw;
`;