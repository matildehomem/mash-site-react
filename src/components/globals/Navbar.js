import React from 'react';
import logo from '../../images/mash_logo.svg'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">
                <img src={logo}  width="40"/>
                </a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar2SupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
                    <a className="btn navbar-btn text-white mx-2" href="/about" target="_self">About me</a>
                    <a className="btn navbar-btn text-white mx-2 btn-primary" href="./static/Mash_CV.pdf" target="_blank">Download CV</a>
                </div>
            </div>
        </nav>
        
    )
}
