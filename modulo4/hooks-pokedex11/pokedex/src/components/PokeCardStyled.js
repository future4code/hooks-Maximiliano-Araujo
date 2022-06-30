import styled from "styled-components";

export const Card = styled.div`
box-sizing: border-box;
height: 180px;
width: 390px;
display: flex;
gap: 20px;
margin: 0 auto;
background-color: #27cb50;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
`
export const ImagePokemon = styled.img`
max-width: 100%;
display: block;
height: 160px;
width: 160px;
`
export const ButtonsAndName = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
gap: 8px;
`
export const Tittle = styled.h2`
color: white;
align-self: center;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export const Buttons = styled.button`
background-color: transparent;
border-radius: 10px;
border: 2px solid white;
color: white;
font-size: large;
cursor: pointer;
`



