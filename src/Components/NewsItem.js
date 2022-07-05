import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div
          className="card"
          style={{
            height: "29rem",
            width: "18rem",
            color: "white",
            backgroundColor: "#181818",
          }}
        >
        <div style={{display : "flex", justifyContent : "flex-end", position : "absolute", right : "0"}}>
        <span className="badge rounded-pill bg-danger">
            {source}</span></div>
          <img
            src={!imageUrl ? require("../images/newsBee.jpg") : imageUrl}
            style={{ height: "12rem", width: "18rem" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5>
              {title ? title.slice(0, 45) : ""}...
            </h5>
            <p className="card-text">
              {description ? description.slice(0, 85) : ""}...
            </p>
            <p className="card-text" style={{color : "grey"}}>
              <small>By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
