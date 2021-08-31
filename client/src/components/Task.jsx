import React, { useState, useContext } from 'react';
import UserContext from './UserContext.jsx';
import Modal from 'react-modal';
import { updateRequest, cancelRequest, acceptRequest, startRequest, completeRequest, cancelAccept, convertTime} from './requests';
import { Taskbox, Status, Filler, ModalView, InfoText, InfoTitle, ButtonHolder, Close, CloseImage } from './Styled';

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
    const { userContext } = useContext(UserContext);
    const [process, setProcess] = useState('open');
    const [selection, setSelection] = useState({});
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
      Modal.setAppElement(document.getElementById('app'));
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                contentLabel="Example Modal">
                  <Status modal>{selection.status}</Status>
                  {who === 'server' ? null : (
                  <ModalView>
                    {selection.server_name ? (
                    <div style={{width: '30%',}}>
                      <img src='https://static.thenounproject.com/png/2366460-200.png' alt='server image' style={{width: '100%'}}></img>
                    </div>
                    ) : null}
                    <InfoText>{selection.server_name}</InfoText>
                    <InfoText style={{fontSize: '0.8rem'}}>Tip: ${selection.tip}</InfoText>
                    <InfoTitle>Preferences: </InfoTitle>
                    {selection.preferences ? <InfoText preferences>{selection.preferences}</InfoText> :
                    <InfoText>N/A</InfoText>
                    }

                  </ModalView>
                  )}
                {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Task details</h2>
                <Taskbox>
                  <div style={{margin:'0 1em', display: 'flex', flexDirection: 'column',}}>
                    <span style={{whiteSpace: 'nowrap', maxWidth: '100px', fontSize: '0.8rem'}}>{selection.schedule ? convertTime(selection.schedule)[0] : null}</span>
                    <span style={{whiteSpace: 'nowrap', maxWidth: '100px', fontSize: '0.8rem'}}>{selection.schedule ? convertTime(selection.schedule)[1] : null}</span>
                  </div>
                  <Status>{selection.status}</Status>
                </Taskbox>
                <ul>
                    <li>Name - {selection.client_name}</li>
                    <li>Room - {selection.room}</li>
                    <li>Preferences - {selection.preferences}</li>
                    <li>Cleaner - {selection.server_name}</li>
                    <li>Accepted - {selection.time_accepted ? convertTime(selection.time_accepted) : null}</li>
                    <li>Started - {selection.time_started ? convertTime(selection.time_started) : null}</li>
                    <li>Completed - {selection.time_completed ? convertTime(selection.time_completed) : null}</li>
                    <li>tip - {selection.tip}</li>
                </ul> */}

                {process === 'open' ? <Close onClick={closeModal}><CloseImage src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png' alt='close button' /></Close> : null}
                <ButtonHolder>
                  {who === 'client' ? <button onClick={() => {
                      cancelRequest(selection.id);
                      // console.log(refresh);
                      refresh(`${userContext}`, tasks[1]);
                      closeModal();
                      }}>Cancel request</button> : null}
                  {who === 'server' && process === 'open' && selection.status === 'open' ? <button onClick={() => {
                      acceptRequest(`${userContext}`, selection.id);
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
                  }}>Cancel</button>
                  </> : null}
                  {process === 'started' ? <button onClick={() => {
                      completeRequest(selection.id);
                      setProcess('open');
                      refresh.open(tasks[1]);
                      closeModal();
                  }}>Complete</button> : null}
                </ButtonHolder>
             </Modal>
             {tasks[0].length === 0 ? <Filler>Nothing available</Filler> :
              tasks[0].map((task, index) => {
                let time = convertTime(task.schedule);
                return <Taskbox key={index} onClick={() => {
                    setSelection(task);
                    openModal();
                }}><div style={{margin:'0 1em', display: 'flex', flexDirection: 'column',}}><span style={{whiteSpace: 'nowrap', maxWidth: '100px', fontSize: '0.85rem'}}>{time[0]}</span><span style={{whiteSpace: 'nowrap', maxWidth: '100px', fontSize: '0.8rem'}}>{time[1]}</span>
                  </div><Status>{task.status}</Status></Taskbox>;
            })}
        </div>
    );
};

export default Task;