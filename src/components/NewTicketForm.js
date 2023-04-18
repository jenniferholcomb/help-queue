import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewTicketForm(props) {

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4()
    });
  }

  const newTicketFormStyle = {
    position: 'fixed',
    left: '50%',
    top: '50%',
    translate: '-50% -50%',
    backgroundColor: 'gray',
    border: '2px solid black',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    boxShadow: '0 0 0.5rem 0.25rem #00000066',
  }
  
  return (
    <React.Fragment>
          <form style={newTicketFormStyle} onSubmit={handleNewTicketFormSubmission}>
            <input
              type='text'
              name='names'
              placeholder='Pair Names' 
            />
            <input
              type='text'
              name='location'
              placeholder='Location' 
            />
            <textarea
              name='issue'
              placeholder='Describe your issue.' 
            />
            <button type='submit'>Help!</button>
            <button type='button' onClick={props.onNewTicketCancel}>Cancel</button>
          </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;