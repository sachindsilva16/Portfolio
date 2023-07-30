import React, { useState,useEffect } from "react";
import "./styles.css"
import profileImage, { projectImage1, projectImage2, projectImage3, projectImage4 } from "./images/images.js";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";

const App = () => {





    // NAVBAR TRIGGER 'active' class on current section 

    var sections = document.querySelectorAll("section");

    var navLinks = document.querySelectorAll("header nav a");


    window.onscroll = () => {

        sections.forEach(section => {
            var top = window.scrollY;
            var offset = section.offsetTop - 150;
            var height = section.offsetHeight;

            let id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove("active");
                    document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                });
            };
        });
    }









    // -----------------------------------------


    const element = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(element.current, {
            strings: ['Web Developer.', 'Web Designer.'],
            typeSpeed: 70,
            smartBackspace: true,
            backSpeed: 50,
            loop: true,
            loopCount: Infinity,
            shuffle: false,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);




    // NAVBAR TOGGLE BUTTON..


    const [isNavBarOpen, setNavBarOpen] = useState(false);


    // Hide navBar widget when link is clicked..


    {/* SCROLL REVEAL JS  */ }



    ScrollReveal({
        reset: true,
        distance: '70px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top', duration: 1000 })
    ScrollReveal().reveal('.home-image, .project-box,.contact form', { origin: 'bottom', duration: 1000 })
    ScrollReveal().reveal('.home-content h1, .about,.contact form', { origin: 'left', duration:1000 });








    return (
        <div>
            <header className="header" >

                {/* Header Logo name */}
                <a href='#' className="logo">My <span className="logo-name">PortFolio</span></a>

                <i className={isNavBarOpen ? ' bx bx-x' : 'bx bx-menu'} id="menu-icon" style={{ cursor: "pointer" }} onClick={() => {
                    setNavBarOpen((previousState) => {
                        return !previousState;
                    })
                }}></i>
                {/* <button id="menu-btn">
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-"></span>
                </button> */}

                {/* Navigation bar */}
                <nav className={`navbar${ isNavBarOpen ? ' active' : '' }`} >
                    <a href='#home' className="active" onClick={() => {
                        setNavBarOpen(false);
                    }}>Home</a>
                    {/* <a href='#home'>Home</a> */}
                    <a href='#about' onClick={() => {
                        setNavBarOpen(false);
                    }}>About</a>
                    <a href='#experience' onClick={() => {
                        setNavBarOpen(false);
                    }}>Experience</a>
                    <a href='#projects' onClick={() => {
                        setNavBarOpen(false);
                    }}>Projects</a>
                    <a href='#contact' onClick={() => {
                        setNavBarOpen(false);
                    }}>Contact</a>
                </nav>
            </header>




            {/* HOME SECTION */}

            <section className="home" id="home">

                <div className="home-content">
                    <h3>Hi, My Name is</h3>
                    <h1>Sachin Dsilva</h1>
                    <h3>And I'm a <span ref={element}></span></h3>
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

            {/* <section className="experience" id="experience">

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
                            <a href='#'><i className='bx bx-link-external' ></i></a>
                        </div>

                    </div>

                    {/* BOX 2 */}
                    <div className="project-box">
                        <img src={projectImage2} alt='project1.jpg' />

                        <div className="project-layer">
                            <h4>Blog Oasis</h4>
                            <p>hsdhasdjashjdkhajskd ahdhashdkh askjhdk</p>
                            <a href='#'><i className='bx bx-link-external' ></i></a>
                        </div>

                    </div>

                    {/* BOX 3 */}
                    <div className="project-box">
                        <img src={projectImage3} alt='project1.jpg' />

                        <div className="project-layer">
                            <h4>Curra Nova</h4>
                            <p>hsdhasdjashjdkhajskd ahdhashdkh askjhdk</p>
                            <a href='#'><i className='bx bx-link-external' ></i></a>
                        </div>

                    </div>

                    {/* BOX 4 */}
                    <div className="project-box">
                        <img src={projectImage4} alt='project1.jpg' />

                        <div className="project-layer">
                            <h4>My Loop Studios</h4>
                            <p>hsdhasdjashjdkhajskd ahdhashdkh askjhdk</p>
                            <a href='#'><i className='bx bx-link-external' ></i></a>
                        </div>

                    </div>

                </div>
            </section>



            {/* CONTACT SECTION */}


            <section className="contact" id="contact">
                <h2 className="heading">Contact <span>Me</span></h2>

                <form>
                    <div className="input-box">
                        <input type='text' placeholder="First Name" />
                        <input type='text' placeholder="Last Name" />
                    </div>
                    <div className="input-box">
                        <input type='email' placeholder="Email Address" />
                        <input type='number' placeholder="Mobile Number" />
                    </div>

                    <textarea cols='30' rows='10' placeholder="Type something.." />
                    <input type='submit' value="Submit" className="btn" />
                </form>
            </section>



            {/* FOOTER SECTION  */}

            <footer className="footer">
                <div className="footer-text">
                    <p>Copyright &copy; 2023 | All rights are reserved.</p>
                </div>

                <div className="developer">
                    <p>Made with ❤ By <span><a href='https://github.com/sachindsilva16'>Sachin Dsilva.</a></span></p>
                </div>

                <div className="top-button">
                    <a href='#home'><i className='bx bx-chevron-up'></i></a>
                </div>
            </footer>









        </div>
    );
}

export default App;