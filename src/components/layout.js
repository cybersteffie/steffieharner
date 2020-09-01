import React from "react";
import Head from "./head";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ placeholder, children, hideNav }) => {
    return (
        <React.Fragment>
            <Head />
            {console.log(children)}
            <Navbar
                hideNav={`${hideNav}`}
                placeholder={placeholder === undefined ? true : placeholder}
            />
            <div className="wrapper">{children}</div>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
