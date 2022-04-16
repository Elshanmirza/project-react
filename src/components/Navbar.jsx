import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed-top">
  <div className="collapse" id="navbarToggleExternalContent">
    <div className="accessories p-2">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
  <nav className="navbar navbar-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
  )
}

export default Navbar