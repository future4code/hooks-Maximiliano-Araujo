import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ListTripsPage } from "../pages/ListTripsPage"
import { ApplicationFormPage } from "../pages/ApplicationFormPage"
import {AdminHomePage} from "../pages/AdminHomePage"
import { LoginPage } from "../pages/LoginPage";
import Error from "../pages/Error"


export function RoutesMain() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/ListTripsPage" element={<ListTripsPage />} />
                <Route path="/ApplicationFormPage" element={<ApplicationFormPage />} />
                <Route path="/AdminHomePage" element={<AdminHomePage />} />
                <Route path="/LoginPage" element={<LoginPage />} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}
