import http from "@/app/config/axios.config";
import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
// import Cookies from 'js-cookie';
import { cookies } from 'next/headers';
import { ErrorResponse } from "@/app/interfaces/auth.interface";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        // const body = await new Response(req.body).json();

        const query = req.url.split('api/')[1];
        console.log({ query });
        console.log(req.cookies.get('accessToken')?.value)

        let response = await http.post(query, null, {
            headers: {
                'Authorization': `Bearer ${req.cookies.get('accessToken')?.value}`
            }
        });

        console.log('response', response);

        const res = NextResponse.json(response.data);

        console.log({ res });
        return res;

    } catch (error) {

        const err = error as AxiosError;

        if (err.response) {
            const axiosErrorResponse = err.response.data as ErrorResponse;
            return NextResponse.json(axiosErrorResponse);
        }

        return NextResponse.json({
            error: true,
        });
    }

}