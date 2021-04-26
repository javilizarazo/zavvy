import React, { useState, useEffect } from "react";
import { getCardDetails, getCardTransactions } from "../api";
import Skeleton from "react-loading-skeleton";
import TransactionList from "./TransactionList";

import "./CardDetails.css";

const CardDetails = ({ cards, cardId, showDetails }) => {
  const [cardDetails, setCardDetails] = useState();
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(false);

  const [input, setInput] = useState('');
  const [cardListDefault, setCardListDefault] = useState();
  const [cardList, setCardList] = useState();

  const selectedCard = cards ? cards : "";

  useEffect(() => {
    setIsLoadingDetails(true);
    getCardDetails(cardId).then((data) => {
      setCardDetails(data);
      setIsLoadingDetails(false);
    });
  }, [cardId]);

  useEffect(() => {
    setIsLoadingTransactions(true);
    getCardTransactions(cardId).then((data) => {
      setCardList(data) 
      setCardListDefault(data)
      setIsLoadingTransactions(false);
    });
  }, [cardId]);

  const updateInput = async (input) => {
    const filtered = cardListDefault.filter(card => {
     return card.label.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input);
    setCardList(filtered);
  }

  const renderTransactions = () => {
    if (isLoadingDetails) {
      return (
        <div className="cardData__loadingPlaceholder">
          <Skeleton height={"184px"} count={1} />
        </div>
      );
    } else {
      return (
        <div className="cardData__details">
          <h2>{selectedCard.name}</h2>
          <p>{cardDetails.number}</p>
          <div className="cardData__back">
            Exp
            <span>
              {cardDetails.expiration_month}/{cardDetails.expiration_year}
            </span>
            CVV <span>{cardDetails.cvv}</span>
          </div>

          <div className="cardData__network">{selectedCard.network}</div>
        </div>
      );
    }
  };

  const isOpen = showDetails ? " cardData--open" : "";

  const closeDetails = () => {
    // setshowDetailsPanel(false);
    // console.log('showDetailsPanel in', showDetailsPanel)
  }


  return (
    <div className={`cardData${isOpen}`}>
      <button className="cardData__close" onClick={closeDetails}>
        X
      </button>
      {cardDetails ? renderTransactions() : ""}
      {cardList ? (
        <TransactionList
          transactions={cardList}
          isLoading={isLoadingTransactions}
          input={input} 
          onChange={updateInput}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default CardDetails;
