import http from "@/app/config/axios.config";
import { ErrorResponse } from "@/app/interfaces/auth.interface";
import { AxiosError } from "axios";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        // const body = await new Response(req.body).json();

        const query = req.url.split('api/')[1];

        let response = await http.get(query);

        const res = NextResponse.json(response.data);

        return res;

    } catch (error) {

        console.log({ error });

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
