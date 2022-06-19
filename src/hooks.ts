import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    const True = event.url.searchParams.has('_method')
    if (True) {
        event.request.method = event.url.searchParams.get('_method').toUpperCase()
    }
    console.log(event.request.method === 'PATCH')

    const response = await resolve(event);

    return response;
}