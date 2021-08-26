import React from 'react';
import { Taskbox, Status } from './Styled';

const Task = ({tasks}) => {
    return (
        <div>
            {tasks[0].map((task, index) => {
                let time = Number(task.schedule);
                time = new Date(time);
                time = time.toString();
                time = time.split(' ').slice(0,5).join(' ');
                return <Taskbox key={index} onClick={() => alert('open detail modal')}>{time}<Status>{task.status}</Status></Taskbox>;
            })}
        </div>
    );
};

export default Task;