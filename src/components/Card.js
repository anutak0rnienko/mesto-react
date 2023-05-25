import React from "react";

export default function Card(card) {
    function handleCardClick() {
        card.onCardClick(card);
    }
    return (
        <article className="element">
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

