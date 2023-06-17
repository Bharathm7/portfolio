import React, {Component} from 'react';
import './logo.svg';
import Footer from "./footer";
class About extends Component {
    render() {

        return (
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-title display-1">THIS IS ALL ABOUT ME</div>
                            <p className="about-description display-7 ">
                                I am Bharath M, a passionate and dedicated developer with a strong interest in web development and design. I am currently pursuing a 5-year integrated program in Computer Science at VIT Vellore.

                                My journey in the world of programming started with Java, and since then, I have expanded my skill set to include Python, CSS, JavaScript, Express.js, MongoDB, React.js, and Node.js. I enjoy working on full-stack projects, combining my knowledge of both front-end and back-end technologies.

                                Apart from coding, I am an avid football player and find joy in the creativity of designing. I believe in continuous learning and strive to expand my boundaries by exploring new technologies and keeping up with the latest trends in the industry.

                                Through my portfolio, I aim to showcase my skills, projects, and achievements while demonstrating my ability to create user-friendly and visually appealing web applications.

                                Thank you for visiting my portfolio, and I look forward to connecting with you!

                            </p>
                        </div>
                        <div className="skills-list col-md-6">

                            <ul className="skills-list display-1">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>ReactJS</li>
                                <li>Bootstrap</li>
                                <li>ExpressJS</li>
                                <li>NodeJS</li>
                                <li>MongoDB</li>
                                <li>Python</li>
                                <li>Java</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Footer/>
            </section>

        );
    }

}

export default About;