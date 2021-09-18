/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { CartProvider } from "use-shopping-cart"
const isBrowser = typeof window !== "undefined"
export const wrapRootElement = ({ element }) => (
    // Create a customer provider to get customer details (phone number) into metadata field
        <CartProvider
        mode='payment'
        cartMode="client-only"
        stripe={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
        successUrl={isBrowser && `${window.location.origin}/order-online/success/`}
        cancelUrl={isBrowser && `${window.location.origin}/checkout/`}
        currency="USD"
        allowedCountries={['US', 'GB', 'CA']}
        billingAddressCollection={true}
        >{element}
        </CartProvider>
)