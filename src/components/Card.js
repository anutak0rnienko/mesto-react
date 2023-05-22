import React from 'react';

export default function Card({link, name, likes, card, onCardClick}) {
    function handleCardClick() {
        onCardClick(card)
    }
    return (
        <article className="element">
            <img src={link} alt={name} className="element__image" onClick={handleCardClick}/>
            <div className="element__info">
                <h2 className="element__text">{name}</h2>
                <button className="element__delete" type="button"></button>
                <div className="element__like-container">
                    <button className="element__like" type="button"></button>
                    <p className="element__numberlike">{likes.length}</p>
                </div>
            </div>
        </article>
    )
}

