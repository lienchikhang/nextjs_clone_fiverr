import React from 'react'
import Payment from '../components/Payment'
import { Metadata } from 'next';
import '../styles/payment.scss';

export const metadata: Metadata = {
    title: "Secure Checkout",
    description: "Security Checkout Page",
};

const PaymentPage = () => {
    return (
        <div className='payment__wrapper'>
            <Payment />
        </div>
    )
}

export default PaymentPage