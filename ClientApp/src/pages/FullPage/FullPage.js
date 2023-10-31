import React from 'react'
import header from '../../assets/header.png'
import scrolldown from '../../assets/scrolldown.png'
import Navbar from '../../components/Navbar/Navbar'
import classes from './FullPage.module.css'
import Button from '../../components/UI/Button'
import righthover from '../../assets/right-hover.png'
import leftnormal from '../../assets/left-normal.png'
import leftnormaldark from '../../assets/left-normal-dark.png'
import imgfullpage from '../../assets/imgfullpage.png'
import logosymbol from '../../assets/logosymbol.png'
import icon from '../../assets/icon.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
export default function FullPage() {
    return (
        <>
            <div className={classes.header}>
                <Navbar />
                <div className={classes.header_contain}>
                    <div className={classes.context}>
                        <h1>Stand Out from the Crowd.</h1>
                        <p>
                            Agency is a full-sevices agency, busy designing and building beautiful digital products, brands, and experiences.
                        </p>
                        <Button className={classes.buttoncolor}>
                            Recent Work
                        </Button>
                        <div>
                            <img src={scrolldown} />
                            <p>Scroll down</p>
                        </div>
                    </div>
                    <img src={header} />
                </div>
            </div>
            <div className={classes.container1}>
                <div className={classes.container_contain}>
                    <div className={classes.contain_item}>
                        <div className={classes.item_left}>
                            <img src={logosymbol} />
                        </div>
                        <div className={classes.item_right}>
                            <div className={classes.title}>
                                <p>01</p>
                                <span>
                                    Who We Are
                                </span>
                            </div>
                            <div className={classes.intro}>
                                <h1>
                                    We Make Designs that Lead and Inpire.
                                </h1>
                                <div>
                                    <img src={leftnormal} />
                                    <img src={righthover} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={classes.contain_item}>
                        <ul className={`${classes.item_left} ${classes.list}`}>
                            <li>
                                2017
                            </li>
                            <li>
                                2018
                            </li>
                            <li>
                                2019
                            </li>
                            <li>
                                2020
                            </li>
                            <li>
                                2021
                            </li>
                        </ul>
                        <div className={classes.item_right}>
                            <img className={classes.img} src={imgfullpage} />
                        </div>
                    </div>

                    <div className={`${classes.contain_item} ${classes.contain_contact}`}>
                        <div className={classes.item3}>
                            <h1>
                                A design team building a curated maketplace for UI designers.
                            </h1>
                            <p>
                                4,404 curared design resources to energine your creative workflow. We're growing family of 334,531 designers and makers from around the world
                            </p>
                            <div>
                                <Button className={classes.buttoncolor}>
                                    Contact Us
                                </Button>
                            </div>

                        </div>
                        <div className={classes.numble_brand}>
                            <p>28</p>
                            <span>Bigest Branding</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className={classes.container2}>
                <div className={classes.container_contain}>
                    <div className={classes.contain_item}>
                        <div className={classes.item_left}>
                            <img src={logosymbol} />
                        </div>
                        <div className={classes.item_right}>
                            <div className={classes.title}>
                                <p>02</p>
                                <span>
                                    Who We Do
                                </span>
                            </div>
                            <div className={classes.intro}>
                                <h1>
                                    We Make Designs that Lead and Inpire.
                                </h1>
                                <div>
                                    <img src={leftnormaldark} />
                                    <img src={righthover} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <ul className={classes.listjobs}>
                        <li className={classes.listjobs_item}>
                            <img src={icon} />
                            <p>Strategy</p>
                        </li>
                        <li className={classes.listjobs_item}>
                            <img src={icon1} />
                            <p>Branding</p>
                        </li>
                        <li className={classes.listjobs_item}>
                            <img src={icon2} />
                            <p>Interactive</p>
                        </li>
                        <li className={classes.listjobs_item}>
                            <img src={icon3} />
                            <p>Communicate</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
