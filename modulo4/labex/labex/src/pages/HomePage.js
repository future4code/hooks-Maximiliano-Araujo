import React from "react"
import { useNavigate } from "react-router-dom"
import { Container } from "../styled-components/General-styled"
import { ContainerCenter } from "../styled-components/General-styled"
import spaceShip from "../img/undraw_outer_space_re_u9vd.svg"
import { CenterImage } from "../styled-components/General-styled"
import { BackGroundImage } from "../styled-components/General-styled"
import backgroundImageMars from "../img/backgroundMars.png"
import { Button, Buttons , Tittle , ButtonAdmin } from "../styled-components/General-styled"

export const HomePage = () => {
    const navigate = useNavigate()

    const goToListTripPages = () => {
        navigate("ListTripsPage")
    }
    const goToApplicationFormPage = () => {
        navigate("/ApplicationFormPage")
    }

    const gotToLoginPage = () => {
        navigate("/LoginPage")
    }

    return (
        <Container>
            <BackGroundImage img={backgroundImageMars} />
            <ContainerCenter>
                <Tittle>LabeX</Tittle>
                <Buttons>
                    <Button onClick={goToListTripPages}>Veja nossas viagens</Button>
                    <Button onClick={goToApplicationFormPage}>Candidate-se!</Button>
                </Buttons>
                <CenterImage src={spaceShip} />
            </ContainerCenter>
            <ButtonAdmin onClick={gotToLoginPage}>Área de Administrador</ButtonAdmin>
        </Container>
    )

}

export default HomePage;


