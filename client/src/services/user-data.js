const baseURL = 'http://localhost:3005/api';

export function  getAll() {
    return fetch(`${baseURL}/users`).then(res => res.json());
}

export async function getOne(userId) {
    if (userId) {
        const res = await fetch(`${baseURL}/users/${userId}`);
        const user = await res.json();
        return user;
    }

    return null;
}

export async function add(user) {
    try {
        const res = await fetch(`${baseURL}/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
    

}