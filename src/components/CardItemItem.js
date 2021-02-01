import React from 'react'
import { Link } from 'react-router-dom';

function CardItemItem(cardItem) {

    return (
        <div>
            <Link className='cards__item__link' to={cardItem.path}>
                <figure className='cards__item__pic-wrap' data-category={cardItem.label}>
                    <img
                        className='cards__item__img'
                        alt='Travel Image'
                        src={cardItem.src}
                    />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{cardItem.text}</h5>
                    <h4 aliclassName='cards__item__date'>From: {cardItem.datefrom} - To: {cardItem.dateto}</h4>
                </div>
            </Link>

        </div>
    )
}

export default CardItemItem
