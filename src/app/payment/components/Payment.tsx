import React from 'react'
import PaymentLeft from './PaymentLeft'
import PaymentRight from './PaymentRight'

const plans = ['Startup', 'Business', 'Enterprise']

const Payment = () => {

    return (
        <React.Fragment>
            <PaymentLeft />
            <PaymentRight />
        </React.Fragment>
    )
}

export default Payment