import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink class="navbar-brand" to='/'>Weather</NavLink>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <NavLink class="nav-link" to='/'>Home <span class="sr-only">(current)</span></NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to='/sample'>Sample</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

    );
  }
}

export default Header;
