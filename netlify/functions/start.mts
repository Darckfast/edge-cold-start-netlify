import type { Config, Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
    return new Response(JSON.stringify({ time: process.hrtime.bigint() / 1000n; }), {
        headers: {
            'content-type': 'application/json',
        }
    })
}

export const config: Config = {
    path: "/start",
}
