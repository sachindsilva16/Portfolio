import React, { useState,useEffect } from "react";
import "./styles.css"
import profileImage, { projectImage1, projectImage2, projectImage3, projectImage4 } from "./images/images.js";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";


const AboutSection = () => {
    return (
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
    )
}


export default AboutSection;