import React from "react";
import Countdown from "react-countdown";

const Stats = () => {
  const ticketSold = 12345;
  const nextExtraction = Date.now() + 2 * 60 * 60 * 1000;

  return (
    <p>
      Your Balance: 100 FCHS <br />
      Next extraction in: <Countdown date={nextExtraction} /> <br />
      Total tickets sold: {ticketSold}
    </p>
  );
};

export default Stats;
