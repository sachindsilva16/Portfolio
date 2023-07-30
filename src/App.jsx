import React from "react";
import "./styles.css"
import profileImage, { projectImage1, projectImage2, projectImage3, projectImage4 } from "./images/images.js";
import Typed from "typed.js";

const App = () => {


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

                    <textarea cols='30' rows='10' placeholder="Type something.."> </textarea>
                    <input type='submit' value="Submit" class="btn" />
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
                    <a href='#home'><i class='bx bx-chevron-up'></i></a>
                </div>
            </footer>




        </div>
    );
}

export default App;