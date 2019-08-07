import React, { Component } from 'react'
import styled from 'styled-components'

import { storeProducts } from '../productsData/data'

export default class ProductList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       products: [],
    }
  }
  
  render() {
    console.log('Products',storeProducts);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title>Our Products</Title>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const Title = styled.h2`
  text-align: center;
  font-weight: 500;
`