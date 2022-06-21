import React from "react"
import { ApplicationPageContainer } from "../styled-components/ApplicationFormPageStyled"
import { MainContainerPage } from "../styled-components/ApplicationFormPageStyled"
import applicationBackground from "../img/applicationBackground.png"
import { ImageSide } from "../styled-components/ApplicationFormPageStyled"
import { TittleApplicationForm , SelectItens , InputItens , ButtonApplicationForm , OptionItens} from "../styled-components/ApplicationFormPageStyled"


export const ApplicationFormPage = () => {
    const Buttonsend = () => {
        alert("Cadastro enviado com sucesso!")
    }
    return (
        <MainContainerPage>
                <ImageSide src={applicationBackground}/>    
            <ApplicationPageContainer>
                <TittleApplicationForm>Candidate-se</TittleApplicationForm>
                <SelectItens >
                    <OptionItens>Escolha uma viagem</OptionItens>
                </SelectItens>
                <InputItens placeholder="Nome:" />
                <InputItens placeholder="Idade:" />
                <InputItens placeholder="Texto de candidatura:" />
                <InputItens placeholder="Profissão:" />
                <SelectItens>
                <OptionItens>Escolha um planeta</OptionItens>
                    <OptionItens>Mercúrio</OptionItens>
                    <OptionItens>Vênus</OptionItens>
                    <OptionItens>Marte</OptionItens>
                    <OptionItens>Júpiter</OptionItens>
                    <OptionItens>Saturno</OptionItens>
                    <OptionItens>Urano</OptionItens>
                    <OptionItens>Netuno</OptionItens>
                </SelectItens>
                <ButtonApplicationForm onClick={Buttonsend} >Enviar</ButtonApplicationForm>
            </ApplicationPageContainer>
        </MainContainerPage>
    )

}