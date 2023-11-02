import React from 'react'
import classes from './Navbar.module.css'
import logo from '../../assets/logo.png'
import Button from '../UI/Button'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className={classes.Navbar}>
            <div className={classes.header}>
                <img src={logo} />
                <ul className={classes.list}>
                    <li>
                        <NavLink to='/'>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/casestudy'>
                            Work
                        </NavLink>
                    </li>
                    <li>
                        <Link to='#sevices'>
                            Sevices
                        </Link>
                    </li>
                    <li>
                        <Link to='#jobs'>
                            Jobs
                        </Link>
                    </li>
                </ul>
                <Button>
                    Contact Us
                </Button>
            </div>
        </div>
    )
}
