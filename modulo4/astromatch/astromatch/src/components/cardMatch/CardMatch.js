import axios from "axios"
import React, { useEffect, useState } from "react"
import { BASE_URL } from "../../constants"
import { PhotoMini } from "../cardOptions/CardPhotoStyle"
import { CardMatchStyled , CardMatchTotal } from "./CardMatchStyled"

export const CardMatch = () => {
    const [matches, setMatches] = useState([])

    useEffect(() => { getMatches() }, [])

    const getMatches = () => {
        axios
            .get(`${BASE_URL}/matches`)
            .then(res => {
                setMatches(res.data.matches)
                console.log(res.data.matches)
            })
            .catch(err => console.log(err))
    }


    const showMatches = matches.map((match) => {
        return (
            
            <CardMatchStyled key={match.id}>
                <PhotoMini img src={match.photo}/>                
                <h4>{match.name}</h4>
            </CardMatchStyled>
            
        )
    })
    return <>
        {showMatches}
    </>
}