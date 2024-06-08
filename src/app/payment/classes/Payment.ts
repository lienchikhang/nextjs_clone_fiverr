import http from "@/app/config/axios.config";
import axios from "axios";

interface Strategy {
    make(jobId: number): any;
}

export class Payment {

    constructor(private strategy: Strategy) {
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public async make(jobId: number) {
        this.strategy.make(jobId);
    }

    public getStrategy() {
        return this.strategy;
    }
}

export class VNPay implements Strategy {
    make(jobId: number) {
        console.log('making payment with VNPAY')
    }
}

export class Test implements Strategy {
    async make(jobId: number) {
        try {
            const rs = await axios.post(`/api/hire-job/hire/${jobId}`, null, {
                withCredentials: true,
            })

            return rs;
        } catch (error) {
            console.log('errrrrr:::', error);
        }
    }
}