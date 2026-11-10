import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {
    pageSize: 8,
    category: "general"
  }

  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

async updateNews() {
  this.setState({ loading: true });

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=88e503c3b1844c7293b0564bed686ccd&page=${this.state.page}&pageSize=${this.props.pageSize}`;

  let data = await fetch(url);
  let parsedData = await data.json();

  this.setState({
      articles: parsedData.articles || [],
  totalResults: parsedData.totalResults || 0,
    loading: false
  });
}

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({page: this.state.page + 1});
    this.updateNews();
    };
     


  handlePrevClick = async () => {
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
       <h1 className="text-center" style={{margin: '35px, 0px'}}>NewsMonkey - Top Headlines</h1>
       {this.state.loading && <Spinner/>}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn-solid btn-styled btn btn-dark cursor-block"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
          disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            className="btn-solid btn-styled btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
