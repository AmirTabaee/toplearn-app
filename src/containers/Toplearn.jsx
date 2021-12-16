import React, { Fragment } from "react";
import Courses from "../components/courses/courses";
import MainLayout from "../components/Layouts/MainLayout";
import Login from "../components/login/Login";
import Register from "../components/Register/Register";

const Toplearn = () => {
    return (
        <MainLayout>
            <Courses />
            <Login/>
            <Register/>
        </MainLayout>
    );
};

export default Toplearn;
