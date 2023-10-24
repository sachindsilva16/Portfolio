import React, { useState, useEffect } from "react";
import "./styles.css"
import profileImage, { projectImage1, projectImage2, projectImage3, projectImage4 } from "./images/images.js";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";


const AboutSection = () => {

    const [isRead, setRead] = React.useState(false);

    function handleReadClick() {
        setRead(!isRead);
    }



    return (
        <section className="about" id="about">
            <div className="about-image">
                <img src={profileImage} alt='aboutImage' />
            </div>

            <div className="about-content">
                <h2 className="heading">About <span>Me</span></h2>

                <p style={{ display: isRead ? "none" : "block" }}>Hi, I am a self-driven software developer based in Udupi, Karnataka, India. Currently I'm pursuing ...</p>
                <p style={{ display: isRead ? "block" : "none" }}>Hi, I am a self-driven and motivated software developer based in Udupi, Karnataka, India. Currently I'm pursuing 4th year B.E in Information Science and Engineering.Agile and intellectually curious in problem-solving aspects.</p>

                <a style={{ cursor: "pointer" }} className="btn" id="read" onClick={handleReadClick}>Read More</a>
            </div>
        </section>
    )
}


export default AboutSection;
