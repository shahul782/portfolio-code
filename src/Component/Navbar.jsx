import React from 'react'
import '../index.css'

export const Navbar = () => {
  return (
    <div className='wave'>
 <nav className="navbar navbar-expand-lg ">
    <div class="container">
      <a class="navbar-brand" href="#"><h1>shahul</h1></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" href='/home' >home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      </div>

  </nav>

    </div>
  )
}
