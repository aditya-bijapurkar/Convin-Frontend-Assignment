import React from "react";
import CardForm from "./CardForm";
import { useParams } from "react-router-dom";

const Editcard = ({ history, cards, setCards }) => {
  const { id } = useParams();
  const cardToEdit = cards.find((card) => card.id === id);

  const handleOnSubmit = (card) => {
    const filteredCards = cards.filter((card) => card.id != id);
    setCards([card, ...filteredCards]);
    history.push("/");
  };

  return (
    <div>
      <CardForm card={cardToEdit} handleOnSubmit={handleOnSubmit}></CardForm>
    </div>
  );
};

export default Editcard;
