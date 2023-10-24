import React, { useState,useEffect } from "react";
import "./styles.css"
import profileImage, { projectImage1, projectImage2, projectImage3, projectImage4 } from "./images/images.js";
import Typed from "typed.js";


const HomeSection = () =>{


    const firstElement = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(firstElement.current, {
            strings: ['Developer.', 'Designer.'],
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



    return(
        <section className="home" id="home">

                <div className="home-content">
                    <h3>Hi, My Name is</h3>
                    <h1>Sachin Dsilva</h1>
                    <h3>And I'm a <span ref={firstElement}></span></h3>


                    {/* SOCIA MEDIA ICONS */}

                    <div className="social-media">
                        <a href='https://github.com/sachindsilva16' target="_blank"><i className="bx bxl-github"></i></a>
                        <a href='https://discord.com/invite/sachindsilva#2655' target="_blank"><i className='bx bxl-discord-alt' ></i></a>
                        <a href='https://www.linkedin.com/in/sachin-dsilva-43169a1bb' target="_blank"><i className="bx bxl-linkedin-square"></i> </a>
                        <a href='https://twitter.com/sachinrons123' target="_blank"><i className="bx bxl-twitter"></i> </a>
                    </div>
                    {/* RESUME LINK  */}
                    <a href='https://amppmann.github.io/Portfolio/SACHIN%20RONSON%20DSILVA-RESUME.pdf' className="float-btn btn">Download Resume</a>


                </div>


                {/* SACHIN DSILVA's IMAGE */}
                <div className="home-image">
                    <img src={profileImage} />
                </div>
            </section>
    );
}

export default HomeSection;
