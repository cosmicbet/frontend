import React, { useState } from "react";
import { Amount } from "./styled";
import { Button } from "../../layouts/styled";

const BuyFormComponent = ({ onClick, currentBalance }) => {
  const ticketPrice = 10;
  const [ticketNumber, setTicketNumber] = useState(1);
  const [error, setError] = useState("");

  const addTicket = () => {
    setError("");
    // TODO: Check balance
    setTicketNumber((ticket) => {
      if (currentBalance <= ticket * ticketPrice) {
        setError("Your balance too low");
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
        <Button onClick={removeTicket} $icon>
          -
        </Button>
        <Amount>{ticketNumber}</Amount>
        <Button onClick={addTicket} $icon>
          +
        </Button>
        <br />
        <br />
        <div>{error}</div>
        <Button
          onClick={() => onClick(ticketNumber)}
          $color="gradient"
          disabled={!ticketNumber}
        >
          Buy for {ticketNumber * ticketPrice} FCHS
        </Button>
      </div>
    </div>
  );
};

export default BuyFormComponent;
