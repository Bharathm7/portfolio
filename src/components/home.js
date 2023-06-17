import React, {Component} from 'react';
import "./Projects";
import Footer from "./footer";


class Home extends Component {
    render() {

        return (
            <section className="home-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <p className="section-title display-1">WELCOME</p>
                            <p className={'display-1'}>TO MY PORTFOLIO</p>
                            <h1 className={'name'}>BHARATH M</h1>
                        </div>
                    </div>
                </div>

                <Footer/>
            </section>

        );
    }
}

export default Home;