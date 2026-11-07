import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
            <section className="card" style={{width: "320px"}}>
                <img src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title">{title}...</h4>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target="_blank" className="btn-solid theme-primary">Read more</a>
                        </div>
        </section>
      </div>
    )
  }
}

export default Newsitem
