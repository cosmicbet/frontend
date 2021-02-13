import React, { useState } from "react";

const BuyForm = ({ onClick }) => {
  const ticketPrice = 10;
  const [ticketNumber, setTicketNumber] = useState(1);

  const addTicket = () => {
    // TODO: Check balance
    setTicketNumber(ticketNumber + 1);
  };

  const removeTicket = () => {
    if (ticketNumber >= 1) {
      setTicketNumber(ticketNumber - 1);
    }
  };

  return (
    <div>
      <h4>How many tickets would you like to buy?</h4>
      <div>
        {ticketNumber} <button onClick={(e) => addTicket()}>+</button>{" "}
        <button onClick={(e) => removeTicket()}>-</button> <br />
        <br />
        <button onClick={(e) => onClick(e)}>
          Buy for {ticketNumber * ticketPrice} FCHS
        </button>
      </div>
    </div>
  );
};

export default BuyForm;
