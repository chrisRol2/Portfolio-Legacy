import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/ContactMe'
import './App.css'

export class App extends Component {
    render() {
        return (
            <div >
                <Header/>
                <NavBar />
                <About/>
                <Projects/>
                <Contact/>
                {/* <Header/> */}
                
            </div>
        )
    }
}

export default App
