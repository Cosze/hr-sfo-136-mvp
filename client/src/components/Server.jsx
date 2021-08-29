import React, { useState, useEffect } from 'react';
import Task from './Task.jsx';
import { getOpenRequests, getCompleteRequests } from './requests';
import { SubMain, Status, Tab, Taskbox} from './Styled';

const Server = () => {
    const [completed, setCompleted] = useState(false);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        let timeoutID = setTimeout(() => {
           getOpenRequests(setTasks);
        }, 300);
        return () => {
            clearTimeout(timeoutID);
        };
    });
    const [finished, setFinished] = useState([]);
    useEffect(() => {
        // server get completed requests
        getCompleteRequests('lemon', setFinished);
    }, []);
    return (
        <>
        <div>Server Name --- STATUS</div>
        <SubMain>
        {completed ? <Task tasks={[finished, setFinished]} who='server' refresh={{open: getOpenRequests, complete: getCompleteRequests}}/> : <Task tasks={[tasks, setTasks]} who='server' refresh={{open: getOpenRequests, complete: getCompleteRequests}} />}
        </SubMain>
        <div style={{display: 'flex', width: '70%', justifyContent: 'space-evenly', position: 'absolute', bottom: '5%', right:'15%'}}>
            <Tab onClick={() => {
                getOpenRequests(setTasks);
                setCompleted(false);
                }} disabled={!completed}>open</Tab>
            <Tab onClick={() => {
                getCompleteRequests('lemon', setFinished);
                setCompleted(true);
            }} disabled={completed}>Completed</Tab>
        </div>
        </>
    );
};

export default Server;