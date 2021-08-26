import axios from 'axios';

// post request from client
export const postRequest = (formData) => {
    axios({
        method: 'post',
        url: '/app/clients/123/',
        data: formData
    })
    .then(data => console.log(data))
    .catch(e => alert('Error posting request', e));
}

// get request for client
export const getRequest = (client_name) => {
    axios.get('/app/clients/123')
    .then(data => console.log(data))
    .catch(e => alert('Error getting requests', e));
}