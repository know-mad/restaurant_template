import React, { useState } from "react"
import "./SkuCard.css"
import { useShoppingCart } from "use-shopping-cart"

const SkuCard = ({ sku, photo, unitName, unitLabel, price, description }) => {
  const { addItem } = useShoppingCart()
  const [itemQuantity, setItemQuantity] = useState(1)

  const handleChange = e => {
    setItemQuantity(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addItem(sku, { count: parseInt(itemQuantity, 10) })
  }

  return (
    <div className="menu-item-container">
      <div className="item-photo">
        <img src={photo} alt={unitName} />
      </div>
      <div className="item-content">
        <div className="item-label">
          <p>{unitLabel}</p>
          <p>{price}</p>
        </div>
        <div className="item-description">
          <p style={{ fontWeight: `bold` }}>{unitName}</p>
          <p>{description}</p>
        </div>
        <div className="add-to-cart">
          <form onSubmit={handleSubmit}>
            <p>Qty:</p>
            {
              <input
                value={itemQuantity}
                type="number"
                min="1"
                step="1"
                onChange={handleChange}
              />
            }
            <button type={`submit`}>add to cart</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SkuCard
