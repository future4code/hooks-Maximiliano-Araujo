import styled from "styled-components"

export const ContainerMainCreateTrip = styled.div`
height: 75vh;
width: 30vw;
display: flex;
flex-direction: column;
align-items: center;
gap: 27px;
position: fixed;
margin-right: 900px;
margin-top: 100px;
background: rgba( 255, 255, 255, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 100.5px );
-webkit-backdrop-filter: blur( 13.5px );
border-radius: 10px;
`
export const TittleCreateTrip = styled.h1`
color: black;
font-size: 45px;
padding-top: 13px;
`

export const InputsCreateTrip = styled.input`
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
export const SelectCreateTrip = styled.select`
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
export const OptionCreateTrip = styled.option`
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
export const ButtonCreateTrip = styled.button`
/* font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"; */
  font-size: 20px;
  font-weight: 600;
  backface-visibility: hidden;
  background-color: black;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  height: 50px;
  line-height: 1.15;
  margin: 12px 0 0;
  overflow: hidden;
  padding: 0 25px;
  text-align: center;
  width: 100px;
  cursor: pointer;

`