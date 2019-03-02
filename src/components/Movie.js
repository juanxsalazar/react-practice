import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <div className="FirstSection">
        <div className="SecondSection">
          <h3>{this.props.title}</h3>
          <p className="date-section">{this.props.dateMovie}</p>
          <img
          className="ImageSection"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
            this.props.urlImg
          }`}
          alt={this.props.title}
        />
          <p>{this.props.detail}</p>
        </div>
       
      </div>
    )
  }
}

export default Movie