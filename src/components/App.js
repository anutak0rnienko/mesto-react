import React from "react";
import Header from "./Header.js";
import "../index.css";
import Main from "./Main";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import api from "../utils/api.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";

export default function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
        React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
        React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

    React.useEffect(() => {
        Promise.all([api.getUserInfoApi(), api.getInitialCardsApi()])
            .then(([userInfo, cardData]) => {
                setCurrentUser(userInfo);
                setCards(cardData);
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => {
                    return state.map((c) => (c._id === card._id ? newCard : c));
                });
            })
            .catch((err) => console.log(`Ошибка: ${err}`));
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== card._id));
            })
            .catch((err) => console.log(`Ошибка: ${err}`));
    }

    function handleUpdateUser(userInfo) {
        setIsLoading(true);
        api.editProfile(userInfo)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch((err) => console.log(`Ошибка: ${err}`))
            .finally(() => setIsLoading(false));
    }

    function handleUpdateAvatar(avatar) {
        setIsLoading(true);
        api.editProfileAvatar(avatar)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch((err) => console.log(`Ошибка: ${err}`))
            .finally(() => setIsLoading(false));
    }

    function handleAddPlaceSubmit(newCard) {
        setIsLoading(true);
        api.addCardElements(newCard)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => console.log(`Ошибка: ${err}`))
            .finally(() => setIsLoading(false));
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="body">
                <div className="page">
                    <Header />
                    <Main
                        onEditAvatar={setIsEditAvatarPopupOpen}
                        onEditProfile={setIsEditProfilePopupOpen}
                        onAddPlace={setIsAddPlacePopupOpen}
                        onCardClick={setSelectedCard}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                        cards={cards}
                    />
                    <Footer />
                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                        isLoading={isLoading}
                    />
                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit}
                        isLoading={isLoading}
                    />
                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                        isLoading={isLoading}
                    />
                    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}
