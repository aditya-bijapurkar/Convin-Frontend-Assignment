import React from "react";
import CardForm from "./CardForm";

const AddCard = ({ history, cards, setCards }) => {
  const handleOnSubmit = (card) => {
    setCards([card, ...cards]);
    history.push("/");
  };

  return (
    <React.Fragment>
      <CardForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCard;
