import React from "react"
import { AdminBackGroundImage, ContainerMainAdmin } from "../styled-components/AdminHomePageStyled"
import { CreateTripPage } from "./CreateTripPage"
import { TripDetaisPage } from "./TripDetailsPage"
import adminBackground from "../img/adminBackground.svg"
import { AdminAreaBox } from "../styled-components/AdminHomePageStyled"

export const AdminHomePage = () => {
    return (
        <ContainerMainAdmin>
            <AdminAreaBox>
                <button>voltar</button>
                <h1>Administrador</h1>
                <button>logout</button>
            </AdminAreaBox>
            <AdminBackGroundImage img={adminBackground}/>
            <CreateTripPage />
            <TripDetaisPage />
        </ContainerMainAdmin>
    )

}