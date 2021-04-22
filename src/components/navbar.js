import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';


function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
      <LinkContainer to='/ieeeRec-portofolio'><a className="navbar-brand" href="#">Elrashka</a></LinkContainer>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <LinkContainer to='/ieeeRec-portofolio'>
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            </LinkContainer>
            <LinkContainer to='/aboutme'>
            <li className="nav-item">
              <a className="nav-link" href="#">About Me</a>
            </li>
            </LinkContainer>
            <LinkContainer to = '/myreason'>
            <li className="nav-item">
              <a className="nav-link" href="#">My Reason</a>
            </li>
            </LinkContainer>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default navbar
