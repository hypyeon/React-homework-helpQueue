import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
    // when `this.handleClick` is called, it should have the current context of `this` bound to it. Because of it being inside the constructor, `this` is an instance of the class itself. `this` is a JS but not React thing. 
  }

  handleClick = () => {
    this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    // Conditional rendering: 
    let currentlyVisibleState = null;
    // Updating State with Events: 
    // let addTicketButton = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewTicketForm />;
        buttonText = "Return to Ticket List";
    } else {
        currentlyVisibleState = <TicketList />
        // addTicketButton = <button onClick={this.handleClick}>Add ticket</button>
        buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default TicketControl;