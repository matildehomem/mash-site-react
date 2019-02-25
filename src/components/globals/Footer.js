import React from 'react'
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="pt-5 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-6">
            <p className="lead">Contacts</p>
            <p >matilde.a.s.homem@gmail.com</p>
            <p >+351 919133368</p>
          </div>
          <div className="align-self-center my-3 col-2 col-md-1">
            <a href="https://github.com/matildehomem" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
          </div>
          <div className="align-self-center my-3 col-2 col-md-1">
            <a href="https://www.linkedin.com/in/matilde-de-arag%C3%A3o-14754013/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
          </div>
          <div className="align-self-center my-3 col-2 col-md-1">
            <a href="https://www.behance.net/MatildeDeAragao" target="_blank" rel="noopener noreferrer">
              <FaBehance className="icon" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 my-3 text-center">
            <p className="text-muted">© Copyright 2018 mash - All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
