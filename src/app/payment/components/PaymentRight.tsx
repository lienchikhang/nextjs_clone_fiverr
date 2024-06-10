'use client';
import { Context } from '@/app/redux';
import { Skeleton } from '@mui/material';
import Image from 'next/image';
import React, { useContext, useState } from 'react'
import { Payment, Test, VNPay } from '../classes/Payment';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';


interface Props {
    notifySuccess: (mess: string) => void;
}

const PaymentRight: React.FC<Props> = ({ notifySuccess }) => {

    const [state, dispatch] = useContext(Context);
    const [isPaid, setIsPaid] = useState(false);

    const handleConfirm = async () => {
        if (!state.infoOrder) return;

        if (isPaid) return;

        if (!Cookies.get('accessToken')) {
            dispatch({
                type: 'set::modalAuth',
                payload: true,
            })
            return;
        }

        const payment = new Payment(new Test());

        if (state.infoOrder.paymentType == 'VNPay') {
            console.log('true')
            payment.setStrategy(new VNPay());
        }

        //make payment
        console.log(payment.getStrategy())
        const rs = await payment.make(state.infoOrder.id);

        console.log({ rs });

        //go back to home
        if (rs.status == 200) {
            setIsPaid(true);
            notifySuccess('Paid successfully!');
        }
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
                <button className={`${state.infoOrder ? 'active' : 'disable'} ${isPaid ? 'done' : ''}`} onClick={handleConfirm}>{isPaid ? 'Thank you' : 'Confirm & Pay'}</button>
            </div>
        </div>
    )
}

export default PaymentRight