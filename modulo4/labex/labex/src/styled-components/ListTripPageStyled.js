import styled from "styled-components";

export const ContainerListTrip = styled.div`
height: 100vh;
width: 100vw;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
background-color: antiquewhite;
`
export const BackgroundImage = styled.img`
background-image: url(${props => props});
height: 100vh;
width: 100vw;
`

export const ContainerList = styled.div`
height: 85vh;
width: 85vw;
border: 1px black solid;
display: flex;
flex-direction: column;
gap: 20px;
background-color: white;
position: absolute;
margin-right: 70px;
background: rgba( 255, 255, 255, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 13.5px );
-webkit-backdrop-filter: blur( 13.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
position: absolute;
display: flex;
align-items: center;
justify-content: center;
margin-left: 70px;
`
export const ContainerBox = styled.div`
height: 75vh;
width: 78vw;
border: 1px #faebd6 double;
border-radius: 5px;
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
gap: 16px;
padding: 16px;
/* overflow-y: scroll; */
`
export const Button = styled.button`
font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  font-size: 100%;
  height: 40px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  width: 160px;
  cursor: pointer;
  position: absolute;
 margin-bottom: 620px;
`
export const MiniContainer = styled.div`
height: 200px;
width: 330px;
background-color: #faedda;
border-radius: 5px;
display: flex;
flex-direction: column;
row-gap: 10px;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
border: 1px solid white;  
`
export const TittleListTrip = styled.h2`
color: #122122;
margin-top: 5px;
align-self: center;
`

export const SecondTittleListTrip = styled.h4`
color: #272a2a;
margin-top: 8px;
margin-left: 4px;
`

export const Paragraph = styled.p`
margin-left: 6px;
`
