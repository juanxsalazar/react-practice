import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <main>
        <article>
          <h2>{this.props.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${this.props.urlImg}`}
           alt={this.props.title} />
          <p>{this.props.dateMovie}</p>
          <p>{this.props.detail}</p>
        </article>
       
      </main>
    )
  }
}

export default Movie