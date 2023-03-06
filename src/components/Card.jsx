/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Card = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <Div>
      <div className="card">
        <article className={flipped ? 'flipped' : ''}>
          <img className="front__view" src={card.src} alt="Front view" />
          <img className="back__view" src="/images/cover.jpg" onClick={handleClick} alt="Back view" />
        </article>
      </div>
    </Div>
  );
};

export default Card;

const Div = styled.div`
.card {
  position: relative;

  img {
    width: 12rem;
    aspect-ratio: 1/1;
    border: 2px solid black;
    border-radius: 6px;
  }

    front__view {
      transform: rotateY(90deg);
      position: absolute;
    }

  .flipped .front__view {
    transform: rotateY(0deg);
  }
}
`;
