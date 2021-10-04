
const apiURL = 'https://jsonplaceholder.typicode.com/'


export default function getUsers(keyword) {

    return fetch(apiURL + keyword)
        .then(res => res.json())
        .then(response => {
            return response
        })
}