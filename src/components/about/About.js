import React, { Component } from 'react'

export default class About extends Component {
  state = {
    skills: [
      {
        id: 1,
        name: 'HTML',
        value: '90'
      },
      {
        id: 2,
        name: 'CSS',
        value: '90'
      },
      {
        id: 3,
        name: 'SASS',
        value: '85'
      },
      {
        id: 4,
        name: 'JS',
        value: '70'
      },
      {
        id: 5,
        name: 'React',
        value: '60',
      },

    ]
  }
  render() {
    return (
      <div className="section bg-primary mt-4">
        <div className="container p-5  ">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-center mb-4">My Skills</h2>

            </div>
          </div>
          <div className="mb-3 mx-auto animation-bar__wrapper">
          {
            this.state.skills.map(item => {
              return (
                <div key={item.id}>
                  <p className="m-0">{item.name}</p>
                  <div className={ `animation-bar__item animation-bar__item--${item.value}` }>
                    <span data-label={`${item.value}%`}></span>
                  </div>
                </div>
              )
            })}
            </div>
        </div>
      </div>
    )
  }
}
