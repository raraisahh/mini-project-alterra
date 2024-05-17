import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../LandingPage/landingPage";
import SignUp from "../Login/signUp";
import Login from "../Login/login";
import MainPage from "../MainPage/mainPage";
import DiaryList from "../DiaryList/diaryList";
import DiaryDetail from "../DiaryList/diaryDetail";
import Cs from '../CS/cs';
import NotFound from "../NotFound/notFound";
import PrivateRouting from "./privateRouting"; 

function Routing() {
    const [data, setData] = useState([]);

    return (        
        <Routes>
            <Route path="/" index element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRouting />}> 
                <Route path="/mainpage" element={<MainPage/>} />
                <Route path="/diarylist" element={<DiaryList data={data} setData={setData} />} />
                <Route path="/diarylist/:id" element={<DiaryDetail data={data} />} />
                <Route path="/cs" element={<Cs />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default Routing;

