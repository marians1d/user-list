const baseURL = 'http://localhost:3005/api';

export function  getAll() {
    return fetch(`${baseURL}/users`).then(res => res.json());
}

export function getOne(userId) {
    return fetch(`${baseURL}/users/${userId}`).then((res => res.json()));
}