import axios from 'axios';

/*=========================
      CLIENT FUNCTIONS
==========================*/

// get request for client
export const getRequest = (client_name, callback) => {
    axios.get(`/app/clients/123?client_name=${client_name}`)
    .then(data => {
        console.log('iteration');
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
    .catch(e => alert('Error cancelling request for client', e));
};

export const updateRequest = (requestID, formData) => {
    axios({
        method: 'put',
        url: `/app/clients/123?request_id=${requestID}`,
        data: formData
    })
    .then(data => console.log(data))
    .catch(e => alert('Error updating request', e));
};

/*=========================
      SERVER FUNCTIONS
==========================*/

export const getOpenRequests = (callback) => {
    axios.get(`/app/servers/123/open`)
    .then(data => {
        callback(data.data);
    })
    .catch(e => alert('Error getting open requests', e));
};

export const getCompleteRequests = (server_name, callback) => {
    axios.get(`/app/servers/123/completed?server_name=${server_name}`)
    .then(data => {
        callback(data.data);
    })
    .catch(e => alert('Error getting complete requests', e));
};

export const acceptRequest = (server_name, request_id) => {
    axios.put(`/app/servers/123/accept?server_name=${server_name}&request_id=${request_id}`)
    .catch(e => alert('Error accepting requests', e));
};

export const startRequest = (request_id) => {
    axios.put(`/app/servers/123/start?request_id=${request_id}`)
    .catch(e => alert('Error starting requests', e));
};

export const completeRequest = (request_id) => {
    axios.put(`/app/servers/123/complete?request_id=${request_id}`)
    .catch(e => alert('Error completing requests', e));
};

export const cancelAccept = (request_id) => {
    axios.put(`/app/servers/123/cancel?request_id=${request_id}`)
    .catch(e => alert('Error cancelling requests for server', e));
};

/*=========================
      HELPER FUNCTIONS
==========================*/

// convert military time into local time AM/PM
const parseTime = (string) => {
    let times = string.split(':');
    let pm = false;
    let hour = times[0];
    if (hour === '00') {
        hour = 12
    } else if (hour === '12') {
        pm = true;
    } else if (hour > 12) {
        hour -= 12;
        pm = true;
    }
    return `${hour}:${times[1]} ${pm ? 'PM' : 'AM'}`;
};

export const onlyConvertTime = (string) => {
    string = Number(string);
    string = new Date(string);
    string = string.toString();
    let split = string.split(' ');
    let hours = split[4];
    let date = `${split[1]} ${split[2]}`;
    let parsedHour = parseTime(hours);
    string = parsedHour + ' - ' + date;
}

export const convertTime = (string) => {
    string = Number(string);
    let string2 = string + 3600000;
    string = new Date(string);
    string2 = new Date(string2);
    string = string.toString();
    string2 = string2.toString();
    let split = string.split(' ');
    let split2 = string2.split(' ');
    let hours = split[4];
    let hours2 = split2[4];
    let date = `${split[1]} ${split[2]}`;
    let date2 = `${split2[1]} ${split2[2]}`;
    let parsedHour = parseTime(hours);
    let parsedHour2 = parseTime(hours2);
    let hourOnly = parsedHour.substring(0, parsedHour.length - 2);
    let hourOnly2 = parsedHour2.substring(0, parsedHour2.length - 2);
    let ampm = parsedHour.substring(parsedHour.length - 2);
    let ampm2 = parsedHour2.substring(parsedHour2.length - 2);
    let combinedHours = ampm === ampm2 ? `${hourOnly} - ${hourOnly2} ${ampm}` : `${hourOnly}${ampm} - ${hourOnly2}${ampm2}`;
    let combinedDate = date === date2 ? date : `${date} - ${date2}`;
    string = [combinedHours, combinedDate];
    return string;
};

export const check = (username, callback) => {
    axios.get(`/app/check?username=${username}`)
    .then(data => {
        callback(data.data);
    })
    .catch(e => alert('Error checking username', e));
};

export const signIn = (login, setName, setRole) => {
    axios.post(`/app/login`, login)
    .then(data => {
        setName(data.data[0].name);
        return data;
    })
    .then(data => {
        setRole(data.data[0].role);
    })
    .catch(e => alert('Incorrect login information', e));
};

export const createAccount = (accInfo, callback) => {
    axios.post( `/app/create`, accInfo)
    .then(data => {
        callback(data.data);
    })
    .catch(e => alert('Error creating account'));
};