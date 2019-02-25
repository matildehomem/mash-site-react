import React from 'react'

export default function Prefooter() {
  return (
  <div className="py-5 section text-center bg-light" id="reviews">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>What i want to do next?</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div id="carousel" className="carousel slide" data-ride="carousel" data-interval="3000">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="blockquote ">
                  <p className="m-0 lead">Develop my frontend skills</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="blockquote ">
                  <p className="m-0">Work in great projects.</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="blockquote ">
                  <p className="m-0">Learn more every day.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
