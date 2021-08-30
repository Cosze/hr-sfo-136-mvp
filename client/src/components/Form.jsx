import React, { useState } from 'react';
import Modal from 'react-modal';
import { postRequest } from './requests';
import { Forms, Status, Input } from './Styled';

const customStyles = {
  content: {
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '235px',
    height: '150px',
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

const Form = () => {
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
        <>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            style={customStyles}
            contentLabel="Example Modal">
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Confirmation Window</h2>
            <div>Ready to submit?</div>
            <div style={{display: 'flex'}}>
                <button onClick={closeModal} style={{cursor:'pointer'}}>Cancel</button>
                <button style={{cursor:'pointer'}} onClick={() => {
                    const formData = new FormData(document.getElementById('form'));
                    const formProps = Object.fromEntries(formData);
                    // convert data into proper format for HTTP request
                    formProps.room = Number(formProps.room);
                    formProps.schedule = Date.parse(formProps.schedule);
                    formProps.preferences = formProps.preferences === '' ? null : formProps.preferences;
                    formProps.tip = formProps.tip === '' ? null : Number(formProps.tip);
                    postRequest(formProps);
                    document.getElementById('form').reset();
                    closeModal();
                }}>Confirm</button>
            </div>
        </Modal>
        <Forms
            id='form'
            onSubmit={ev => {
                ev.preventDefault();
                openModal();
        }}>
            <label>Name: <br/>
              <Input placeholder='Name' type='text' name='client_name' required></Input>
            </label>

            <label>Room number:<br/>
              <Input placeholder='Room #' type='number' name='room' min='1' required></Input>
            </label>

            <label>Scheduled time:<br/>
              <Input type='datetime-local' name='schedule' required></Input>
            </label>

            <label>Special requests:<br/>
              <textarea placeholder='Enter text here...' name='preferences' rows='8' cols='31' style={{border: 'none'}}></textarea>
            </label>

            <label>Optional tip:<br/>
              <Input placeholder='0' type='number' name='tip' min='0'></Input>
            </label>

            <Status as='button' isButton style={{cursor:'pointer', alignSelf: 'center', border: 'none'}}>Submit</Status>
        </Forms>
        </>
    );
};

export default Form;