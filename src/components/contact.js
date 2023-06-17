import React, {Component} from 'react';
import Footer from "./footer";
class Contact extends Component {

    render() {
        return (
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="contact-content">
                                <h2 className="section-title">Contact Me</h2>
                                <p className="contact-description">
                                    Feel free to reach out to me for any inquiries, collaborations, or just to say hello.
                                </p>
                                <div className="contact-details">
                                    <div className="contact-item">
                                        <span>Email:</span>
                                        <p>example@example.com</p>
                                    </div>
                                    <div className="contact-item">
                                        <span>Phone:</span>
                                        <p>+1 123 456 7890</p>
                                    </div>
                                    <div className="contact-item">
                                        <span>Social Media:</span>
                                        <p>
                                            <a href="https://www.linkedin.com/">LinkedIn</a>,
                                            <a href="https://www.twitter.com/">Twitter</a>,
                                            <a href="https://www.github.com/">GitHub</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>





        );
    }
}

export default Contact;