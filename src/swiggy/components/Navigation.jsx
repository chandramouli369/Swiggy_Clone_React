import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <section className="topBarSection">
      <div className="companyTitle">
        <Link to='/' className="Link">
          <h2>Swiggy</h2>
        </Link>
      </div>

      <div className="searchBar">
        <input type="text" placeholder='Search...' />
      </div>

      <div className="userAuth">
        Login/Signup
      </div>
    </section>
  )
}

export default Navigation
