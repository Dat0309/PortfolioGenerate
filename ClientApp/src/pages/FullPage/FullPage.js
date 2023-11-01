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
import logosymbollight from '../../assets/logosymbollight.png'
import icon from '../../assets/icon.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import bentovol2 from '../../assets/bentovol2.png'
import Stroke from '../../assets/Stroke.png'
import bento3d from '../../assets/bento3d.png'
import bentovol3 from '../../assets/bentovol3.png'
import sapiensman from '../../assets/sapiensman.png'
import iconsayhello from '../../assets/iconsayhello.png'
import SpeachBubbleV2 from '../../assets/SpeachBubbleV2.png'
import Strokelight from '../../assets/Strokelight.png'
import Footer from '../../components/Footer/Footer'
import scrollright from '../../assets/scrollright.png'
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
                                <p>01.</p>
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
                                <p>02.</p>
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
                    <div className={classes.container3}>
                        {/* <img src={img3} /> */}
                        <div className={classes.contain3_contain}>
                            <div className={classes.title}>
                                <div className={classes.item_left}>
                                    <img src={logosymbol} />
                                </div>
                                <p>03.</p>
                                <span>
                                    Achievement
                                </span>
                            </div>
                            <h1>
                                A design team buiding a curated maketplace for UI designers
                            </h1>

                            <h2>68</h2>
                            <h3>Successful Projects</h3>

                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.container4}>
                <div className={classes.contain_item}>
                    <div className={classes.item_left}>
                        <img src={logosymbol} />
                    </div>
                    <div className={classes.item_right}>
                        <div className={classes.title}>
                            <p>04.</p>
                            <span>
                                Famous Project
                            </span>
                        </div>
                        <div className={classes.intro}>
                            <div>
                                <h1>
                                    Our Partnerships
                                </h1>
                                <p>
                                    Agency is a full-sevice agency, busy designing and building beautiful digital products, brands, and experiences.
                                </p>
                            </div>

                            <Button className={classes.buttoncolor}>
                                Contact Us
                            </Button>
                        </div>

                    </div>

                </div>
                <div className={classes.sapiens}>
                    <Button className={classes.buttonradius}>
                        Featured Product
                    </Button>
                    <div className={classes.sapiens_content}>
                        <div>
                            <h1>Sapiens: The Free Character Builder App.</h1>
                            <p>
                                Beautiful library of modular, component-based character illustrations free to use for all your personal or client project.
                            </p>
                        </div>
                        <img src={righthover} />
                    </div>
                </div>
                <ul className={classes.container4_list}>
                    <li className={classes.bentovol2}>
                        <h1>Bento Vol. 2</h1>
                        <div>
                            <img className={classes.bentovol2_img} src={bentovol2} />
                            <img className={classes.stroke_img} src={Stroke} />
                        </div>
                        <p>
                            Agency is a full-sevice agency, busy designing and building beautiful digital products, brands, and experiences.
                        </p>

                    </li>
                    <li className={classes.bento3d}>
                        <h1>Bento 3D illustration</h1>
                        <div>
                            <img className={classes.bento3d_img} src={bento3d} />
                            <img className={classes.stroke_img} src={Stroke} />
                        </div>
                        <p>
                            Agency is a full-sevice agency, busy designing and building beautiful digital products, brands, and experiences.
                        </p>

                    </li>
                    <li className={classes.bentovol3}>
                        <h1>Bento Vol. 3</h1>
                        <div>
                            <img className={classes.bentovol3_img} src={bentovol3} />
                            <img className={classes.stroke_img} src={Stroke} />
                        </div>
                        <p>
                            Agency is a full-sevice agency, busy designing and building beautiful digital products, brands, and experiences.
                        </p>

                    </li>
                    <li className={classes.sapiensMan}>
                        <h1>Sapiens: Man</h1>
                        <div>
                            <img className={classes.sapiensman_img} src={sapiensman} />
                            <img className={classes.stroke_img} src={Stroke} />
                        </div>
                        <p>
                            Agency is a full-sevice agency, busy designing and building beautiful digital products, brands, and experiences.
                        </p>

                    </li>
                </ul>

            </div>
            <div className={classes.container5}>
                <div className={classes.container5_contain}>
                    <img src={logosymbollight} />
                    <div className={classes.container5_contain_right}>
                        <div className={classes.title}>
                            <p>05.</p>
                            <span>
                                Call to action
                            </span>
                        </div>
                        <div className={classes.intro}>
                            <h1>
                                We Are Looking for Talented Designers
                            </h1>
                            <Button className={classes.buttoncolor}>
                                Apply Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.container5_2}>
                <img src={logosymbollight} />
                <div className={classes.container5_2_contain}>
                    <div className={classes.title}>
                        <p>05.</p>
                        <span>
                            We are hiring
                        </span>
                    </div>
                    <div className={classes.intro}>
                        <h1>
                            Jobs
                        </h1>
                        <p>
                            Agency is a full-sevice agency, busy designing and building beautiful digital products, brands, and experiences.
                        </p>
                        <div className={classes.avaliable_jobs}>
                            <img src={scrollright} />
                            <span>
                                Avaliable jobs
                            </span>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>
                        <div>
                            <h1>
                                Graphic Designer
                            </h1>
                            <p>2</p>
                        </div>
                        <p>2 years experience</p>
                        <i className="fa-solid fa-arrow-right"></i>
                    </li>
                    <li>
                        <div>
                            <h1>
                                Visual Designer
                            </h1>
                            {/* <p>2</p> */}
                        </div>
                        <p>2 years experience</p>
                        <i className="fa-solid fa-arrow-right"></i>
                    </li>
                    <li>
                        <div>
                            <h1>
                                Art Director
                            </h1>
                            {/* <p>2</p> */}
                        </div>
                        <p>2 years experience</p>
                        <i className="fa-solid fa-arrow-right"></i>
                    </li>
                    <li>
                        <div>
                            <h1>
                                Web Designer
                            </h1>
                            <p>6</p>
                        </div>
                        <p>2 years experience</p>
                        <i className="fa-solid fa-arrow-right"></i>
                    </li>
                </ul>
            </div>
            <div className={classes.sayhello}>
                <div className={classes.sayhello_contain}>
                    <div className={classes.sayhello_contain_top}>
                        <img src={logosymbollight} />
                        <div>
                            <img src={iconsayhello} />
                            <span>Say hello</span>
                        </div>
                        <p>
                            A design team building a curated marketplace for UI designers
                        </p>
                    </div>
                    <div className={classes.sayhello_flex}>
                        <div className={classes.sayhello_contain_left}>
                            <p>
                                Let's talk about your next project
                            </p>
                        </div>
                        <div className={classes.sayhello_contain_right}>
                            <img className={classes.speach} src={SpeachBubbleV2} />
                            <div>
                                <p>
                                    Invest in your designs today!
                                </p>
                                <img src={Strokelight} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
