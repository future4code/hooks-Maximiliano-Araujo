import React from "react"
import styled from "styled-components"
import { Container } from "../styled-components/General-styled"
import nasa from "../img/nasa.png"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Link } from "react-router-dom"
import { ListTripspage } from "./ListTripsPage"


const HomePageHeader = styled.header`
box-sizing: border-box;
height: 15vh;
width: 100vw;
border: 1px black solid;
display: flex;
align-items: center;
justify-content: space-between;
 h1 {
    margin-left: 10px;
 }
 h3 {
    margin-right: 10px;
 }
`

const HomePageMain = styled.main`
display: flex;
justify-content: center;
align-items: center;
height: 85vh;
`


const HomePage = () => {
    return (
        <Container>
            <HomePageHeader>
                <h1>LabeX</h1>
                <h3>Área do adiministrador</h3>
            </HomePageHeader>
            <HomePageMain>
                <button>Veja nossas viagens!</button>
            </HomePageMain>
            <Router>
                <Routes>
                    <Route path="/" exact element={< ListTripspage />} />
                </Routes>
            </Router>

        </Container>
    )

}

export default HomePage;


