import React from 'react';
import { Forms, Status } from './Styled';

const Form = () => {
    return (
        <Forms onSubmit={ev => {
            ev.preventDefault();
            const formData = new FormData(ev.target);
            const formProps = Object.fromEntries(formData);
            // convert data into proper format for HTTP request
            formProps.room = Number(formProps.room);
            formProps.schedule = Date.parse(formProps.schedule);
            formProps.preferences = formProps.preferences === '' ? null : formProps.preferences;
            formProps.tip = formProps.tip === '' ? null : Number(formProps.tip);
            console.log(formProps);
        }}>
            <label>Name:
            <input type='text' name='client_name' required></input>
            </label>

            <label>Room number:
            <input type='number' name='room' required></input>
            </label>

            <label>Scheduled time:
            <input type='datetime-local' name='schedule' required></input>
            </label>

            <label>Additional details:
            <textarea name='preferences' rows='4' cols='50'></textarea>
            </label>

            <label>Optional tip:
            <input type='number' name='tip'></input>
            </label>

            <Status as='button'>Submit</Status>
        </Forms>
    );
};

export default Form;