import React from 'react'

const { Consumer, Provider } = React.createContext()

// Allow us to consume cart info we put on Provider
export const CartConsumer = Consumer
// Allow us to pass cart info to any component that needs it
export const CartProvider = Provider