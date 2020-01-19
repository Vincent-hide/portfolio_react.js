import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Contact extends Component {
    render() {
        return (
            <footer id="footer_box" class="py-5">
                <div class="text-center" id="footer_container">
                    <div id="myContact">
                        <small class="text-primary">&copy; 2020 Suho / Vincent / Hide</small>
                        <small class="text-primary">(647) 574-7559</small>
                        <small class="text-muted"><a href="mailto:suho.kang@georgebrown.ca">suho.kang@georgebrown.ca</a></small>
                        <small class="text-muted"><a href="mailto:hidehiro.okayama@gmail.com">hidehiro.okayama@gmail.com</a></small>
                    </div>


                    <div id="main_footer">
                        <div>
                            <Link to="/" className="nav-link" >Home</Link>
                        </div>
                        <div>
                            <Link to="/about" className="nav-link" >About Me</Link>
                        </div>
                        <div>
                            <a target="_blank" className="nav-link" href="https://www.linkedin.com/notifications/">Linked in</a>
                        </div>
                        <div>
                            <a target="_blank" className="nav-link" href="https://github.com/Vincent-hide">Git Hub</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Contact
