import React, { Component } from 'react'
// Image
import myImg from '../../img/vince.jpg';
import mobiImg from '../../img/mobi.PNG';

const Mobi = () => {
    return (
        <div className="container bg-default mt-5">

            <h1 className="text-center mb-5" id="myName">SuHo Kang / Vincent / Hide</h1>

            <div id="mobi-container" className="mb-4">
                <img src={myImg} alt="Kang Suho" data-aos="fade-down"/>
                <div data-aos="fade-up">
                    <p>Hello. I am Kang Suho. Thank you for viewing my portfolio. I am a Korean who was born and raised in Japan. I am capable of speaking Japanese, English and Koran.</p>
                    <p>I started studying programming back in 2019 in T127 Computer Programming Analyst Program at George Brown College. Since then, I have been exceedingly passionate about Web Development and Application Development.</p>
                    <p>I have competed in the IEEEXtream13.0 programming competition and our team placed in the top of placed in the top 18% in the world.</p>
                </div>
            </div>

            <div id="mobi2-container">
                <div data-aos="fade-right">
                    <p>At the George Brown College, I perform the followings duties.</p>
                    <ul>
                        <li>Run boot camps for Web Development and Object-Oriented-Programming</li>
                        <li>Assist Professors during labs and also invigilate students during exams</li>
                        <li>Tutor students for their couse work as well as their parsonal projects</li>
                    </ul>
                </div>
                <img src={mobiImg} alt="mobihelp" data-aos="fade-left" />
            </div>
        </div>
    )
}

export default Mobi
