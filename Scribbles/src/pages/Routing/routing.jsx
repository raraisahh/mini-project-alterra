/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/landingPage";
import Login from "../Login/login";

function Routing() {

    return (        
        <Routes>
            <Route path="/" index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default Routing;