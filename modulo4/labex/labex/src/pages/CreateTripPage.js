import React from "react"
import { ContainerMainCreateTrip } from "../styled-components/CreateTripPageStyled"
import { InputsCreateTrip , SelectCreateTrip , OptionCreateTrip , ButtonCreateTrip , TittleCreateTrip } from "../styled-components/CreateTripPageStyled"


export const CreateTripPage = () => {
    return (
        <ContainerMainCreateTrip>           
            <TittleCreateTrip>Criar Viagem</TittleCreateTrip>
            <InputsCreateTrip placeholder="Nome" />  
            <SelectCreateTrip>
            <OptionCreateTrip>Escolha um planeta</OptionCreateTrip>
                    <OptionCreateTrip>Mercúrio</OptionCreateTrip>
                    <OptionCreateTrip>Vênus</OptionCreateTrip>
                    <OptionCreateTrip>Marte</OptionCreateTrip>
                    <OptionCreateTrip>Júpiter</OptionCreateTrip>
                    <OptionCreateTrip>Saturno</OptionCreateTrip>
                    <OptionCreateTrip>Urano</OptionCreateTrip>
                    <OptionCreateTrip>Netuno</OptionCreateTrip>
                </SelectCreateTrip>  
                <InputsCreateTrip type="date"/> 
                       <InputsCreateTrip placeholder="Descrição"/>
                       <InputsCreateTrip placeholder="Duração em dias" type="number"/>
                       <ButtonCreateTrip>Criar</ButtonCreateTrip>
        </ContainerMainCreateTrip>

    )

}