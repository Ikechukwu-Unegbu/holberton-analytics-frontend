import React, { Fragment } from "react";
import './Footer.css'

export default function Footer(){
    return(
        <Fragment>
            <div className="footer">
            
                <div className="footer-content container pt-3">
                    <div className="footer-content-one">
                        <div className="">
                            <ul>
                                <li><h5 className="text-left text-light">Holberton Analytics</h5></li>
                                <li><a href="#">About HA</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content-two">
                        <div className="">
                            <ul>
                                <li><h5 className="text-left text-light">Resources</h5></li>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">Frontend Codebase</a></li>
                                <li><a href="#">Backend Codebase</a></li>
                                <li><a href="#">Contribution</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-content-three">
                        <div className="top">
                            <h4 className="text-center text-light">Ikechukwu Vincent - Software Engineer </h4>
                        </div>
                        <div className="bottom">
                            <a href="#">
                                <i class="fa-brands fa-2x fa-square-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-2x fa-linkedin"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-2x fa-square-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <a href="#"><span className="text-light text-center">Copyright reserved</span></a>
                    <span></span>
                    <a href="#">Authored by Ikechukwu Vincent</a>
                    <span></span>
                    <a href="#">Holberton 2023</a>
                </div>
            </div>
        </Fragment>
    )
}