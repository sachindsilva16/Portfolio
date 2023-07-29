import React from "react";
import "./styles.css"

const App = () =>{

    return(
        <header className="header">

            {/* Header Logo name */}
            <a href='#' className="logo">PortFolio</a>

        {/* Navigation bar */}
            <nav className="navbar">
                <a href='#home' className="active">Home</a>
                <a href='#experience'>Experience</a>
                <a href='#about'>About</a>
                <a href='#projects'>Projects</a>
                <a href='#contact'>Contact</a>
            </nav>
        </header>
    );
}

export default App;