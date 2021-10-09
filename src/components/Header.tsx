import React from "react"

const Header = () => {
  return (
    <nav className="navbar fixed-top d-flex flex-row justify-content-between bg bg-primary-dark-2">
      <div className="container-lg App">
        <a className="nav-link active size-4 weight-3 primary-highlight-2" aria-current="page" href="#">Jonathan Chow</a>
        <ul className="nav vert-center">
          <li className="nav-item">
            <a className="nav-link active primary-highlight-2" aria-current="page" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active primary-highlight-2" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active primary-highlight-2" href="#experiences">Experiences</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header


