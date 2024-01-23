import React from "react";
import Ticket from "./Ticket";
import PropTypes from 'prop-types';

/*
const mainTicketList = [
    {
      names: 'Thato and Haley',
      location: '3A',
      issue: 'Firebase won\'t save record. Halp.'
    },
    {
      names: 'Sleater and Kinney',
      location: '4B',
      issue: 'Prop types are throwing an error.'
    },
    {
      names: 'Imani & Jacob',
      location: '9F',
      issue: 'Child component isn\'t rendering.'
    }
];
*/ //removing this after adding `mainTicketList: []` in TicketControl

function TicketList(props){
  return (
    <React.Fragment>
        <hr/> 
        {props.ticketList.map((ticket, index) =>
        // changing from `mainTicketList` to `props.ticketList` to loop through the list passed down from TicketControl
          <Ticket names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            key={index}/>
        )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;