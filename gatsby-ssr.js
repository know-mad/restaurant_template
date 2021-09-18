/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { CartProvider } from "use-shopping-cart"

// import { loadStripe } from '@stripe/stripe-js'
// const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
export const wrapRootElement = ({ element }) => (
    // Create a customer provider to get customer details (phone number) into metadata field
        <CartProvider
        mode='payment'
        cartMode="client-only"
        stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
        successUrl={`${window.location.origin}/order-online/success/`}
        cancelUrl={`${window.location.origin}/checkout/`}
        currency="USD"
        allowedCountries={['US', 'GB', 'CA']}
        billingAddressCollection={true}
        >{element}
        </CartProvider>
)