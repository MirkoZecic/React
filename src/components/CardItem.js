import React from 'react';
import CardItemItem from './CardItemItem';

function CardItem(cardItems) {
  console.log(cardItems)

  return (
    cardItems.map(cardItem => {
      return <CardItemItem key={cardItem.src} cardItem={cardItem} />
    })

  );
}

export default CardItem;
