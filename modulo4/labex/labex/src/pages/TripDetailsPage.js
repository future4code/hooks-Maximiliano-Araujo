import React, {useEffect } from "react"
import { ContainerMainTripDetails } from "../styled-components/TripDetailsPageStyled"
import { BASE_URL } from "../constants/Constants"
import axios from "axios"



export const TripDetaisPage = () => {
    useEffect(() => {
        const headers = {
            headers:{
                auth: localStorage.getItem("token")
            }
        }

        axios
        .get(`${BASE_URL}trip/:id` , headers)
        .then((resp) => 
        console.log(resp.data))
        .catch((error)  => {
            console.log(error.response)
        })
    }, [])

    


    return (
        <ContainerMainTripDetails>
        

        </ContainerMainTripDetails>

    )

}