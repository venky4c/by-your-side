import React from 'react'
import './module.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <button>Home</button>
                <button>About Us</button>
                <button>Services</button>
                <button>Our team</button>
                <button className='lastbtn'>Contact Us</button>
            </nav>
        </div>
    )
}

export default Navbar
