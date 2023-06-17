import React, {Component} from 'react';
import About from "./components/About";
import Home from "./components/home";
import Contact from "./components/contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import {Route, Routes} from "react-router-dom";
class App extends Component {
    render() {


        return (
            <>
            <div>
                <Nav/>
                <Routes>


                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Project" element={<Projects/>}/>
                    <Route path="/Contact" element={<Contact/>}/>


                </Routes>


            </div>

            </>
        );
    }
}

export default App;