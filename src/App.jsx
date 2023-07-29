import React from "react";
import "./styles.css"
import profileImage, { projectImage1, projectImage2, projectImage3, projectImage4 } from "./images/images.js";

const App = () => {


    return (
        <div>
            <header className="header">

                {/* Header Logo name */}
                <a href='#' className="logo">My <span className="logo-name">PortFolio</span></a>

                <i className='bx bx-menu' id="menu-icon"></i>

                {/* Navigation bar */}
                <nav className="navbar">
                    <a href='#home' className="active">Home</a>
                    {/* <a href='#home'>Home</a> */}
                    <a href='#about'>About</a>
                    <a href='#experience'>Experience</a>
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
                        <a href='https://github.com/sachindsilva16' target="_blank"><i className="bx bxl-github"></i></a>
                        <a href='#' target="_blank"><i className='bx bxl-discord-alt' ></i></a>
                        <a href='https://www.linkedin.com/in/sachin-dsilva-43169a1bb' target="_blank"><i className="bx bxl-linkedin-square"></i> </a>
                        <a href='https://twitter.com/sachinrons123' target="_blank"><i className="bx bxl-twitter"></i> </a>
                    </div>
                    {/* RESUME LINK  */}
                    <a href='#' className="btn">Download Resume</a>


                </div>


                {/* SACHIN DSILVA's IMAGE */}
                <div className="home-image">
                    <img src={profileImage} />
                </div>
            </section>



            {/* ABOUT SECTION */}

            <section className="about" id="about">
                <div className="about-image">
                    <img src={profileImage} alt='aboutImage' />
                </div>

                <div className="about-content">
                    <h2 className="heading">About <span>Me</span></h2>
                    <h3>Web Developer</h3>
                    <p>This line will be edited with a content on about me my experience and my future goals... This line will be edited with a content on about me my experience and my future goals...This line will be edited with a content on about me my experience and my future goals...This line will be edited with a content on about me my experience and my future goals...</p>
                    <a href='#' className="btn">Read More</a>
                </div>
            </section>

            {/* EXPERIENCE SECTION */}

            {/* PENDING.... */}
            {/* 
            <section className="experience" id="experience">

            </section> */}

            {/* PROJECT SECTION */}

            <section className="projects" id="projects">

                <h2 className="heading">Latest <span>Projects</span></h2>

                <div className="project-container">

                    {/* BOX 1 */}
                    <div className="project-box">
                        <img src={projectImage1} alt='project1.jpg' />

                        <div className="project-layer">
                            <h4>Chat Bot</h4>
                            <p>hsdhasdjashjdkhasdsdsdsdsdsdsdsd jskd ahdhashdkh askjhdk</p>
                            <a href='#'><i class='bx bx-link-external' ></i></a>
                        </div>

                    </div>

                    {/* BOX 2 */}
                    <div className="project-box">
                        <img src={projectImage2} alt='project1.jpg' />

                        <div className="project-layer">
                            <h4>Blog Oasis</h4>
                            <p>hsdhasdjashjdkhajskd ahdhashdkh askjhdk</p>
                            <a href='#'><i class='bx bx-link-external' ></i></a>
                        </div>

                    </div>

                    {/* BOX 3 */}
                    <div className="project-box">
                        <img src={projectImage3} alt='project1.jpg' />

                        <div className="project-layer">
                            <h4>Curra Nova</h4>
                            <p>hsdhasdjashjdkhajskd ahdhashdkh askjhdk</p>
                            <a href='#'><i class='bx bx-link-external' ></i></a>
                        </div>

                    </div>

                    {/* BOX 4 */}
                    <div className="project-box">
                        <img src={projectImage4} alt='project1.jpg' />

                        <div className="project-layer">
                            <h4>My Loop Studios</h4>
                            <p>hsdhasdjashjdkhajskd ahdhashdkh askjhdk</p>
                            <a href='#'><i class='bx bx-link-external' ></i></a>
                        </div>

                    </div>

                </div>
            </section>



            {/* CONTACT SECTION */}


            <section className="contact" id="contact">

            </section>





        </div>
    );
}

export default App;