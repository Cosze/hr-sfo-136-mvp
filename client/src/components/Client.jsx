import React, { useState, useEffect } from 'react';
import Form from './Form.jsx';
import Task from './Task.jsx';
import { getRequest } from './requests';
import { SubMain, Status, Tab, Taskbox, ButtonContainer, Splitter, Header} from './Styled';

const Client = () => {
    const [request, setRequest] = useState(false);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        let timeoutID = setTimeout(() => {
           getRequest('mark', setTasks);
        }, 100);
        return () => {
            clearTimeout(timeoutID);
        };
    });
    return (
        <>
        <div>Client</div>
        <Header>{request ? 'New Request' : 'Scheduled Cleanings'}</Header>
        <SubMain>
         {request ? <Form /> : <Task tasks={[tasks, setTasks]} who='client' refresh={getRequest}/>}
        </SubMain>

        <ButtonContainer>
            <Tab onClick={() => {
                setRequest(false);
                }} disabled={!request}>Tasks</Tab>
            <Splitter />
            <Tab onClick={() => setRequest(true)} disabled={request}>Request</Tab>
        </ButtonContainer>
        </>
    );
};

export default Client;