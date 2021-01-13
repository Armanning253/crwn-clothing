import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51I8uWuFvemBN3PkmBUMKvm5biey4GEFuGkqNYLU3TGQL70a4bsSBBD95TUAoSC5nIBMRJot8zBnZmiVGWtx0qia800h4DX8xNg';

    const onToken = token => {
        console.log('payment Successful');
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    );
}

export default StripeCheckoutButton;