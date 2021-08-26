import React, { useState, useEffect } from 'react';
import Form from './Form.jsx';
import Task from './Task.jsx';
import { getRequest } from './requests';
import { SubMain, Status, Tab, Taskbox} from './Styled';

const Client = () => {
    const [request, setRequest] = useState(false);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        getRequest('mark', setTasks);
    }, []);
    return (
        <>
        <div>Client</div>
        <SubMain>
         {request ? <Form /> : <Task tasks={[tasks, setTasks]} who='client' refresh={getRequest}/>}
        </SubMain>

        <div style={{display: 'flex'}}>
            <Tab onClick={() => {
                setRequest(false);
                getRequest('mark', setTasks);
                }} disabled={!request}>Tasks</Tab>
            <Tab onClick={() => setRequest(true)} disabled={request}>Request</Tab>
        </div>
        </>
    );
};

export default Client;