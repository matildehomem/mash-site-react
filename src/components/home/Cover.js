import React from 'react'
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa';

export default function Cover() {
    return (
        <div className="pt-5 bg-primary cover">
            <div className="container mt-2 pt-5">
                <div className="row">
                    <div className="col-md-12 my-5 text-center align-self-center">
                        <h1 className="display-1" >mash</h1>
                        <p className="lead">matilde de aragão soares homem</p>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="align-self-center col-md-2 my-3 col-4">
                                <a href="https://github.com/matildehomem" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="icon" />
                                </a>
                            </div>
                            <div className="align-self-center my-3 col-md-2 col-4">
                                <a href="https://www.linkedin.com/in/matilde-de-arag%C3%A3o-14754013/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="icon" />
                                </a>
                            </div>
                            <div className="align-self-center my-3 col-md-2 col-4">
                                <a href="https://www.behance.net/MatildeDeAragao" target="_blank" rel="noopener noreferrer">
                                    <FaBehance className="icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        {/* <img className="img-fluid d-block mx-auto" src="assets/iphone_cover_light_me.png" width="400" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
