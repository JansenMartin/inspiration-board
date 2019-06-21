import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

// const URL = "https://inspiration-board.herokuapp.com/boards/jansen-martin/cards";

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };

  }

  componentDidMount() {

    const URL = this.props.url + this.props.boardName + "/cards";

    // console.log("This is the URL");
    // console.log(this.props.url);

    axios.get(URL)
      .then((response) => {
      console.log(response.data);

        const cardList = response.data.map((card) => {
    
    
          const newCard = {
            id: card.card.id,
            text: card.card.text,
            emoji: card.card.emoji,
          }
    
          return newCard;
        })

        console.log("Hello, out there!");
        console.log(cardList);

        this.setState({ cards: cardList });

      })
      // })
      .catch((error) => {
      console.log(error);
      });
  }

  deleteCard = (id) => {
    console.log(id);
  };


  render() {
    // console.log(this.state.cards);
    // console.log("Hello");
    console.log(this.deleteCard);
    const cards = this.state.cards.map((card, i) => {

      return (
        <li key={card.id}>
          <Card id={card.id} quote={card.text} emoji={card.emoji} deleteCardCallback={this.deleteCard} />
        </li>
      );
    });


    return (
      <div>
        Board
        {cards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
