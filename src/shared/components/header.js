import React from "react";
import HeaderTop from "./header-top";
import HeaderBottom from "./header-bottom";
const Header = () => {
    return (
        <header className="header_section">
            <HeaderTop/>        
            <HeaderBottom />                                
        </header>
    )
}

export default Header;