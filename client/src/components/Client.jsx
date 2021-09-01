import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserContext.jsx';
import Form from './Form.jsx';
import Task from './Task.jsx';
import { getRequest } from './requests';
import { SubMain, Status, Tab, Taskbox, ButtonContainer, Splitter, Header} from './Styled';


const Client = () => {
    const { userContext } = useContext(UserContext);
    const [request, setRequest] = useState(false);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        let timeoutID = setTimeout(() => {
           getRequest(userContext, setTasks);
        }, 100);
        return () => {
            clearTimeout(timeoutID);
        };
    });
    return (
        <>
        {/* <div>Client</div> */}
        {/* <Header>{request ? 'New Request' : 'Scheduled Cleanings'}</Header> */}
        <SubMain>
         {request ? <Form setRequest={setRequest} /> : <Task tasks={[tasks, setTasks]} who='client' refresh={getRequest}/>}
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