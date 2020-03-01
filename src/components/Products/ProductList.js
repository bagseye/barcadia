import React, { Component } from "react"
import styled from "styled-components"
import Product from "./Product"

const Section = styled.section`
  grid-column: 1 / 4;
  margin-left: -20px;
  margin-right: -20px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const FlexItem = styled.div`
  width: 100%;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    flex: 0 0 calc(100% / 3);
  }
`

export default class ProductList extends Component {
  state = {
    products: [],
    sortedProducts: [],
  }

  componentDidMount() {
    this.setState({
      products: this.props.products.edges,
      sortedProducts: this.props.products.edges,
    })
  }
  render() {
    return (
      <Section>
        <FlexContainer>
          {this.state.sortedProducts.map(({ node }) => {
            return (
              <FlexItem>
                <Product key={node.contentful_id} product={node} />
              </FlexItem>
            )
          })}
        </FlexContainer>
      </Section>
    )
  }
}
