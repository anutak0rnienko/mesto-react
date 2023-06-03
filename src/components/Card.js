import React from "react";
import CurrentUserContext from '../contexts/CurrentUserContext.js';

export default function Card(card) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;

    function handleCardClick() {
        card.onCardClick(card);
    }

    function handleDeleteClick() {
        card.onCardDelete(card)
    }

    return (
        <article className="element">
            {isOwn && <button className='button_del' onClick={handleDeleteClick} />} 
            <img
                src={card.link}
                alt={card.name}
                className="element__image"
                onClick={handleCardClick}
            />
            <div className="element__info">
                <h2 className="element__text">{card.name}</h2>
                <button className="element__delete" type="button"></button>
                <div className="element__like-container">
                    <button className="element__like" type="button"></button>
                    <p className="element__numberlike">{card.likes.length}</p>
                </div>
            </div>
        </article>
    );
}

