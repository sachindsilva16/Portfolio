import React, { useState,useEffect } from "react";
import "./styles.css"
import profileImage, { projectImage1, projectImage2, projectImage3, projectImage4 } from "./images/images.js";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";


export default function ProjectSection() {
    return (
        <section className="projects" id="projects">

                <h2 className="heading">Latest <span>Projects</span></h2>

                <div className="project-container">

                    {/* BOX 1 */}
                    <div className="project-box">
                        <img src={projectImage1} alt='project1.jpg' />

                        <div className="project-layer">
                            <h4>Way Wizard-Chat Bot</h4>
                            <p>A Minimalistic & Interactive Chat Bot built on NLP </p>
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
    );
}