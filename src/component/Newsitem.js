import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <section className="card">
         <span className="position-absolute top-0  translate-middle badge rounded-pill border border-bg bg-danger text-white" style={{left: "90%", zIndex: "1"}}>
  {source}
</span>
          <img
            src={
              !imageUrl
                ? "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ivZ2UYHBTjSQ/v7/1200x800.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="fg-2">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read more
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Newsitem;
