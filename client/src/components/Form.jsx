import React from 'react';
import Modal from 'react-modal';
import { postRequest } from './requests';
import { Forms, Status } from './Styled';

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

const Form = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

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
                <button onClick={closeModal}>Cancel</button>
                <button onClick={() => {
                    const formData = new FormData(document.getElementById('form'));
                    const formProps = Object.fromEntries(formData);
                    // convert data into proper format for HTTP request
                    formProps.room = Number(formProps.room);
                    formProps.schedule = Date.parse(formProps.schedule);
                    formProps.preferences = formProps.preferences === '' ? null : formProps.preferences;
                    formProps.tip = formProps.tip === '' ? null : Number(formProps.tip);
                    postRequest(formProps);
                    closeModal();
                }}>Confirm</button>
            </div>
        </Modal>
        <Forms
            id='form'
            onSubmit={ev => {
                ev.preventDefault();
                openModal();
                // const formData = new FormData(ev.target);
                // const formProps = Object.fromEntries(formData);
                // // convert data into proper format for HTTP request
                // formProps.room = Number(formProps.room);
                // formProps.schedule = Date.parse(formProps.schedule);
                // formProps.preferences = formProps.preferences === '' ? null : formProps.preferences;
                // formProps.tip = formProps.tip === '' ? null : Number(formProps.tip);
                // postRequest(formProps);
        }}>
            <h2>Schedule room cleaning</h2>

            <label>Name:
            <input type='text' name='client_name' required></input>
            </label>

            <label>Room number:
            <input type='number' name='room' required></input>
            </label>

            <label>Scheduled time:
            <input type='datetime-local' name='schedule' required></input>
            </label>

            <label>Additional details:
            <textarea name='preferences' rows='4' cols='50'></textarea>
            </label>

            <label>Optional tip:
            <input type='number' name='tip'></input>
            </label>

            <Status as='button'>Submit</Status>
        </Forms>
        </>
    );
};

export default Form;