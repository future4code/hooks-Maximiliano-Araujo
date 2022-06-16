import styled from "styled-components"

export const ContainerPhoto =styled.div`
display: flex;
align-items: center;
flex-direction: column;

 h3 {
     display: flex;
     gap: 8px;
     margin-left: 5px;
 }
 button {
    background-color: transparent;
    border: none; 
 }
`

export const ContainerPhotoInside = styled.img`
justify-content: center;
align-items: center;
box-sizing: border-box;
box-sizing: content-box;
height: 60vh;
width: 27vw;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export const PhotoMini = styled.img`
height: 50px;
width: 50px;
border-radius: 40px;
`
export const NameAndAge = styled.h3`
position: absolute;
left: 490px;
top: 440px;
`
export const Text = styled.h4`
position: absolute;
left: 494px;
top: 470px;
`
export const Buttons = styled.div`
position: absolute;
display: flex;
margin-top: 450px;
`
export const ButtonNo = styled.button`
`
export const ButtonYes = styled.button`
`
