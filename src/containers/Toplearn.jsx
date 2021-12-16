import React from "react";
import Courses from "../components/courses/courses";
import MainLayout from "../components/Layouts/MainLayout";
import {Route , Switch} from 'react-router-dom';
import Login from './../components/login/Login';
import Register from './../components/Register/Register';

const Toplearn = () => {
    return (
        <MainLayout>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/" exact component={Courses}/>
            </Switch>
        </MainLayout>
    );
};

export default Toplearn;
