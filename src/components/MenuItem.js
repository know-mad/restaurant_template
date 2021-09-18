import React from "react"
import "./MenuItem.css"

import { useShoppingCart } from "use-shopping-cart"

const MenuItem = ({ unitLabel, price, unitName, description, photo }) => {
  const { addItem } = useShoppingCart()

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
          <p style={{ fontSize: `0.75rem` }}>{description}</p>
        </div>
        <div className="add-to-cart">
          <form>
            <p>Qty:</p>
            {<input defaultValue={`1`} type="number" min="1" step="1" />}
            <button onClick={() => addItem(sku)} type={`submit`}>
              add to cart
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
