import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserContext.jsx';
import Task from './Task.jsx';
import { getOpenRequests, getCompleteRequests } from './requests';
import { SubMain, Status, Tab, Taskbox, ButtonContainer, Splitter} from './Styled';

const Server = () => {
    const { userContext } = useContext(UserContext);
    const [completed, setCompleted] = useState(false);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        let timeoutID = setTimeout(() => {
           getOpenRequests(setTasks);
        }, 100);
        return () => {
            clearTimeout(timeoutID);
        };
    });
    const [finished, setFinished] = useState([]);
    useEffect(() => {
        // server get completed requests
        getCompleteRequests(`${userContext}`, setFinished);
    }, []);
    return (
        <>
        <SubMain>
        {completed ? <Task tasks={[finished, setFinished]} who='server' refresh={{open: getOpenRequests, complete: getCompleteRequests}}/> : <Task tasks={[tasks, setTasks]} who='server' refresh={{open: getOpenRequests, complete: getCompleteRequests}} />}
        </SubMain>
        <ButtonContainer>
            <Tab onClick={() => {
                getOpenRequests(setTasks);
                setCompleted(false);
                }} disabled={!completed}>Open</Tab>
            <Splitter />
            <Tab onClick={() => {
                getCompleteRequests(`${userContext}`, setFinished);
                setCompleted(true);
            }} disabled={completed}>Completed</Tab>
        </ButtonContainer>
        </>
    );
};

export default Server;