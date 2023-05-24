import React from "react";
import Card from "./Card";
import {api} from "../utils/api.js";

export default function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick,
}) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, getCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfoApi()
            .then((userInfo) => {
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar);
            })
            .catch((err) => console.log(err));
        api.getInitialCardsApi()
            .then((cardData) => {
                getCards(
                    cardData.map(({_id, likes, name, link}) => ({
                        likes: likes,
                        name: name,
                        link: link,
                        cardId: _id,
                    }))
                );
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <main className="main-content">
            <section className="profile">
                <div className="profile__avatar">
                    <img
                        src={userAvatar}
                        alt="#"
                        className="profile__avatar-image"
                    />
                    <button
                        type="button"
                        className="profile__avatar-button"
                        onClick={() => {
                            onEditAvatar(true);
                        }}
                    ></button>
                </div>
                <article className="profile__info">
                    <div className="profile__info-name">
                        <h1 className="profile__name">{userName}</h1>
                        <button
                            type="button"
                            className="profile__edit-button"
                            onClick={() => {
                                onEditProfile(true);
                            }}
                        ></button>
                    </div>
                    <p className="profile__text">{userDescription}</p>
                </article>
                <button
                    type="button"
                    className="profile__add-button"
                    onClick={() => {
                        onAddPlace(true);
                    }}
                ></button>
            </section>
            <section className="elements">
                {cards.map((card) => (
                    <Card
                        key={card.cardId}
                        likes={card.likes}
                        name={card.name}
                        link={card.link}
                        onCardClick={onCardClick}
                    />
                ))}
            </section>
        </main>
    );
}
