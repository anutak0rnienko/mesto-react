import React from "react";
import Header from "./Header.js";
import "../index.css";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/Api.js";

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
        React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
        React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

    function openEditProfilePopup() {
        console.log("открыто");
        setIsEditProfilePopupOpen(true);
    }

    function openEditAvatarPopup() {
      setIsEditAvatarPopupOpen(true)
    };

    function openAddPlacePopup() {
      setIsAddPlacePopupOpen(true)
    };

    return (
        <div className="body">
            <div className="page">
                <Header />
                <Main
                    onEditAvatar={openEditAvatarPopup}
                    onEditProfile={openEditProfilePopup}
                    onAddPlace={openAddPlacePopup}
                />
                <Footer />
                <PopupWithForm
                    isOpen={isEditProfilePopupOpen}
                    name="popupEditProfile"
                    title="Редактировать профиль"
                    button="Сохранить"
                >
                    <fieldset className="popup__fieldset">
                        <input
                            value=""
                            id="nameInput"
                            type="text"
                            className="popup__input popup__input_user_name"
                            name="name"
                            placeholder="Имя пользователя"
                            required
                            minlength="2"
                            maxlength="40"
                        />
                        <span className="popup__form-error popup__form-error-name"></span>
                        <input
                            value=""
                            id="jobInput"
                            type="text"
                            className="popup__input popup__input_user_job"
                            name="about"
                            placeholder="Род деятельности"
                            required
                            minlength="2"
                            maxlength="200"
                        />
                        <span className="popup__form-error popup__form-error-about"></span>
                    </fieldset>
                </PopupWithForm>
                <PopupWithForm
                    isOpen={isAddPlacePopupOpen}
                    name="popupAddPlace"
                    title="Новое место"
                    button="Создать"
                >
                    <fieldset className="popup__fieldset">
                        <input
                            value=""
                            id="textInput"
                            type="text"
                            className="popup__input  popup__input_mesto_title"
                            name="title"
                            placeholder="Название"
                            required
                            minlength="2"
                            maxlength="30"
                        />
                        <span className="popup__form-error popup__form-error-title"></span>
                        <input
                            value=""
                            id="imageInput"
                            type="url"
                            className="popup__input popup__input_mesto_image"
                            name="image"
                            placeholder="Ссылка на картинку"
                            required
                        />
                        <span className="popup__form-error popup__form-error-image"></span>
                    </fieldset>
                </PopupWithForm>
                <PopupWithForm
                    isOpen={isEditAvatarPopupOpen}
                    name="popupEditAvatar"
                    title="Обновить аватар"
                    button="Сохранить"
                >
                    <fieldset className="popup__fieldset">
                        <input
                            value=""
                            id="avatar"
                            type="url"
                            className="popup__input popup__input_type_avatar"
                            name="avatar"
                            placeholder="Ссылка на аватар"
                            required
                            minlength="2"
                        />
                        <span className="popup__form-error popup__form-error-avatar"></span>
                    </fieldset>
                </PopupWithForm>
                <PopupWithForm
                    name="popupWithDelete"
                    title="Вы уверены?"
                    button="Да"
                ></PopupWithForm>
                <ImagePopup />
            </div>
        </div>
    );
}

export default App;

///////////////////

// import React from "react"
// import Header from "./Header"
// import Main from "./Main"
// import Footer from "./Footer"
// import PopupWithForm from "./PopupWithForm"
// import ImagePopup from "./ImagePopup"

// function App() {
//   const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
//     React.useState(false)
//   const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
//   const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
//     React.useState(false)

//   const [selectedCard, setSelectedCard] = React.useState({})

//   function closeAllPopups() {
//     setIsEditProfilePopupOpen(false)
//     setIsAddPlacePopupOpen(false)
//     setIsEditAvatarPopupOpen(false)
//     setSelectedCard({})
//   }

//   return (
//     <div className="root">
//       <div className="page">
//         <Header />
//         <Main
//           onEditProfile={setIsEditProfilePopupOpen}
//           onAddPlace={setIsAddPlacePopupOpen}
//           onEditAvatar={setIsEditAvatarPopupOpen}
//           onCardClick={setSelectedCard}
//         />
//         <Footer />

//         <PopupWithForm
//           name="popupEditProfile"
//           title="Редактировать профиль"
//           buttonText="Сохранить"
//           isOpen={isEditProfilePopupOpen}
//           onClose={closeAllPopups}
//         >
//           <label className="popup__label">
//             <input
//               className="popup__input popup__input_type_name"
//               id="nameInput"
//               name="name"
//               type="text"
//               placeholder="Имя"
//               minLength="2"
//               maxLength="40"
//               required
//             />
//             <span className="nameInput-error error" />
//           </label>
//           <label className="popup__label">
//             <input
//               className="popup__input popup__input_type_job"
//               id="jobInput"
//               name="about"
//               type="text"
//               placeholder="О себе"
//               minLength="2"
//               maxLength="200"
//               required
//             />
//             <span className="jobInput-error error" />
//           </label>
//         </PopupWithForm>

//         <PopupWithForm
//           name="popupNewPlace"
//           title="Новое место"
//           buttonText="Создать"
//           isOpen={isAddPlacePopupOpen}
//           onClose={closeAllPopups}
//         >
//           <label className="popup__label">
//             <input
//               className="popup__input popup__input_type_image-name"
//               id="nameInputNew"
//               name="name"
//               type="text"
//               placeholder="Название"
//               minLength="2"
//               maxLength="30"
//               required
//             />
//             <span className="nameInputNew-error error" />
//           </label>
//           <label className="popup__label">
//             <input
//               className="popup__input popup__input_type_image-link"
//               id="linkInputNew"
//               name="link"
//               type="url"
//               placeholder="Ссылка на картинку"
//               required
//             />
//             <span className="linkInputNew-error error" />
//           </label>
//         </PopupWithForm>

//         <PopupWithForm
//           name="popupConfirmation"
//           title="Вы уверены?"
//           buttonText="Да"
//         ></PopupWithForm>

//         <PopupWithForm
//           name="popupEditAvatar"
//           title="Обновить аватар"
//           buttonText="Сохранить"
//           isOpen={isEditAvatarPopupOpen}
//           onClose={closeAllPopups}
//         >
//           <label className="popup__label">
//             <input
//               className="popup__input popup__input_type_link-avatar"
//               id="nameInputAvatar"
//               name="avatar"
//               type="url"
//               placeholder="Введите ссылку URL"
//               required
//             />
//             <span className="nameInputAvatar-error error" />
//           </label>
//         </PopupWithForm>
//         <ImagePopup card={selectedCard} onClose={closeAllPopups} />
//       </div>
//     </div>
//   )
// }
