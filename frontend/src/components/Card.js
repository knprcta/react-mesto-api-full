import React from "react";
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__delete-button ${isOwn ? 'element__delete-button_visible' : 'element__delete-button_hidden'}`
  );
  
  const isLiked = props.card.likes.some(i => i === currentUser._id);
  const cardLikeButtonClassName = (
    `element__like-button ${isLiked ? 'element__like-button_active' : 'element__like-button_inactive'}`
  ); 

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <article className="element">
      <div className="element__image" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleClick}></div>
      <div className="element__bottom">
        <h2 className="element__caption">{props.card.name}</h2>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <span className="element__likes-count">{props.card.likes.length}</span>
        </div>
      </div>
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
    </article>
  )
}

export default Card;