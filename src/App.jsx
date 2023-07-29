import React from "react";
import "./styles.css"

const App = () =>{

    return(
        <header className="header">
            <a href='#' className="logo">PortFolio</a>


            <nav className="navbar">
                <a href='#home'>Home</a>
                <a href='#experience'>Experience</a>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </nav>
        </header>
    );
}

export default App;