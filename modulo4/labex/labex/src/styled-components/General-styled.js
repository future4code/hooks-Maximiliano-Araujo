import styled from "styled-components";
import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

export const Container = styled.div`
height: 100vh;
width: 100vw;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;
background-color: #fb8500;
`

export const ContainerCenter = styled.div`
height: 60vh;
width: 60vw;
background: rgba( 255, 255, 255, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 13.5px );
-webkit-backdrop-filter: blur( 13.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
position: absolute;
display: flex;
flex-direction: column;
justify-content: end;
justify-content: space-between;
`

export const CenterImage = styled.img`
position: absolute;
height: 600px;
width: 600px;
left: 260px;
top: -80px;
@-webkit-keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
       transform: translateX(-5px);
    } 
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
@keyframes swing
{
    15%
    {
        -webkit-transform: translateX(5px);
        transform: translateX(5px);
    }
    30%
    {
        -webkit-transform: translateX(-5px);
        transform: translateX(-5px);
    }
    50%
    {
        -webkit-transform: translateX(3px);
        transform: translateX(3px);
    }
    65%
    {
        -webkit-transform: translateX(-3px);
        transform: translateX(-3px);
    }
    80%
    {
        -webkit-transform: translateX(2px);
        transform: translateX(2px);
    }
    100%
    {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}
&:hover{
  -webkit-animation: swing 1s ease;
        animation: swing 1s ease;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
}
`
export const BackGroundImage = styled.div`
background-image: url(${props => props.img});
width: 100vw;
height: 100vh;
`
export const Tittle = styled.h1`
padding-left: 15px;
font-size: 95px;
padding-top: 90px;
color: #192048;
`

export const Buttons = styled.div`
display: flex;
gap: 10px;
padding-left: 15px;
padding-bottom: 80px;
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
  width: 160px;
  cursor: pointer;
    
  &:hover{
  height: 60px;
  width: 170px;
  }
`
export const ButtonAdmin = styled.button`
font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
backface-visibility: hidden;
  background-color: #b3f34a;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #4a5ef3;
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
  cursor: pointer;
  position: absolute;
  margin-left: 1100px;
  margin-bottom: 530px;
  &:hover{
  height: 60px;
  width: 170px;
  }
`


