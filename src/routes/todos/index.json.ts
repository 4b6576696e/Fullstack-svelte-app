import type { RequestHandler } from '@sveltejs/kit'

import { api } from './_data'



export const get: RequestHandler = (event) => {
    return api(event)
}

export const post: RequestHandler = async (event) => {
    const formData = await event.request.formData()
    // const data = [...formData.entries()];
    // const text = data[0][1]

    const text = formData.get('text')

    const newData = {
        uid: Date.now().toString(),
        text,
        done: false
    }

    // console.log(data)

    return api(event, newData)
}