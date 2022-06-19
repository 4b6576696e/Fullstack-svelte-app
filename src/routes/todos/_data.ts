// import type { Request } from '@sveltejs/kit'

let data: TODO[] = [{
    done: false,
    text: 'eat',
    uid: '1',
}, {
    done: true,
    text: 'drink',
    uid: '2',
}];

export const api = (event, newData?: Record<string, unknown>) => {
    let status = 500
    let body = {}

    const method: string = event.request.method.toUpperCase();
    const uid: string = event.params.uid

    switch (method) {
        case 'GET':
            status = 200
            body = data
            break
        case 'POST':
            data.push(newData as TODO)
            break
        case 'DELETE':
            data = data.filter(todo => todo.uid !== uid)
            break
        case 'PATCH':
            data = data.map(todo => {
                if (todo.uid === uid) {
                    todo.done = !todo.done
                }
                return todo
            })
            break
        default:
            break
    }

    if (method !== 'GET') {
        return {
            status: 303,
            headers: {
                location: '/'
            }
        }
    }

    return {
        status, body
    }
}