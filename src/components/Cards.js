import React, { useState } from 'react';
import CardItem from './CardItem';
import Calendar from 'react-calendar'
import './Cards.css';
import 'react-calendar/dist/Calendar.css';

function Cards() {
  const [date1, onChange1] = useState(new Date());
  const [date2, onChange2] = useState(new Date());

  const onChange = date => {
    onChange(date);
  }

  const [cardItems, setCardItems] = useState([{
    src: 'images/img-9.jpg',
    text: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    label: 'Adventure',
    path: '/services',
    datefrom: new Date(2021, 5, 20),
    dateto: new Date(2021, 5, 26)
  }, {
    src: 'images/img-2.jpg',
    text: 'Travel through the Islands of Bali in a Private Cruise',
    label: 'Luxyry',
    path: '/services',
    datefrom: new Date(2021, 6, 12),
    dateto: new Date(2021, 6, 19)
  }, {
    src: 'images/img-3.jpg',
    text: 'Set Sail in the Atlantic Ocean visiting Uncharted Waters',
    label: 'Mystery',
    path: '/services',
    datefrom: new Date(2021, 8, 27),
    dateto: new Date(2021, 9, 4)
  }, {
    src: 'images/img-4.jpg',
    text: 'Experience Football on Top of the Himilayan Mountains',
    label: 'Adventure',
    path: '/services',
    datefrom: new Date(2021, 5, 19),
    dateto: new Date(2021, 5, 25)
  }, {
    src: 'images/img-8.jpg',
    text: 'Ride through the Sahara Desert on a guided camel tour',
    label: 'Adrenaline',
    path: '/services',
    datefrom: new Date(2021, 4, 1),
    dateto: new Date(2021, 4, 8)
  }]);

  return (
    <div className='cards'>
      <h1>Check out these epic Destinations!</h1>
      <h2>Or filter by date</h2>

      <div className="flex-container">
        <div className="flex-item"><h2>Start Date</h2>
          <Calendar
            onChange={onChange1}
            value={date1}
          />
          {console.log("DATUM1: " + date1)}
        </div>
        <div className="flex-item"><h2>Start Date</h2>
          <Calendar
            onChange={onChange2}
            value={date2}
          />
          {console.log("DATUM2: " + date2)}
        </div>
      </div>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <CardItem cardItems={cardItems} />
        </div>
      </div>

    </div>
  );
}

export default Cards;
