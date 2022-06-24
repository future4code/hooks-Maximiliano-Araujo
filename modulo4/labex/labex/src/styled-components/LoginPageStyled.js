import styled from "styled-components"

export const MainContainerAdmin = styled.div`
box-sizing: border-box;
box-sizing: content-box;
height: 100vh;
width: 100vw;
display: flex;
`
export const ContainerLogin = styled.div`
height: 100vh;
width: 50vw;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 40px;
background-color: #f3f4f6;
`
export const TittleLogin = styled.h1`
color: #16192a;
font-size: 50px;
`

export const BackGroundImageLogin = styled.div`
background-image: url(${props => props.img});
width: 80vw;
height: 80vh;
background-repeat: no-repeat;
margin-left: 80px;
position: relative;

`
export const ContainerMirror = styled.div`
height: 50vh;
width: 50vw;
background: rgba( 255, 255, 255, 0.35 );
backdrop-filter: blur( 13.5px );
-webkit-backdrop-filter: blur( 13.5px );
position: absolute;
margin-top: 329px;
`

export const ContainerImageSide = styled.div`
height: 100vh;
width: 50vw;
background-color: blueviolet;
display: flex;
align-items: center;
justify-content: center;
`

export const Inputslogin = styled.input`
padding: 19px;
     font-size: 25px;
     border-width: 0px;
     width: 470px;
     border-color: grey;
     background-color: #FFFFFF;
     color: #000000;
     border-style: solid;
     border-radius: 5px;
     box-shadow: 0px 0px 5px rgba(66,66,66,.75);
     text-shadow: -36px 0px 11px rgba(66,66,66,.0)
`
export const ButtonEnviar = styled.button`
  appearance: none;
  background-color: #fb8c00;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  width: 120px;
  height: 50px;
  box-shadow: 0px 0px 5px rgba(66,66,66,.75);
`
export const ButtonTeste = styled.button`
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  box-shadow: 10px 8px  black;

&:hover {
  box-shadow: 0px 0px;
  transition: 0.25s;
}
`

