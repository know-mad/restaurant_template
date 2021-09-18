import React, { useEffect } from "react"
import "./index.css"
import Layout from "../../components/layout"
import { useShoppingCart } from "use-shopping-cart"

const SuccessPage = () => {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <Layout>
      <div className="success-page-container">
        <p style={{ color: `#DF2332` }}>[ Business Logo Here ]</p>
        <h1>We Thank You For Your Purchase</h1>
        <p>An email receipt has been sent to your inbox.</p>
      </div>
    </Layout>
  )
}

export default SuccessPage
