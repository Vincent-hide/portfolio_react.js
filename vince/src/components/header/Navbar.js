import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{background: "linear-gradient(to right, #9796f0, #fbc7d4)"}}>
                <img src="https://c7.uihere.com/files/710/115/638/computer-icons-favicon-science-iconfinder-png-free-science-icon-thumb.jpg" width="30" height="30" class="d-inline-block align-top mr-2" alt="" />
                <span class="navbar-brand" id="suho">Suho Kang</span>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to="/" className="nav-link" >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" className="nav-link" >About Me</Link>
                        </li>
                        <li class="nav-item">
                            <a target="_blank" className="nav-link" href="https://www.linkedin.com/notifications/">Linked in</a>
                        </li>
                        <li class="nav-item">
                            <a target="_blank" className="nav-link" href="https://github.com/Vincent-hide">Git Hub</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar
