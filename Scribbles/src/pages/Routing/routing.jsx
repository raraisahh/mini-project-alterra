/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/landingPage";
import Login from "../Login/login";
import MainPage from "../MainPage/mainPage";
import DiaryList from "../DiaryList/diaryList";
import Cs from '../CS/cs';
import NotFound from "../NotFound/notFound";

function Routing() {

    return (        
        <Routes>
            <Route path="/" index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/diarylist" element={<DiaryList />} />
            <Route path="/cs" element={<Cs />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Routing;