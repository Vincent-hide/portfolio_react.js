import React from 'react'

const About = () => {
    return (
        <div className="main-container">
            <header className="container lang-header mb-4">
                <h1 className="text-center mt-5 mb-5">Web Development / Application Development</h1>
            </header>

            <div className="container lang-card-box">
                <section className="lang-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="react" width="400" height="300" />
                    <div>
                        <h3>React.js</h3>
                        <p>This web application is one of the web applications that I have built using react.js.</p>
                    </div>
                </section>

                <section className="lang-card" data-aos="fade-left">
                    <img src="https://webme.ie/wp-content/uploads/2019/08/How-to-run-a-python-django-app-in-docker.png" alt="django" width="300" height="300"/>
                    <div>
                        <h3>Python / Django</h3>
                        <p>I have built a web application using Django. In this application, user can take a survey and submit the result to the database, SQLite. And the results of survey can be seen.</p>
                    </div>
                </section>

                <section className="lang-card" data-aos="fade-right">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="laravel" width="300" height="300"/>
                    <div>
                        <h3>PHP / Laravel</h3>
                        <p>I have created web applictions using PHP and Laravel. On one of the web applications that I created in laravel, user can sign up and create an account. And user may post a blog.</p>
                    </div>
                </section>

                <section className="lang-card" data-aos="fade-left">
                    <img src="https://f0.pngfuel.com/png/826/162/53-js-logo-website-development-javascript-html5-css3-cascading-style-sheets-html-logo-png-clip-art.png" alt="html_css_js" width="300" height="280"/>
                    <div>
                        <h3>HTML / CSS / javascript</h3>
                        <p>I conduct a boot camp of Web Programming that focuses on HTML, CSS, javascript, and PHP.</p>
                    </div>
                </section>

                <section className="lang-card" data-aos="fade-right">
                    <img src="https://miro.medium.com/max/3954/1*w0u2TZpEp3WfKMrlL5jTSw.png" alt="c_sharp" width="330" height="300"/>
                    <div>
                        <h3>C#</h3>
                        <p>With C#, I have programmed a flight management system by applying Object-Oriented-Programming Concept. Aside from that, I also conduct a boot camp for C# as well.</p>
                    </div>
                </section>

                <section className="lang-card" data-aos="fade-left">
                    <img src="https://www.probytes.net/wp-content/uploads/2019/07/java-logo-vector-768x768.png" alt="java" width="330" height="300"/>
                    <div>
                        <h3>Java</h3>
                        <p>I used Java for programming competition called IEEEXtream.</p>
                    </div>
                </section>

                <section className="lang-card" data-aos="fade-right">
                    <img src="https://icons-for-free.com/iconfiles/png/512/logo+my+query+server+sql+icon-1320184811372606623.png" alt="java" width="330" height="300"/>
                    <div>
                        <h3>MySQL / Oracle SQL / SQLite</h3>
                        <p>In my web applications, I have used such Database.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About

