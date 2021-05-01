import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Panel from "../panel/Panel";
import "./Layout.scss";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <section className="flex">
        <Panel />
        {children}
      </section>
      <Footer />
    </div>
  );
}

export default Layout;
