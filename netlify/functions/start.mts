import type { Config, Context } from "@netlify/functions"

export default async (req: Request, context: Context) => {
    return new Response(JSON.stringify({ time: Date.now() * 1000 }), {
        headers: {
            'x-datacenter': context.geo?.country?.code || 'N/A',
            'content-type': 'application/json',
        }
    })
}

export const config: Config = {
    path: "/start",
}
