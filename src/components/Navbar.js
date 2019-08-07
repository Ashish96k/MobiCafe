import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import { CartButton } from '../shared/Button';
import mobicafe from '../mobicafe.png'

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/" className="mr-5"><LogoWrapper src={mobicafe} /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mi-5"><Link to="/" className="nav-link">Products</Link></li>
          </ul>
          <Link to="/store" className="ml-auto">
            <CartButton>
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              My Cart
            </CartButton>
          </Link>
        </div>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.1rem;
  }
`;

const LogoWrapper = styled.img`
  color: var(--mainWhite);
  width: 7rem;
  height: 2rem;
`;