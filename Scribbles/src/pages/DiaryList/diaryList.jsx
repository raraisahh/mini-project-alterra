/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

function DiaryList() {

    return (
    <>
        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <div className="mx-16 h-screen mt-14">
            <h1>Diary List</h1>
        </div>

        {/* Footer */}
        <Footer />
    </>
    );
}

export default DiaryList;