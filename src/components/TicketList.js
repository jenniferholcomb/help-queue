import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props) {
  const ticketListStyle = {
    border: '0.2rem solid rgb(184, 184, 184)',
    borderRadius: '0.5rem',
    width: '75vw',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
  }
  return (
    <React.Fragment>
      <div style={ticketListStyle} className="TicketList">
        <h3>Tickets</h3>
        {props.ticketList.length ? props.ticketList.map((ticket, index) =>
          <Ticket
            names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            key={index}
          />
        ) : <p>No tickets!</p>}
      </div>
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;