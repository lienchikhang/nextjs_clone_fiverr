'use client';
import React from 'react'
import PaymentLeft from './PaymentLeft'
import PaymentRight from './PaymentRight';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Payment = () => {

    const notifySuccess = (mess: string) => toast.success(mess);

    return (
        <React.Fragment>
            <ToastContainer />
            <PaymentLeft />
            <PaymentRight notifySuccess={notifySuccess} />
        </React.Fragment>
    )
}

export default Payment