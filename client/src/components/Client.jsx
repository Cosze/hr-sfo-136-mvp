import React, { useState, useEffect } from 'react';
import Form from './Form.jsx';
import Task from './Task.jsx';
import { getRequest } from './requests';
import { SubMain, Status, Tab, Taskbox} from './Styled';

const Client = () => {
    const [request, setRequest] = useState(false);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        let timeoutID = setTimeout(() => {
           getRequest('mark', setTasks);
        }, 300);
        return () => {
            clearTimeout(timeoutID);
        };
    });
    return (
        <>
        <div>Client</div>
        <SubMain>
         {request ? <Form /> : <Task tasks={[tasks, setTasks]} who='client' refresh={getRequest}/>}
        </SubMain>

        <div style={{display: 'flex', width: '70%', justifyContent: 'space-evenly', position: 'absolute', bottom: '5%', right:'15%'}}>
            <Tab onClick={() => {
                setRequest(false);
                }} disabled={!request}>Tasks</Tab>
            <Tab onClick={() => setRequest(true)} disabled={request}>Request</Tab>
        </div>
        </>
    );
};

export default Client;