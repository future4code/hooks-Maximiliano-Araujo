import styled from "styled-components"

export const ContainerMainAdmin = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
gap: 40px;
background-color: #8a2be1;
`
export const AdminBackGroundImage = styled.div`
background-image: url(${props => props.img});
width: 150vw;
height: 150vh;
background-repeat: no-repeat;
margin-top: -329px;
margin-left: 400px;

`
export const AdminAreaBox = styled.div`
height: 10vh;
width: 30vw;
background-color: #faebd6;
border-radius: 5px;
position: absolute;
margin-right: 900px;
margin-bottom: 520px;
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
background: rgba( 255, 255, 255, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 1px );
-webkit-backdrop-filter: blur( 1px );
border-radius: 10px;
`

