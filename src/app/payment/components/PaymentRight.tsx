'use client';
import { Context } from '@/app/redux';
import { Skeleton } from '@mui/material';
import Image from 'next/image';
import React, { useContext } from 'react'
import { Payment, Test, VNPay } from '../classes/Payment';

const PaymentRight = () => {

    const [state, dispatch] = useContext(Context);

    const handleConfirm = () => {
        if (!state.infoOrder) return;

        const payment = new Payment(new Test());

        if (state.infoOrder.paymentType == 'VNPay') {
            console.log('true')
            payment.setStrategy(new VNPay());
        }

        //make payment
        console.log(payment.getStrategy())
        payment.make(state.infoOrder.id);

        //go back to home

    }

    return (
        <div className='payment__right'>
            <div className="infomation">
                <div className='infomation__top'>
                    {state.infoOrder ? <Image src={state.infoOrder.image ? state.infoOrder.image : '/images/noimage.jpeg'} alt="" width={50} height={50} /> : <Skeleton variant="rectangular" width={210} height={118} />}
                    {state.infoOrder ? <p>{state.infoOrder.desc}</p> : <p>I will create your python , cpp and java projects</p>}
                </div>
                <div className='infomation__bottom'>
                    <p className='type'>BASIC</p>
                    <div className='price'>
                        {state.infoOrder ? <p>{state.infoOrder.price.toLocaleString()}</p> : <p>1.450.000</p>}
                        <p>x {state.infoOrder ? <span>{state.infoOrder.quantity}</span> : <span>1</span>}</p>
                    </div>
                </div>
            </div>
            <div className='checkout'>
                <div className='service'>
                    <p>Service fee</p>
                    <p>0</p>
                </div>
                <div className='total'>
                    <p className='checkout__total'>Total</p>
                    {state.infoOrder ? <p>{(state.infoOrder.price * state.infoOrder.quantity).toLocaleString()}</p> : <p>1.450.000</p>}
                </div>
                <button className={`${state.infoOrder ? 'active' : 'disable'}`} onClick={handleConfirm}>Confirm & Pay</button>
            </div>
        </div>
    )
}

export default PaymentRight