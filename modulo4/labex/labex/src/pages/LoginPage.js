import React, { useState , useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../constants/Constants"
import { MainContainerAdmin, TittleLogin , ButtonTeste } from "../styled-components/LoginPageStyled"
import { ContainerLogin, Inputslogin, ButtonEnviar, ContainerImageSide, BackGroundImageLogin, ContainerMirror } from "../styled-components/LoginPageStyled"
import sunsetProfilePage from "../img/sunsetProfilePage.svg"


export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = () => {

        const body = {
            email: email,
            password: password
        }

        axios
            .post(`${BASE_URL}login`, body)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                navigate("/AdminHomePage")
            })
            .catch((err) => {alert("Usuário ou senha inválidos.")})
    }


    //=================== useNavigate ======================//
    const navigate = useNavigate()

    return (
        <MainContainerAdmin>
            <ContainerImageSide>
                <BackGroundImageLogin img={sunsetProfilePage} />
                <ContainerMirror />
            </ContainerImageSide>
            <ContainerLogin>
                <TittleLogin>Login</TittleLogin>
                <Inputslogin onChange={onChangeEmail} type="email" placeholder="Email:" value={email}></Inputslogin>
                <Inputslogin onChange={onChangePassword} type="password" placeholder="Senha:" value={password}></Inputslogin>
                <ButtonEnviar onClick={onSubmitLogin} >Enviar</ButtonEnviar>
            </ContainerLogin>
        </MainContainerAdmin>
    )

}

