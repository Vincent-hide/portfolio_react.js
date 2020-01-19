import React from 'react'
import reactImg from '../../img/react.png';
import djangoImg from '../../img/django.png';
import laravelImg from '../../img/laravel.png';
import htmlImg from '../../img/html.jpeg';
import cSharpImg from '../../img/csharp.png';
import javaImg from '../../img/java.png';
import sqlImg from '../../img/sql.png';

const About = () => {
    return (
        <div className="main-container">
            <header className="container lang-header mb-4">
                <h1 className="text-center mt-5 mb-5">Web Development / Application Development</h1>
            </header>

            <div className="container lang-card-box">
                <section className="lang-card">
                    <img src={reactImg} alt="react"/>
                    <div>
                        <h3>React.js</h3>
                        <p>This web application is one of the web applications that I have built using react.js.</p>
                    </div>
                </section>

                <section className="lang-card" data-aos="fade-left">
                    <img src={djangoImg} alt="django"/>
                    <div>
                        <h3>Python / Django</h3>
                        <p>I have built a web application using Django. In this application, user can take a survey and submit the result to the database, SQLite. And the results of the survey can be seen.</p>
                    </div>
                </section>

                <section className="lang-card" data-aos="fade-right">
                    <img src={laravelImg} alt="laravel"/>
                    <div>
                        <h3>PHP / Laravel</h3>
                        <p>I have created web applictions using PHP and Laravel. On one of the web applications that I created in laravel, user can sign up and create an account. And user may post a blog that may be seen by other members or guests.</p>
                    </div>
                </section>

                <section className="lang-card" data-aos="fade-left">
                    <img src={htmlImg} alt="html_css_js"/>
                    <div>
                        <h3>HTML / CSS / Javascript</h3>
                        <p>I conduct a boot camp of Web Programming that focuses on HTML, CSS, javascript, and PHP.</p>
                    </div>
                </section>

                <section className="lang-card" data-aos="fade-right">
                    <img src={cSharpImg} alt="c_sharp"/>
                    <div>
                        <h3>C#</h3>
                        <p>With C#, I have programmed a flight management system by applying Object-Oriented-Programming Concept. Aside from that, I also conduct a boot camp for C# as well.</p>
                    </div>
                </section>

                <section className="lang-card" data-aos="fade-left">
                    <img src={javaImg} alt="java"/>
                    <div>
                        <h3>Java</h3>
                        <p>I used Java for a programming competition called IEEEXtream.</p>
                    </div>
                </section>

                <section className="lang-card" data-aos="fade-right">
                    <img src={sqlImg} alt="java"/>
                    <div>
                        <h3>MySQL / Oracle SQL / SQLite</h3>
                        <p>In my web applications, I have used such Database to retrieve data from and send data to.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About

