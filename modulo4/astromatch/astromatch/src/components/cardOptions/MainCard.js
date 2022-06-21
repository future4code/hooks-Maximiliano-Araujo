import React, { useState } from "react";
import { ContainerMain } from "./Container";
import { ContainerBox } from "./Container";
import Header from "./Header";
import { CardPhoto } from "./CardPhoto";
import { CardMatch } from "../cardMatch/CardMatch";
import { BASE_URL } from "../../constants";
import axios from "axios";
import Button from '@mui/material/Button';


export const MainCard = () => {
    const [showPage, setShowPage] = useState("cardOptions")

    const renderPage = () => {
        if (showPage === "cardOptions") {
            return <>                      
                <CardPhoto />             
                </>            
        } else if
            (showPage === "cardMatch") {
            return <CardMatch />
        }
    }

    const changePage = (page) => {
        setShowPage(page)
    }

    const clear = () => {
        axios 
        .put(`${BASE_URL}/clear`)
        .then(res => showPage)
        .catch(err => console.log(err))
    }

    return (
        <>
            <ContainerMain>
            <ContainerBox>
                <Header changePage={changePage} showPage={showPage}/>
                {renderPage()}
                </ContainerBox>
                <Button variant="contained" onClick={() => clear()} color="secondary" width="100px">Clear</Button>     
            </ContainerMain>          
        </>
    )
}