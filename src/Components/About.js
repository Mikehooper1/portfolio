import React from 'react'
import {Link} from 'react-router-dom'
import portfoliocard from './images/portfoliocard.png'
export default function About() {
  return (
    <>
    {/* <div className="container" > */}
      <div className="card" >
  <img src={portfoliocard} className="card-img-top" alt="about-card"/>
  <div className="card-body">
    <h5 className="card-title">Mohd Shakir Hussain</h5>
    <p className="card-text">Mohd Shakir Hussain | Software Developer | Bridging the gap between ideas and user needs.</p>
    <Link to="https://www.linkedin.com/in/shakirhussain137/" className="btn btn-primary">Go To Profile</Link>
  </div>
</div>
    {/* </div> */}
    </>
  )
}
