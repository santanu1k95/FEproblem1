import React from 'react'
import './navbar.scss'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="header">
                Fining Falcon
            </div>
            <div className="pagelinks">
                <a href="#">Reset</a> |
                <a href="#">Home</a>
            </div>
        </div>
    )
}
