import { useState } from "react"
import './header.css'
/*icons*/
import { FaGithub } from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {GiDevilMask} from 'react-icons/gi'

const Header = () => {
    const [selected, setSelected] = useState('#');

    return (
        <section className="nav_container">
            <div className="nav_icon">
                <a><GiDevilMask/></a>
            </div>

            <div className="nav_links">

                <a href="">About</a>
                <a href="">Projects</a>
                <a href="">Services</a>
                <a href="">Contact</a>
            </div>
            <div className="nav_social">
                <a href="hhttps://github.com/Camilapinz18"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/camila-pinz%C3%B3n-083990141/"><FaLinkedin/></a>
            </div>

        </section>
    )
}

export default Header