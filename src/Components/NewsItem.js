import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3 '>
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://static.toiimg.com/thumb/msid-109641881,imgsize-1142401,width-900,height-1200,resizemode-6/109641881.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a  rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
