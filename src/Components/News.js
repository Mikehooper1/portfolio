import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=bef88248a3d541989b60e9c32592b8cb&page=1&pagesize=20";
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles})
  }
  handlePreviousClick=async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bef88248a3d541989b60e9c32592b8cb&page=${this.state.page-1}&pagesize=20`;
    let data = await fetch(url)
    let parsedData = await data.json()
    
this.setState({
  page: this.state.page - 1,
  articles: parsedData.articles
})
  }

  handleNextClick=async()=>{
    console.log("Next Clicked")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bef88248a3d541989b60e9c32592b8cb&page=${this.state.page+1}&pagesize=20`;
    let data = await fetch(url)
    let parsedData = await data.json()
    
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }
  render() {
    return (
      <div className={'container my-3 '}>
        <h2>NewsBoard - Top Headlines</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
        <NewsItem  title={element.title} description={element.description} 
        imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
      })}
      </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-info" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button type="button" className="btn btn-info" onClick={this.handleNextClick}>Next &rarr;</button>


        </div>
      </div>
    )
  }
}
