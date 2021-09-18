import React, { useState } from "react"
import "./index.css"
import Layout from "../../components/layout"
import SkuCard from "../../components/Products/SkuCard"
import { graphql } from "gatsby"
import { formatCurrencyString } from "use-shopping-cart"

const categories = [`Entrees`, `Desserts`, `Drinks`, `Lunch Combo`]

const OrderOnline = ({ data }) => {
  const [label, setLabel] = useState(categories[0])

  return (
    <Layout>
      <div className="menu-page-container">
        <div className="category__selector-top">
          <h3>Please Select A Category</h3>
          <p>
            Note: Online orders are for local pickup only. For delivery please
            use our delivery partners.
          </p>
        </div>
        <div className="category__selector-bottom">
          {categories.map((category, index) => (
            <div
              onClick={() => setLabel(category)}
              className="category__selector__button"
              key={index}
              style={{
                color: label === category ? `red` : `black`,
                textDecoration: label === category ? `underline` : `none`,
              }}
            >
              <p>{category}</p>
            </div>
          ))}
        </div>
        <div className="menu-items-container">
          {data.allStripePrice.edges.map(({ node }) => {
            const newSku = {
              id: node.id,
              name: node.product.name,
              price: node.unit_amount,
              currency: node.currency,
            }
            if (node.product.unit_label === label) {
              return (
                <SkuCard
                  key={node.id}
                  sku={newSku}
                  unitName={node.product.name}
                  photo={node.product.images[0]}
                  unitLabel={node.product.unit_label}
                  description={node.product.description}
                  price={formatCurrencyString({
                    value: parseInt(node.unit_amount, 10),
                    currency: node.currency,
                  })}
                />
              )
            }
          })}
        </div>
      </div>
    </Layout>
  )
}

export default OrderOnline

export const query = graphql`
  query MyQuery {
    allStripePrice {
      edges {
        node {
          product {
            id
            name
            description
            unit_label
            images
          }
          id
          active
          currency
          unit_amount
        }
      }
    }
  }
`
