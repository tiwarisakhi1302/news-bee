import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export default class News extends Component {
  static defaultProps = {
    heading: "Top",
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    heading: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
  }

  async componentDidMount() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  fetchMoreData = async() => {
    this.setState({page : this.state.page +1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a30777818a824e2782ffa0664cf28a47&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
       <>
        <h1 className="text-center">{this.props.heading} Headlines</h1>
        {this.state.loading && <Spinner></Spinner>}
        <InfiniteScroll
            dataLength={this.state.articles && this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles && this.state.articles.length !== this.state.totalResults}
            loader={this.state.loading && <Spinner></Spinner>}
          >
        <div className="container my-3">
        <div className="row my-3">
            {this.state.articles && this.state.articles.map((element) => {
              return (
                <div className="col-sm-3 my-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
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
        </div>
        </InfiniteScroll>
        </>
    );
  }
}
