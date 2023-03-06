import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const cardImages = [
  { src: '/images/aki.jpg' },
  { src: '/images/makima.jpg' },
  { src: '/images/denji.jpg' },
  { src: '/images/fushiguro.jpg' },
  { src: '/images/gojou.jpg' },
  { src: '/images/himeno.jpg' },
  { src: '/images/hinata.jpg' },
  { src: '/images/kakashi.jpg' },
  { src: '/images/kilua.jpg' },
  { src: '/images/naruto.jpg' },
  { src: '/images/phil.jpg' },
  { src: '/images/ray.jpg' },
  { src: '/images/tenten.jpg' },
  { src: '/images/youji.jpg' },
  { src: '/images/Canary.jpg' },
  { src: '/images/hisoka.png' },
  { src: '/images/emma.jpg' },
  { src: '/images/teamK.jpg' },
  { src: '/images/satori.jpg' },
  { src: '/images/itachi.jpg' },
  { src: '/images/kenma.jpg' },
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

  return (
    <Div>
      <h1>Think and Link</h1>
      <button type="submit" onClick={mixCards}>New Game</button>

      <div className="card__grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} handleChoice={handleChoice} />
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
