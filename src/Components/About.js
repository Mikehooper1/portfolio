import React from 'react'
import {Link} from 'react-router-dom'
export default function About() {
  return (
    <div className="container">
      <div className="card" >
  <img src="/slide1.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Mohd Shakir Hussain</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="#" className="btn btn-primary">Go To Profile</Link>
  </div>
</div>
    </div>
  )
}
