import React from 'react';
import logo from '../images/image.jpg'

export default function Main({onEditAvatar, onEditProfile, onAddPlace}) {
    return (
        <main className="main-content">
        <section className="profile">
            <div className="profile__avatar">
                <img src={logo} alt="#" className="profile__avatar-image"/>
                <button type="button" className="profile__avatar-button" onClick={onEditAvatar}></button>
            </div>
            <article className="profile__info">
                <div className="profile__info-name">
                    <h1 className="profile__name">Анна</h1>
                    <button type="button" className="profile__edit-button" onClick={onEditProfile}></button>
                </div>
                <p className="profile__text">Разработчик</p>
            </article>
            <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
        </section>  
        <section className="elements">
        </section>
    </main>
    )
}