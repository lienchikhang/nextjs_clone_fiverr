import http from "@/app/config/axios.config";
import { ErrorResponse } from "@/app/interfaces/auth.interface";
import { AxiosError } from "axios";
import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        // const body = await new Response(req.body).json();

        const query = req.url.split('api/')[1];

        let response = await http.get(query, {
            headers: {
                'Authorization': `Bearer ${cookies().get('accessToken')?.value}`
            }
        });

        const res = NextResponse.json(response.data);

        return res;

    } catch (error) {

        const err = error as AxiosError

        console.log({ err })

        if (err.response) {
            const axiosErrorResponse = err.response.data as ErrorResponse;

            if (axiosErrorResponse.mess == 'loginExpired') {
                return NextResponse.json({
                    loginExpired: true,
                })
            }
        }

        return NextResponse.error();
    }

}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const body = await new Response(req.body).json();

        const query = req.url.split('api/')[1];
        console.log({ body, query });
        console.log(req.cookies.get('accessToken')?.value)

        let response = await http.post(query, body, {
            headers: {
                'Authorization': `Bearer ${req.cookies.get('accessToken')?.value}`
            }
        });

        console.log('response', response);

        const res = NextResponse.json(response.data);

        return res;

    } catch (error) {

        const err = error as AxiosError

        console.log({ err })

        if (err.response) {
            const axiosErrorResponse = err.response.data as ErrorResponse;
            return NextResponse.json(axiosErrorResponse);
        }

        return NextResponse.json({
            error: true,
        });
    }

}
