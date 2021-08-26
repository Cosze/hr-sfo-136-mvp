import axios from 'axios';

// get request for client
export const getRequest = (client_name, callback) => {
    axios.get(`/app/clients/123?client_name=${client_name}`)
    .then(data => {
        callback(data.data);
    })
    .catch(e => alert('Error getting requests', e));
};

// post request from client
export const postRequest = (formData) => {
    axios({
        method: 'post',
        url: '/app/clients/123/',
        data: formData
    })
    .then(data => console.log(data))
    .catch(e => alert('Error posting request', e));
};

export const getOpenRequests = (callback) => {
    axios.get(`/app/servers/123/open`)
    .then(data => {
        callback(data.data);
    })
    .catch(e => alert('Error getting requests', e));
};

export const getCompleteRequests = (server_name, callback) => {
    axios.get(`/app/servers/123/completed?server_name=${server_name}`)
    .then(data => {
        callback(data.data);
    })
    .catch(e => alert('Error getting requests', e));
};
