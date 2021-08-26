import axios from 'axios';

export const postRequest = (formData) => {
    axios({
        method: 'post',
        url: '/app/clients/123/',
        data: formData
    })
    .then(data => console.log(data))
    .catch(e => alert('Error posting request', e));
}