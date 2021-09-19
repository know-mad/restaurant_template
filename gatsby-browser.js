import React from "react"
import { CartProvider } from "use-shopping-cart"
const isBrowser = typeof window !== "undefined"
export const wrapRootElement = ({ element }) => (
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