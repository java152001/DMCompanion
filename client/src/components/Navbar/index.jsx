import React from "react"
import { Link } from 'react-router-dom'
import './navbar.css'

function NavBarComponent({ loggedIn, _logout }) {
    return (
        <nav className="navbar navbar-light bg-dark">
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/inttracker" className="nav-link">
                        Initiative Tracker
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/reference" className="nav-link">
                        Reference
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export const NavBar = React.memo(NavBarComponent);