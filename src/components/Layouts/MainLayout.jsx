import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

import Footer from "./../common/Footer";
import MainNav from "./../navs/MainNav";
import Header from "./../common/Header";
import TopNav from "../navs/TopNav";

const MainLayout = (props) => {
    const { pathname } = props.location;
    return (
        <Fragment>
            <div className="landing-layer">
                <div className="container">
                    <TopNav />
                    {pathname === "/" ? <Header /> : null}
                </div>
            </div>

            <MainNav />

            <main id="home-page">
                <div className="container">{props.children}</div>
            </main>

            <Footer />
        </Fragment>
    );
};

export default withRouter(MainLayout);
