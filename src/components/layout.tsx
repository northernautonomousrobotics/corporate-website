import * as React from "react";
import Footer from "./footer";
import NavBar from "./navbar";

export interface ILayout {
  children: React.ReactElement;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <NavBar/>
      {children}
    </>
  );
};

export default Layout;
