import React from "react";
import Header from "./Header.js";
import "../index.css";
import Main from "./Main";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";

export default function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
        React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
        React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <div className="body">
            <div className="page">
                <Header />
                <Main
                    onEditAvatar={setIsEditAvatarPopupOpen}
                    onEditProfile={setIsEditProfilePopupOpen}
                    onAddPlace={setIsAddPlacePopupOpen}
                    onCardClick={setSelectedCard}
                />
                <Footer />
                <PopupWithForm
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    name="edit-profile"
                    title="Редактировать профиль"
                    button="Сохранить"
                >
                    <input
                        id="nameInput"
                        type="text"
                        className="popup__input popup__input_user_name"
                        name="name"
                        placeholder="Имя пользователя"
                        required
                        minLength="2"
                        maxLength="40"
                    />
                    <span className="popup__form-error popup__form-error-name"></span>
                    <input
                        id="jobInput"
                        type="text"
                        className="popup__input popup__input_user_job"
                        name="about"
                        placeholder="Род деятельности"
                        required
                        minLength="2"
                        maxLength="200"
                    />
                    <span className="popup__form-error popup__form-error-about"></span>
                </PopupWithForm>
                <PopupWithForm
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    name="add-place"
                    title="Новое место"
                    button="Создать"
                >
                    <input
                        id="textInput"
                        type="text"
                        className="popup__input  popup__input_mesto_title"
                        name="title"
                        placeholder="Название"
                        required
                        minLength="2"
                        maxLength="30"
                    />
                    <span className="popup__form-error popup__form-error-title"></span>
                    <input
                        id="imageInput"
                        type="url"
                        className="popup__input popup__input_mesto_image"
                        name="image"
                        placeholder="Ссылка на картинку"
                        required
                    />
                    <span className="popup__form-error popup__form-error-image"></span>
                </PopupWithForm>
                <PopupWithForm
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    name="avatar"
                    title="Обновить аватар"
                    button="Сохранить"
                >
                    <input
                        id="avatar"
                        type="url"
                        className="popup__input popup__input_type_avatar"
                        name="avatar"
                        placeholder="Ссылка на аватар"
                        required
                        minLength="2"
                    />
                    <span className="popup__form-error popup__form-error-avatar"></span>
                </PopupWithForm>
                <PopupWithForm
                    name="delete"
                    title="Вы уверены?"
                    button="Да"
                ></PopupWithForm>
                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </div>
        </div>
    );
}
