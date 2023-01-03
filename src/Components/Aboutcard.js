import React from "react";
import Profile from "../assets/matt.jpeg"

function AboutCard() {
    return (
        <div className="about-container">
            <h1 className="title">About Me</h1>

            <img
                src={ Profile }
                alt="profile"
                className="profile float-left"
            ></img>
            <div>
                <div className="mt-4 aboutText">
                    <p>I am a recent graduate of the Trilogy Bootcamp hosted by University of washington. I have advanced skills in multiple areas of Web Development.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutCard;