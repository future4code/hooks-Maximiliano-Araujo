import React from "react"
import { useNavigate } from "react-router-dom"
import { ContainerListTrip, ContainerList, BackgroundImage, ContainerBox } from "../styled-components/ListTripPageStyled"
import listBackground from "../img/listBackground.jpg"
import { Button } from "../styled-components/ListTripPageStyled"


export const ListTripsPage = () => {
    const navigate = useNavigate()

    const goToApplicationFormPage = () => {
        navigate("/ApplicationFormPage")
    }

    return (
        <ContainerListTrip>
            <BackgroundImage src={listBackground} />
            <Button onClick={goToApplicationFormPage}>Canditade-se!</Button>
            <ContainerList>
                <ContainerBox></ContainerBox>
            </ContainerList>
        </ContainerListTrip>
    )

}