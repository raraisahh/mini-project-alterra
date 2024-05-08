/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/landingPage";
import Login from "../Login/login";
import MainPage from "../MainPage/mainPage";
import DiaryList from "../DiaryList/diaryList";
import DiaryDetail from "../DiaryList/diaryDetail";
import Cs from '../CS/cs';
import NotFound from "../NotFound/notFound";

function Routing() {
    const [data, setData] = useState([]);

    return (        
        <Routes>
            <Route path="/" index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/diarylist" element={<DiaryList data={data} setData={setData} />} />
            <Route path="/diarylist/:id" element={<DiaryDetail data={data} />} />
            <Route path="/cs" element={<Cs />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Routing;