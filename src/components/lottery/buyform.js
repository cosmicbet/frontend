import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import * as S from "./styled";
import Button from "../button";
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

    return balance >= requiredAmount;
  };

  const buy = () => {
    if (checkBalance(ticketNumber, wallet)) {
      onClick(ticketNumber, wallet);
    } else {
      alert("Balance too low");
    }
  };

  const addTicket = () => {
    setError("");

    setTicketNumber((ticket) => {
      if (!checkBalance(ticket, wallet)) {
        setError("LOW_BALANCE_ERROR");
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
      <h3>
        <FormattedMessage id="HOW_MANY_TICKETS" />
      </h3>
      <S.AmountContainer>
        <Button onClick={removeTicket} $icon>
          -
        </Button>
        <S.Amount>{ticketNumber}</S.Amount>
        <Button onClick={addTicket} $icon>
          +
        </Button>
        {error && (
          <S.ErrorText>
            <FormattedMessage id={error} />
          </S.ErrorText>
        )}
      </S.AmountContainer>
      <Button onClick={() => buy()} $color="gradient" disabled={!ticketNumber}>
        <FormattedMessage
          id="BUY_TICKETS_BUTTON"
          values={{
            amount: ticketNumber * ticketPrice,
            currency: chainConfig.coinDenom,
          }}
        />
      </Button>
    </S.Container>
  );
};

export default BuyFormComponent;
