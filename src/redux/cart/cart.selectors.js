import { createSelector } from 'reselect';

const selectCart = state => state.cart;   // inputSelector - a slice of state

export const selectCartItems = createSelector(
    [selectCart],                     //! (1st arg) an array of inputSelectors
    (cart) => cart.cartItems          //! (2nd arg) f() that returns the value we want out of selector
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
                accumalatedQuantity + cartItem.quantity,
            0
        )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
                accumalatedQuantity + cartItem.quantity * cartItem.price, 0
        )
)