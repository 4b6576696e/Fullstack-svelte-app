import type { RequestHandler } from '@sveltejs/kit'

import { api } from './_data'

export const del = (event) => {
    // return api(event)
    return api(event)
}

export const patch = (event) => {
    return api(event)
}