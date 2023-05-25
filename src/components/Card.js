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

///////class Api {
//     constructor(apiConfig) {
//         this._url = apiConfig.url;
//         this._headers = apiConfig.headers;
//     }

//     getInitialCardsApi() {
//         return fetch(`${this._url}/cards`, {
//             method: "GET",
//             headers: this._headers,
//         }).then((res) => this._checkError(res));
//     }

//     getUserInfoApi() {
//         return fetch(`${this._url}/users/me`, {
//             method: "GET",
//             headers: this._headers,
//         }).then((res) => this._checkError(res));
//     }

//     addCardElements(data) {
//         return fetch(`${this._url}/cards`, {
//             method: "POST",
//             headers: this._headers,
//             body: JSON.stringify(data),
//         }).then((res) => this._checkError(res));
//     }

//     editProfile(data) {
//         return fetch(`${this._url}/users/me`, {
//             method: "PATCH",
//             headers: this._headers,
//             body: JSON.stringify({
//                 name: data.name,
//                 about: data.about,
//             }),
//         }).then((res) => this._checkError(res));
//     }

//     deleteCard(cardId) {
//         return fetch(`${this._url}/cards/${cardId}`, {
//             method: "DELETE",
//             headers: this._headers,
//         }).then((res) => this._checkError(res));
//     }

//     putCardLike(cardId) {
//         return fetch(`${this._url}/cards/${cardId}/likes`, {
//             method: "PUT",
//             headers: this._headers,
//         }).then((res) => this._checkError(res));
//     }

//     deleteCardLike(cardId) {
//         return fetch(`${this._url}/cards/${cardId}/likes`, {
//             method: "DELETE",
//             headers: this._headers,
//         }).then((res) => this._checkError(res));
//     }

//     editProfileAvatar(data) {
//         return fetch(`${this._url}/users/me/avatar`, {
//             method: "PATCH",
//             headers: this._headers,
//             body: JSON.stringify(data),
//         }).then((res) => this._checkError(res));
//     }

//     _checkError(res) {
//         if (res.ok) {
//             return res.json();
//         }
//         return Promise.reject(`Ошибка: ${res.status}`);
//     }
// }

//  const api = new Api({
//     url: "https://mesto.nomoreparties.co/v1/cohort-65",
//     headers: {
//         "Content-Type": "application/json",
//         authorization: "a78ff19e-0d6f-4d15-9950-0c2176ee362c",
//     },
// });

// export default api;

