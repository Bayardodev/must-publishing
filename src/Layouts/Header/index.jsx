import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar"
import "./style.css"

function Header() {
    const [open_sidebar, setSidebar] = useState(false)

    const collapser = () => {
        setSidebar(!open_sidebar)
        const target = document.querySelector('.collapser')
        target.classList.toggle('__active')
    }
    return(
        <section className="custom-header">
            <nav className="d-flex">
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Intro">About Me</Link></li>
                    <li><Link to="/Service">Skills</Link></li>
                    <li><Link to="/Product">Programming Language</Link></li>
                    <li><Link to="/Contact">Profile</Link></li>
                </ul>
                <Link to="/login" className="_admin-btn ms-auto">Нэвтрэх</Link>
                <div
                    className="collapser ms-auto"
                    onClick={() => collapser()}
                >
                    <p/>
                    <p/>
                    <p/>
                </div>
            </nav>
            {
                open_sidebar
                &&
                <div className="sidebar">
                    <NavigationBar/>
                </div>
            }
        </section>
    )
}

export default Header;
