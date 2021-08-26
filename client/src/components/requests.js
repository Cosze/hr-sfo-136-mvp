import axios from 'axios';

/*=========================
      CLIENT FUNCTIONS
==========================*/

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

export const cancelRequest = (requestID) => {
    axios({
        method: 'delete',
        url: `/app/clients/123?request_id=${requestID}`
    })
    .then(data => console.log(data))
    .catch(e => alert('Error posting request', e));
};

export const updateRequest = (requestID, formData) => {
    axios({
        method: 'put',
        url: `/app/clients/123?request_id=${requestID}`,
        data: formData
    })
    .then(data => console.log(data))
    .catch(e => alert('Error posting request', e));
};

/*=========================
      SERVER FUNCTIONS
==========================*/

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

export const acceptRequest = (server_name, request_id, callback) => {
    axios.put(`/app/servers/123/accept?server_name=${server_name}&request_id=${request_id}`)
    .then(data => {
        callback(data.data);
    })
    .catch(e => alert('Error getting requests', e));
};

export const startRequest = (request_id, callback) => {
    axios.put(`/app/servers/123/start?request_id=${request_id}`)
    .then(data => {
        callback(data.data);
    })
    .catch(e => alert('Error getting requests', e));
};

export const completeRequest = (request_id, callback) => {
    axios.put(`/app/servers/123/complete?request_id=${request_id}`)
    .then(data => {
        callback(data.data);
    })
    .catch(e => alert('Error getting requests', e));
};

export const startRequest = (request_id, callback) => {
    axios.put(`/app/servers/123/cancel?request_id=${request_id}`)
    .then(data => {
        callback(data.data);
    })
    .catch(e => alert('Error getting requests', e));
};