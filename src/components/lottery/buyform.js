import React, { useState } from "react";
import * as S from "./styled";
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
    <S.Container>
      <h3>How many tickets would you like to buy?</h3>
      <S.AmountContainer>
        <Button onClick={removeTicket} $icon>
          -
        </Button>
        <S.Amount>{ticketNumber}</S.Amount>
        <Button onClick={addTicket} $icon>
          +
        </Button>
        {error && <S.ErrorText>{error}</S.ErrorText>}
      </S.AmountContainer>
      <Button
        onClick={() => onClick(ticketNumber)}
        $color="gradient"
        disabled={!ticketNumber}
      >
        Buy for {ticketNumber * ticketPrice} FCHS
      </Button>
    </S.Container>
  );
};

export default BuyFormComponent;
