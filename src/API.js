import axios from 'axios';

export default function callApi(endpoint, method, body) {
    let URL = endpoint;
    let bodyData = JSON.stringify(body); 

    return axios({
        method: method,
        url: URL,
        data: bodyData,
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => {
        if(response.statusText === 'OK'){
            return Promise.resolve(response);
        }
        else {
            return Promise.reject(response.statusText);
        }
    })
}