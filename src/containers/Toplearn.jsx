import React, { Fragment } from "react";
import Header from "../components/common/Header";
import Courses from "../components/courses/courses";
import MainNav from "../components/navs/MainNav";
import TopNav from "../components/navs/TopNav";
import Footer from './../components/common/Footer';

const Toplearn = () => {
    return (
        <Fragment>
            <div className="landing-layer">
                <div className="container">
                    <TopNav/>
                    <Header/>
                </div>
            </div>

            <MainNav/>

            <main id="home-page">
                <div className="container">
                    <Courses/>
                </div>
            </main>

            <Footer/>
        </Fragment>
    );
};

export default Toplearn;
