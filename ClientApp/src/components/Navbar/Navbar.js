import React from 'react'
import classes from './Navbar.module.css'
import logo from '../../assets/logo.png'
import Button from '../UI/Button'
export default function Navbar() {
    return (
        <div className={classes.Navbar}>
            <div className={classes.header}>
                <img src={logo} />
                <ul className={classes.list}>
                    <li>
                        About
                    </li>
                    <li>
                        Work
                    </li>
                    <li>
                        Sevices
                    </li>
                    <li>
                        Jobs
                    </li>
                </ul>
                <Button>
                    Contact Us
                </Button>
            </div>
        </div>
    )
}
