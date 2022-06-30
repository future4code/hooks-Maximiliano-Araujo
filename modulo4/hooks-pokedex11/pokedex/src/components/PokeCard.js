import React, { useEffect, useState } from "react"
import axios from "axios"
import { Card, ImagePokemon, Tittle } from "./PokeCardStyled"
import { ButtonsAndName , Buttons} from "./PokeCardStyled"



export const PokeCard = (props) => {
    const [pokeUrl, setPokeUrl] = useState("")

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
            .then((resp) => setPokeUrl(resp.data.sprites.other.dream_world.front_default))
            .catch((error) => console.log(error))
    }, [pokeUrl])

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/type/`)
            .then((resp) => console.log(resp.data.results))
            .catch((error) => console.log(error))
    }, [])



    return (
        <>
            <Card>
                <ButtonsAndName>
                    <Tittle>{props.name}</Tittle>
                    <Buttons>Add Pokédex</Buttons>
                    <Buttons>Detalhes</Buttons>
                </ButtonsAndName>
                <ImagePokemon src={pokeUrl} alt={"pokemon"}/>
            </Card>
        </>
    )
}