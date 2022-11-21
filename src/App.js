import React from "react"
import './index.css'
import Header from './Components/Header/Header.jsx'
import About from './Components/About/About.jsx'
import Services from './Components/Services/Services.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Studies from './Components/Studies/Studies.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
    return (

        <>
            <Header/>
            <About/>
            <Services/>
            <Projects/>
            <Studies/>
            <Contact/>
            <Footer/>
        </>
    )
}
export default App