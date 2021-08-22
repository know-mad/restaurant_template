import React from 'react'
import './index.css'
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import { useShoppingCart, formatCurrencyString  } from 'use-shopping-cart'
import trash from '../../images/trash_icon.svg'

const CheckoutPage = () => {
    const { totalPrice, 
            cartDetails, 
            incrementItem, 
            decrementItem, 
            removeItem,
            redirectToCheckout 
        } = useShoppingCart()

    const entries = []
    for ( const sku in cartDetails ) {
        const entry = cartDetails[sku]
        entries.push(
            <div key={entry.id} className='shopping-cart-entry'>
                <div className='shopping-cart-entry-top'>
                    <div className='entry-top__label'>
                        <p>Item</p>
                    </div>
                    <div className='entry-top__label'>
                        <p>Item Price</p>
                    </div>
                    <div className='entry-top__label'>
                        <p>Qty</p>
                    </div>
                    <div className='entry-top__label'>
                        <p>Total Price</p>
                    </div>
                    <div className='entry-top__label'>
                        <p>Remove Item</p>
                    </div>
                </div>
                <div className='shopping-cart-entry-bottom'>
                    <div className='entry-bottom__label'>
                        <p>{entry.name}</p>
                    </div>
                    <div className='entry-bottom__label'>
                        <p>{entry.formattedPrice}</p>
                    </div>
                    <div className='entry-bottom__label'>
                        <div onClick={() => decrementItem(sku)} className='quantity-adjuster'>-</div>
                        <p>{entry.quantity}</p>
                        <div onClick={() => incrementItem(sku)} className='quantity-adjuster'>+</div>
                    </div>
                    <div className='entry-bottom__label'>
                        <p>{formatCurrencyString({
                                          value: parseInt(entry.price * entry.quantity, 10),
                                          currency: entry.currency,
                                        })}</p>
                    </div>
                    <div className='entry-bottom__label'>
                        <img onClick={() => removeItem(sku)} src={trash} alt='delete' />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Layout>
            <div className='checkout-items-container'>
                {entries.length > 0 ? <h2>Your Items</h2> : <h2>Your Cart is Empty</h2>}
                {entries}
                <h2><span style={{color: `#DF2332`}}>Total Amount Due:</span> {` `} 
                    {formatCurrencyString({
                                          value: parseInt(totalPrice, 10),
                                          currency: `USD`,
                                        })}
                </h2>
            </div>
            <div className='checkout-cta-container'>
                <Link className='continue-shopping-button'to='/order-online/'>Continue Shopping</Link>
                {
                 entries?.length > 0 && (
                        <button onClick={() => redirectToCheckout()} className='checkout-button'>Checkout</button>
                    )
                }
            </div>
        </Layout>
    )
}

export default CheckoutPage