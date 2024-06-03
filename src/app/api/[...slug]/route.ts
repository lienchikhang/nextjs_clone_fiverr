import http from "@/app/config/axios.config";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        // const body = await new Response(req.body).json();

        const query = req.url.split('api/')[1];

        let response = await http.get(query);

        console.log('res', response);

        const res = NextResponse.json(response.data);

        return res;

    } catch (error) {

        console.log({ error });

        return NextResponse.json({
            error: {
                mess: 'InternalError'
            }
        })
    }

}