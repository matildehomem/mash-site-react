import React from 'react';
import me from '../../images/me.png'


export default function Nutshell() {
  return (
    <div className="section">
      <div className="py-5" id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>me<br /></h1>
              <p className="p_span">(in a nutshell)</p>
            </div>
          </div>
          <div className="row">
            <div className="align-self-center text-md-right text-center col-lg-4 col-md-6">
              <h4 className="text-primary">Graphic design</h4>
              <p className="mb-5 mb-fix">More than 10 years experience in printing mainly editorial design.</p>
              <h4 className="text-primary">Photography</h4>
              <p className="mb-5 mb-fix">It's been a hobby and &nbsp; <br />a passion for since I remember. &nbsp;</p>
              <h4 className="text-primary">Copywritter</h4>
              <p className="mb-5 mb-fix">Writting for the web in Portuguese and in English, and SEO specialist.</p>
            </div>
            <div className="my-3 col-md-4 d-none d-lg-block"> 
              <img className="img-fluid d-block mx-auto animate-in-down" src={me} width="300"/> 
              </div>
              <div className="align-self-center text-md-left text-center col-lg-4 col-md-6">
                <h4 className="text-primary">Webdesign</h4>
                <p className="mb-5 mb-fix">Experience in HTML, CSS &amp; Javascript (mainly JQuery).</p>
                <h4 className="text-primary">Frontend Dev</h4>
                <p className="mb-5 mb-fix">What I would like to develop moving foward in&nbsp;my career.</p>
                <h4 className="text-primary">Digital Marketing</h4>
                <p className="mb-5 mb-fix">More than 5 years experience in Social Media Channels and Google Adwords.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
