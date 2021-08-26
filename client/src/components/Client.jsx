import React, { useState } from 'react';
import Form from './Form.jsx';
import { SubMain, Status, Tab, Taskbox} from './Styled';

const Client = () => {
    const [request, setRequest] = useState(false);
    return (
        <>
        <div>Client</div>
        {request ? <Form /> : <div>Tasks!</div>}
        <div style={{display: 'flex'}}>
            <Tab onClick={() => setRequest(false)} disabled={!request}>Tasks</Tab>
            <Tab onClick={() => setRequest(true)} disabled={request}>Request</Tab>
        </div>
        </>
    );
};

export default Client;