export const increment = (nr) => {
    return {
        type: 'INCREMENT', //name
        payload: nr //data
    }
}

export const decrement = (nr) => {
    return {
        type: 'DECREMENT',
        payload: nr
    }
}