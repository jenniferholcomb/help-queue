import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTicketList: []
    };
  } 

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList,
                  formVisibleOnPage: false });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.formVisibleOnPage ? <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} /> : <TicketList ticketList={this.state.mainTicketList} /> }
        <button onClick={this.handleClick}>{this.state.formVisibleOnPage ? "Go back" : "Add ticket"}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;