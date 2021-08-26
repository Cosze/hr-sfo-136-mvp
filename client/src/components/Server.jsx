import React, { useState, useEffect } from 'react';
import Task from './Task.jsx';
import { getOpenRequests, getCompleteRequests } from './requests';
import { SubMain, Status, Tab, Taskbox} from './Styled';

const Server = () => {
    const [completed, setCompleted] = useState(false);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        // server get open requests
        getOpenRequests(setTasks);
    }, []);
    const [finished, setFinished] = useState([]);
    useEffect(() => {
        // server get completed requests
        getCompleteRequests('lemon', setFinished);
    }, []);
    return (
        <>
        <div>Server Name --- STATUS</div>
        <SubMain>
        {completed ? <Task tasks={[finished, setFinished]}/> : <Task tasks={[tasks, setTasks]}/>}
        </SubMain>
        <div style={{display: 'flex'}}>
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