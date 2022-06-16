import React, { useEffect, useState } from "react"
import { Buttons, ButtonNo, ButtonYes, Text } from "./CardPhotoStyle"
import { ContainerPhoto } from "./CardPhotoStyle"
import axios from "axios"
import { BASE_URL } from "../../constants"
import { ContainerPhotoInside } from "./CardPhotoStyle"
import { NameAndAge } from "./CardPhotoStyle"
import FavoriteIcon from '@mui/icons-material/Favorite';
import CancelIcon from '@mui/icons-material/Cancel';


export const CardPhoto = () => {
    const [profile, setProfile] = useState({})

    useEffect(() => { getProfile() }, [])

    const getProfile = () => {
        axios
            .get(`${BASE_URL}/person`)
            .then(res => setProfile(res.data.profile))
            .catch(err => console.log(err))
    }

    const choosePerson = (boleano) => {
        const body = {
            id: profile.id,
            choice: boleano
        }
        axios
            .post(`${BASE_URL}/choose-person`, body)
            .then(res => getProfile())
            .catch(err => console.log(err))
    }


    return (
        <ContainerPhoto>
            <ContainerPhotoInside src={profile.photo} />
            <NameAndAge>
                <h3>{`${profile.name},`}</h3>
                <h3>{` ${profile.age}.`}</h3>
            </NameAndAge>
            <Text>
                <h3>{profile.bio}</h3>
            </Text>

            <Buttons>
                <ButtonNo>
                    <button onClick={() => choosePerson(false)} fontSize="larger"><CancelIcon fontSize="large"/></button>
                </ButtonNo>
                <ButtonYes>
                    <button onClick={() => choosePerson(true)} ><FavoriteIcon color="error" fontSize="large"/></button>
                </ButtonYes>
            </Buttons>
        </ContainerPhoto>
    )
}