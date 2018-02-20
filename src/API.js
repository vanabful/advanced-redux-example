export default function callApi(endpoint, method) {
    let URL = endpoint;

    return fetch(URL, {
        method: method,
    })
    .then(response => {
        if(!response.ok) {
            return Promise.reject(new Error(response.statusText));
        }
        else {
            return Promise.resolve(response);
        }
    })
    .then(response => response.json())
    .then(data => data) 
}
