import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
  const rows = [];
  for (let i = 0; i < cards.length; i += 4) {
    const row = cards.slice(i, i + 4);
    rows.push(row);
  }

  return (
    <div>
      {rows.map((row, index) => (
        <div key={index} className="flex justify-center mb-4">
          {row.map((card, cardIndex) => (
            <Card
              key={cardIndex}
              title={card.title}
              description={card.description}
              cta={card.cta}
              minutes={card.minutes}
              functionality={card.functionality}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardList;
