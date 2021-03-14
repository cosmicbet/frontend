import React, { useState } from "react";
import * as S from "./styled";
import { Button } from "../../layouts/styled";
import { useContext } from "react";
import { WalletContext } from "../../contexts";
import { chainConfig } from "../../utils/keplr";

const BuyFormComponent = ({ onClick }) => {
  const ticketPrice = 10;
  const uTicketPrice = ticketPrice * Math.pow(10, chainConfig.coinDecimals);
  const [ticketNumber, setTicketNumber] = useState(1);
  const [error, setError] = useState("");
  const { wallet } = useContext(WalletContext);

  const checkBalance = (ticketNumber, wallet) => {
    if (!wallet) {
      return false;
    }

    if (wallet.balance.length <= 0) {
      return false;
    }
    const balance = wallet.balance[0].amount;
    const requiredAmount = ticketNumber * uTicketPrice;

    console.log("BAL", balance, requiredAmount);
    return balance >= requiredAmount;
  };

  const buy = () => {
    if (checkBalance(ticketNumber, wallet)) {
      onClick(ticketNumber);
    } else {
      alert("Balance too low");
    }
  };

  const addTicket = () => {
    setError("");

    setTicketNumber((ticket) => {
      if (!checkBalance(ticket, wallet)) {
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
      <Button onClick={() => buy()} $color="gradient" disabled={!ticketNumber}>
        Buy for {ticketNumber * ticketPrice} FCHS
      </Button>
    </S.Container>
  );
};

export default BuyFormComponent;
