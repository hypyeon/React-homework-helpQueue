import React from "react";
import ticketImg from './../img/Ticket.png';

function Header(){
  return (
    <React.Fragment>
        <h1>Help Queue</h1>
        <img src={ticketImg} alt="Ticket" />
    </React.Fragment>
  );
}

export default Header;