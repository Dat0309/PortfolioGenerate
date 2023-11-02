import React from 'react'
import classes from './CaseStudy.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import img1casestudy from '../../assets/img1casestudy.png'
import Button from '../../components/UI/Button'
import icon1CaseStudy from '../../assets/iconCaseStudy.png'
import icon2CaseStudy from '../../assets/icon2CaseStudy.png'
import right_hover from '../../assets/right-hover.png'
export default function CaseStudy() {
    return (
        <div>
            <div className={classes.header}>
                <Navbar />
                <div className={classes.header_contain}>
                    <div className={classes.context}>
                        <img src={right_hover} />
                        <Button className={classes.buttoncolor}>
                            Featured Product
                        </Button>
                        <div className={classes.header_title}>
                            <h1>Bento</h1>
                            <span>.</span>
                        </div>
                        <p>
                            Drag & Drop 3D Visual Design System.
                        </p>
                        <div className={classes.header_flex}>
                            <div>
                                <img src={icon1CaseStudy} />
                                <p>
                                    Global Digital Agency of Record
                                </p>
                            </div>
                            <div>
                                <img src={icon2CaseStudy} />
                                <p>
                                    5 Years of Digital Marketing Excellence
                                </p>
                            </div>
                        </div>
                    </div>
                    <img className={classes.imgheader} src={img1casestudy} />
                </div>
            </div>
            <div className={classes.overview}>

            </div>
            <Footer />
        </div>
    )
}
