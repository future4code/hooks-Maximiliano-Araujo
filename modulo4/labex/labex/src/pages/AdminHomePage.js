import React from "react"
import { useNavigate } from "react-router-dom"

export const AdminHomePage = () => {
const navigate = useNavigate()

const goToLoginPage = () => {
    navigate("/LoginPage")
}

const goBack = () => {
    navigate(-1)
}

    return (
        <div>
            <h1>
            AdminHomePage
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToLoginPage} >Página de Login</button>              
            </h1>
        </div>
    )

}