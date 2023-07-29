import React from "react";
import "./styles.css"
import homeImage from "./images/images";

const App = () => {


    return (
        <div>
            <header className="header">

                {/* Header Logo name */}
                <a href='#' className="logo">My PortFolio</a>

                <i className='bx bx-menu' id="menu-icon"></i>

                {/* Navigation bar */}
                <nav className="navbar">
                    <a href='#home' className="active">Home</a>
                    {/* <a href='#home'>Home</a> */}
                    <a href='#experience'>Experience</a>
                    <a href='#about'>About</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </nav>
            </header>




            {/* HOME SECTION */}

            <section className="home" id="home">

                <div className="home-content">
                    <h3>Hi, My Name is</h3>
                    <h1>Sachin Dsilva</h1>
                    <h3>And I'm a <span id="element">Web Developer</span></h3>
                    <p>Stay connected..</p>


                    {/* SOCIA MEDIA ICONS */}

                    <div className="social-media">
                        <a href='#'><i className="bx bxl-github"></i></a>
                        <a href='#'><i className='bx bxl-discord-alt' ></i></a>
                        <a href='#'><i className="bx bxl-linkedin-square"></i> </a>
                        <a href='#'><i className="bx bxl-twitter"></i> </a>
                    </div>
                    {/* RESUME LINK  */}
                    <a href='#' className="btn">Download Resume</a>


                </div>


                {/* SACHIN DSILVA's IMAGE */}
                <div className="home-image">
                    <img src={homeImage}/>
                </div>
            </section>



            {/* ABOUT SECTION */}

            <section className="about" id="about">
                <div className="about-image">
                    <img src={homeImage} alt=''/>
                </div>

                <div className="about-content">
                    <h2 className="heading">About <span>Me</span></h2>
                    <h3>Web Developer</h3>
                    <p>This line will be edited with a content on about me my experience and my future goals... </p>
                    <a href='#' className="btn">Read More</a>
                </div>
            </section>
        </div>
    );
}

export default App;