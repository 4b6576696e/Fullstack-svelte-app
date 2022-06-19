import type { RequestHandler } from '@sveltejs/kit'

const data: TODO[] = [{
    done: false,
    text: 'eat',
    created_at: new Date()
}, {
    done: true,
    text: 'drink',
    created_at: new Date()
}];

export const get: RequestHandler = () => {

    return {
        status: 200,
        body: JSON.stringify(data)
    }
}

export const post: RequestHandler = async (event) => {
    const formData = await event.request.formData()
    // const data = [...formData.entries()];
    // const text = data[0][1]

    const text = formData.get('text')

    data.push({
        created_at: new Date(),
        text,
        done: false
    })

    // console.log(data)

    return {
        status: 303,
        headers: {
            location: '/'
        },
    }
}