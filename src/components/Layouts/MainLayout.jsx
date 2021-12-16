import React, { Fragment } from "react";
import Footer from './../common/Footer';
import MainNav from './../navs/MainNav';
import Header from './../common/Header';
import TopNav from "../navs/TopNav";

const MainLayout = (props) => {
    return (
        <Fragment>
            <div className="landing-layer">
                <div className="container">
                    <TopNav />
                    <Header />
                </div>
            </div>

            <MainNav />

            <main id="home-page">
                <div className="container">
                    {props.children}
                </div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default MainLayout;