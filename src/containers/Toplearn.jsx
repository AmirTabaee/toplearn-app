import React, { Fragment } from "react";
import Courses from "../components/courses/courses";
import MainLayout from "../components/Layouts/MainLayout";
import Login from "../components/login/Login";
import Register from "../components/Register/Register";
import {Route , Routes} from 'react-router-dom';

const Toplearn = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/login" element={<Register/>}/>
                <Route path="/register" element={<Login/>}/>
                <Route path="/" element={<Courses/>}/>
            </Routes>
        </MainLayout>
    );
};

export default Toplearn;
