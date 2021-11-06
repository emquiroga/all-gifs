const ENDPOINT = 'http://localhost:8000';

export const loginService = ({username, password}) => {
    return fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    }).then(res => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()})
        .then(res => {
            const {token} = res;
            return token;
        });
}
