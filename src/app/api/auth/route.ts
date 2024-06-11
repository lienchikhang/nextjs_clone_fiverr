//sau khi login => gọi đến api này để setCookie
export async function POST(req: Request) {

    const payload = await new Response(req.body).json();

    const sessionToken = payload.sessionToken;

    if (!sessionToken) {
        return Response.json({
            message: 'Không nhận được sessionToken'
        }, {
            status: 400,
        });
    }

    return Response.json(sessionToken, {
        status: 200,
        headers: {
            'Set-Cookie': `sessionToken=${sessionToken}; Path=/`
        }
    })
}