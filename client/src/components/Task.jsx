import React, { useState } from 'react';
import Modal from 'react-modal';
import { updateRequest, cancelRequest, acceptRequest, startRequest, completeRequest, cancelAccept, convertTime} from './requests';
import { Taskbox, Status, Filler } from './Styled';

const customStyles = {
    content: {
      top: '45%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '235px',
      height: '400px',
    },
    overlay: {
      left: '50%',
      right: 'auto',
      top: '50.8%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '277px',
      height: '592.8px',
    }
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
                <Taskbox><span style={{margin:'0 1em'}}>{selection.schedule ? convertTime(selection.schedule) : null}</span><Status>{selection.status}</Status></Taskbox>
                <ul>
                    {/* <li>id - {selection.id}</li> */}
                    <li>Name - {selection.client_name}</li>
                    <li>Room - {selection.room}</li>
                    {/* <li>schedule - {selection.schedule ? convertTime(selection.schedule) : null}</li> */}
                    <li>Preferences - {selection.preferences}</li>
                    <li>Cleaner - {selection.server_name}</li>
                    <li>Accepted - {selection.time_accepted ? convertTime(selection.time_accepted) : null}</li>
                    <li>Started - {selection.time_started ? convertTime(selection.time_started) : null}</li>
                    <li>Completed - {selection.time_completed ? convertTime(selection.time_completed) : null}</li>
                    <li>tip - {selection.tip}</li>
                </ul>
                {process === 'open' ? <button onClick={closeModal}>close</button> : null}
                {who === 'client' ? <button onClick={() => {
                    cancelRequest(selection.id);
                    // console.log(refresh);
                    refresh('mark', tasks[1]);
                    closeModal();
                    }}>Cancel request</button> : null}
                {who === 'server' && process === 'open' && selection.status === 'open' ? <button onClick={() => {
                    acceptRequest('lemon', selection.id);
                    setProcess('accepted');
                    selection.status = 'accepted';
                    refresh.open(tasks[1]);
                }}>Accept</button> : null}
                {process === 'accepted' ? <>
                <button onClick={() => {
                    startRequest(selection.id);
                    setProcess('started');
                    selection.status = 'started';
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
             {tasks[0].length === 0 ? <Filler>Nothing available</Filler> :
              tasks[0].map((task, index) => {
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