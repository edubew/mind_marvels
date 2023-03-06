import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const cardImages = [
  { src: '/images/aki.jpg', matched: false },
  { src: '/images/makima.jpg', matched: false },
  { src: '/images/denji.jpg', matched: false },
  { src: '/images/fushiguro.jpg', matched: false },
  { src: '/images/gojou.jpg', matched: false },
  { src: '/images/himeno.jpg', matched: false },
  { src: '/images/hinata.jpg', matched: false },
  { src: '/images/kakashi.jpg', matched: false },
  { src: '/images/kilua.jpg', matched: false },
  { src: '/images/naruto.jpg', matched: false },
  { src: '/images/phil.jpg', matched: false },
  { src: '/images/ray.jpg', matched: false },
  { src: '/images/tenten.jpg', matched: false },
  { src: '/images/youji.jpg', matched: false },
  { src: '/images/Canary.jpg', matched: false },
  { src: '/images/hisoka.png', matched: false },
  { src: '/images/emma.jpg', matched: false },
  { src: '/images/teamK.jpg', matched: false },
  { src: '/images/satori.jpg', matched: false },
  { src: '/images/itachi.jpg', matched: false },
  { src: '/images/kenma.jpg', matched: false },
];

const Anime = () => {
  const [cards, setCards] = useState([]);
  const [counter, setCounter] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // randomise cards
  const mixCards = () => {
    const mixedCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(mixedCards);
    setCounter(0);
  };

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // reset choices and increase counter
  const resetCounter = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setCounter((prevCounter) => prevCounter + 1);
  };

  // Compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => prevCards.map((card) => {
          if (card.src === choiceOne.src) {
            return { ...card, matched: true };
          }
          return card;
        }));
        resetCounter();
      } else {
        setTimeout(() => resetCounter(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);
  console.log(cards);

  return (
    <Div>
      <h1>Think and Link</h1>
      <button type="submit" onClick={mixCards}>New Game</button>

      <div className="card__grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </Div>
  );
};

export default Anime;

const Div = styled.div`
text-align: center;

.card__grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-top: 40px;
}
`;
