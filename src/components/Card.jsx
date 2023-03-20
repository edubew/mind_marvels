/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Card = ({
  card, handleChoice, flipped, disabled,
}) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
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
    display: block;
    width: 4.5rem;
    aspect-ratio: 1/1;
    border: 1px solid #003152;
    border-radius: 6px;
  }
}
`;
