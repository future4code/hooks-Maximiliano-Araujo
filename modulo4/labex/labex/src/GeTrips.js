import axios from "axios";
import React, { useState } from "react"
import { BASE_URL } from "./constants/Constants";

export const GetTrips = () => {
    const [tripsList , SetTripsList] = useState({})

    const getTripList = () => {
        axios 
        .get({BASE_URL})
        .then()
        .catch()
    }
    return (
        <></>
    )
}