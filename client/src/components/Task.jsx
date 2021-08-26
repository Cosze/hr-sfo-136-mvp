import React, { useState } from 'react';
import Modal from 'react-modal';
import { updateRequest, cancelRequest, acceptRequest, startRequest, completeRequest, cancelAccept} from './requests';
import { Taskbox, Status } from './Styled';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const Task = ({tasks, who, refresh}) => {
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
                    <li>time_completed - {selection.time_completed}</li>
                    <li>time_started - {selection.time_started}</li>
                    <li>tip - {selection.tip}</li>
                </ul>
                <button onClick={closeModal}>close</button>
                {/*
                if client,
                    if status = open, needs cancel button (optional edit)
                    else have a telephone icon/button
                */}
                {who === 'client' ? <button onClick={() => {
                    cancelRequest(selection.id);
                    refresh('mark', tasks[1]);
                    closeModal();
                    }}>Cancel request</button> : null}
                {/*if server:
                    if viewing completed requests: simply a close button
                    open requests 3 stages
                    confirm (triggers accepted) & cancel buttons
                    confirm button becomes start button (started), cancel button removed
                    start button becomes completed button (completed)
                */}
             </Modal>
            {tasks[0].map((task, index) => {
                let time = Number(task.schedule);
                time = new Date(time);
                time = time.toString();
                time = time.split(' ').slice(0,5).join(' ');
                return <Taskbox key={index} onClick={() => {
                    setSelection(task);
                    openModal();
                }}>{time}<Status>{task.status}</Status></Taskbox>;
            })}
        </div>
    );
};

export default Task;