import styled from "styled-components";
import ErrorImage from "../img/error.jpg"

const ContainerError = styled.div`
 max-width: 100vw;
 max-height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: black;
 `


const ErrorImg = styled.img`
 max-width: 100vw;
 max-height: 100vh;
 `


const Error = () => {
    return (
        <ContainerError>
            <ErrorImg src={ErrorImage} />
        </ContainerError>
    )
}

export default Error;