import { useNavigate } from "react-router-dom"
import { ContainerListTrip, ContainerList, BackgroundImage, ContainerBox } from "../styled-components/ListTripPageStyled"
import listBackground from "../img/listBackground.jpg"
import { BASE_URL } from "../constants/Constants"
import { Button } from "../styled-components/ListTripPageStyled"
import axios from "axios";
import { React, useEffect, useState } from "react"
import { MiniContainer } from "../styled-components/ListTripPageStyled"
import { TittleListTrip , SecondTittleListTrip , Paragraph } from "../styled-components/ListTripPageStyled"


export const ListTripsPage = () => {
    const [tripsList, SetTripsList] = useState([])

    useEffect(() => {
        getTripList()
    }, [])

    const getTripList = () => {
        axios
            .get(`${BASE_URL}trips`)
            .then((response) => {
                SetTripsList(response.data.trips)
            })
            .catch((error) => { console.log(error) })

    }
    const navigate = useNavigate()

    const goToApplicationFormPage = () => {
        navigate("/ApplicationFormPage")
    }

    return (
        <ContainerListTrip>
            <BackgroundImage src={listBackground} />
            <Button onClick={goToApplicationFormPage}>Canditade-se!</Button>
            <ContainerList>
                <ContainerBox>
                    {tripsList.map(trips => {
                        return (
                            <MiniContainer>
                                <MiniContainer key={trips.id}>
                                    <TittleListTrip>{trips.name}</TittleListTrip>
                                    <SecondTittleListTrip>{trips.description}</SecondTittleListTrip>
                                    <Paragraph>Planeta: {trips.planet}</Paragraph>
                                    <Paragraph>Duração: {trips.durationdays}</Paragraph>
                                    <Paragraph>Data: {trips.date}</Paragraph>
                                </MiniContainer>
                            </MiniContainer>
                        )
                    })}
                </ContainerBox>
            </ContainerList>
        </ContainerListTrip>




    )

}

