import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
        <div>
            <h2 className="display-4"><span className="text-success">About</span> App</h2>
            <p className="lead">This is a simple app to control your contacts.</p>
            <hr className="my-4" />
            <p className="text-secondary">Version 0.02</p>
        </div>
    )
  }
}

export default About