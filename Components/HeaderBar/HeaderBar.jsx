import React from 'react'

function HeaderBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <span className="navbar-brand mb-0 h1">Employee List</span>
            <ul className="navbar-nav">
                <li className="nav-item"> 
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderBar
