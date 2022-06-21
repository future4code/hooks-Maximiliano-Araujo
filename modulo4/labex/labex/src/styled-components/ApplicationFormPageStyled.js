import styled from "styled-components"

export const MainContainerPage = styled.div`
box-sizing: border-box;
max-height: 100vh;
max-width: 100vw;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: end;
`

export const ApplicationPageContainer = styled.div`
height: 80vh;
width: 45vw;
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
`

export const ImageSide = styled.img`
background-image: url(${props => props.img}) fixed no-repeat;
width: 100vw;
height: 100vh;
`
export const TittleApplicationForm = styled.h1`
color: #181822;
font-size: 50px;
padding-top: 13px;
`
export const SelectItens = styled.select`
width: 350px;
 padding: 7px;
     font-size: 21px;
     border-width: 0px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;
     color: #192048;
     border-style: solid;
     border-radius: 10px;
     box-shadow: 0px 0px 5px rgba(66,66,66,.47);
     text-shadow: 0px 0px 0px rgba(66,66,66,.5);
`
export const OptionItens = styled.option`
padding: 7px;
     font-size: 21px;
     border-width: 0px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;
     color: #192048;
     border-style: solid;
     border-radius: 20px;
     box-shadow: 0px 0px 5px rgba(66,66,66,.47);
     text-shadow: 0px 0px 0px rgba(66,66,66,.5);
`

export const InputItens = styled.input`
width: 350px;
 padding: 7px;
     font-size: 21px;
     border-width: 0px;
     border-color: #CCCCCC;
     background-color: #FFFFFF;
     color: #000000;
     border-style: solid;
     border-radius: 10px;
     box-shadow: 0px 0px 5px rgba(66,66,66,.47);
     text-shadow: 0px 0px 0px rgba(66,66,66,.5);
`
export const ButtonApplicationForm = styled.button`
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  font-size: 100%;
  height: 50px;
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
  width: 150px;
  cursor: pointer
`