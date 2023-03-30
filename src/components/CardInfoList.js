import React from "react";
import _ from "lodash";
import NewCard from "./NewCard";

const CardInfoList = ({ cards, setCards }) => {
  const handleRemoveCard = (id) => {
    setCards(cards.filter((card) => card.id != id));
  };

  return (
    <React.Fragment>
      <h1>Currently Available videos:</h1>
      <div className="cards-list">
        {!_.isEmpty(cards) ? (
          cards.map((card) => (
            <NewCard
              key={card.id}
              {...card}
              handleRemoveCard={handleRemoveCard}
            />
          ))
        ) : (
          <p className="message">
            {" "}
            No videos available right now, Please add some Youtube videos by
            clicking the "Add new Video" option!
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default CardInfoList;
