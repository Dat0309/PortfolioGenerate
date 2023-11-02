import React from 'react'
import classes from './Footer.module.css'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
export default function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.footer_contain}>
                <img src={logo} />
                <p>
                    Agency is a full-sevice agency, busy designing and building beautiful digital products, brands, and experiences.
                </p>
                <ul>
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
            </div>
            <div className={classes.footer_contact}>
                <p>@ 2020, UI8 LLC.</p>
                <div>
                    <p>Follow us</p>
                    <ul>
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-youtube"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
