import React, {Component} from 'react';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
class Footer extends Component {
    render() {
        return (
            <div >
                <footer className="footer mt-auto py-3">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center">
                                <div className="social-icons">
                                    <a href="https://www.linkedin.com/Bharath M" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                    </a>
                                    <a href="https://www.github.com/Bharathm7" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FontAwesomeIcon icon={faGithub} size="2x" />
                                    </a>
                                    <a href="https://twitter.com/bharathmahesh69" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                                    </a>
                                </div>
                                <p className="text-dark">
                                    &copy; {new Date().getFullYear()} BHARATH M. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
