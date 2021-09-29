import React from "react";
import {Bars, Nav, NavBtn, NavBtnLink, NavLink, NavLogo, NavMenu} from "./navbar-elements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    ETD Logging
                </NavLogo>
                <Bars />

                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/logs" activeStyle>
                        Logs
                    </NavLink>
                    <NavLink to="/dashboard" activeStyle>
                        Dashboard
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/sign-up">Logout</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
};
export default Navbar;