import React, { useState } from "react";

const BuyFormComponent = ({ onClick, currentBalance }) => {
  const ticketPrice = 10;
  const [ticketNumber, setTicketNumber] = useState(1);
  const [error, setError] = useState("");

  const addTicket = () => {
    setError("");
    // TODO: Check balance
    setTicketNumber((ticket) => {
      if (currentBalance <= ticket * ticketPrice) {
        setError("You have not FCHS");
        return ticket;
      }
      return ++ticket;
    });
  };

  const removeTicket = () => {
    setError("");
    if (ticketNumber) {
      setTicketNumber(ticketNumber - 1);
    }
  };

  return (
    <div>
      <h4>How many tickets would you like to buy?</h4>
      <div>
        {ticketNumber} <button onClick={addTicket}>+</button>{" "}
        <button onClick={removeTicket}>-</button> <br />
        <br />
        <div>{error}</div>
        <button onClick={() => onClick(ticketNumber)}>
          Buy for {ticketNumber * ticketPrice} FCHS
        </button>
      </div>
    </div>
  );
};

export default BuyFormComponent;
