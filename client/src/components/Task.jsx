import React, { useState } from 'react';
import Modal from 'react-modal';
import { updateRequest, cancelRequest, acceptRequest, startRequest, completeRequest, cancelAccept, convertTime} from './requests';
import { Taskbox, Status } from './Styled';

const customStyles = {
    content: {
      top: '35%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '280px',
    },
  };

const Task = ({tasks, who, refresh}) => {
    const [process, setProcess] = useState('open');
    const [selection, setSelection] = useState({});
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
      Modal.setAppElement(document.getElementById('app'));
      setIsOpen(true);
    }

    function afterOpenModal() {
    // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }

    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                style={customStyles}
                contentLabel="Example Modal">
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Task details</h2>
                <div>status - {selection.status}</div>
                <ul>
                    <li>id - {selection.id}</li>
                    <li>client_name - {selection.client_name}</li>
                    <li>room - {selection.room}</li>
                    <li>schedule - {selection.schedule}</li>
                    <li>preferences - {selection.preferences}</li>
                    <li>server_name - {selection.server_name}</li>
                    <li>time_accepted - {selection.time_accepted}</li>
                    <li>time_started - {selection.time_started}</li>
                    <li>time_completed - {selection.time_completed}</li>
                    <li>tip - {selection.tip}</li>
                </ul>
                {process === 'open' ? <button onClick={closeModal}>close</button> : null}
                {who === 'client' ? <button onClick={() => {
                    cancelRequest(selection.id);
                    // console.log(refresh);
                    refresh('mark', tasks[1]);
                    closeModal();
                    }}>Cancel request</button> : null}
                {who === 'server' && process === 'open' ? <button onClick={() => {
                    acceptRequest('lemon', selection.id);
                    setProcess('accepted');
                    refresh.open(tasks[1]);
                }}>Accept</button> : null}
                {process === 'accepted' ? <>
                <button onClick={() => {
                    startRequest(selection.id);
                    setProcess('started');
                }}>Start</button>
                <button onClick={() => {
                    cancelAccept(selection.id);
                    setProcess('open');
                    refresh.open(tasks[1]);
                    closeModal();
                }}>cancel</button>
                </> : null}
                {process === 'started' ? <button onClick={() => {
                    completeRequest(selection.id);
                    setProcess('open');
                    refresh.open(tasks[1]);
                    closeModal();
                }}>Complete</button> : null}
             </Modal>

            {tasks[0].map((task, index) => {
                let time = convertTime(task.schedule);
                return <Taskbox key={index} onClick={() => {
                    setSelection(task);
                    openModal();
                }}><span style={{margin:'0 1em'}}>{time}</span><Status>{task.status}</Status></Taskbox>;
            })}
        </div>
    );
};

export default Task;