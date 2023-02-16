import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})
  const [cards, setCards] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState({})

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
}

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }

  function handleAvatarProfileClick() {
    setEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setEditAvatarPopupOpen(false)
    setImagePopupOpen(false)
  }

  function handleCardClick(card) {
    setImagePopupOpen(true)
    setSelectedCard(card)
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    console.log(isLiked);
    // if (isLiked) {
    //   api.deleteLike(card._id)
    //   .then((newCard) => {
    //     setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    // })
    // } else {
    //   api.addLike(card._id)
    //   .then((newCard) => {
    //     setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    // })
    // .catch((err) => console.log(err))
    // }
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
      .catch((err) => console.log(err))
  }

    React.useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                setCards(data)
            })
            .catch((err) => console.log(err))
    }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleAvatarProfileClick}
          onCardClick={handleCardClick}
          handleCardLike={handleCardLike}
          cards={cards}
        />
        <Footer />
        <PopupWithForm 
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          name="edit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          noValidate
        >
          <input 
          className="popup__input popup__input_type_name" 
          id="profile-name" 
          type="text" 
          name="name" 
          placeholder="Имя" 
          minLength="2" 
          maxLength="40" 
          required
          />
          <span className="profile-name-error popup__error"></span>
            <input 
            className="popup__input popup__input_type_job" 
            id="profile-job" 
            type="text" 
            name="description" 
            placeholder="Вид деятельности" 
            minLength="2"
            maxLength="200" 
            required
            />
          <span className="profile-job-error popup__error"></span>
        </PopupWithForm>
        <PopupWithForm 
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          name="add"
          title="Новое место"
          buttonText="Создать"
          noValidate
        >
          <input 
          className="popup__input popup__input_type_name" 
          id="cards-name" 
          type="text" 
          name="name" 
          placeholder="Название" 
          minLength="2" 
          maxLength="30" 
          required
          />
          <span className="cards-name-error popup__error"></span>
          <input 
          className="popup__input popup__input_type_job" 
          id="cards-link" 
          type="url" 
          name="link" 
          placeholder="Ссылка на картинку" 
          required
          />
          <span className="cards-link-error popup__error"></span>
        </PopupWithForm>
        <PopupWithForm 
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          name="avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          noValidate
        >
          <input 
          className="popup__input popup__input_type_avatar" 
          id="popup-avatar" 
          type="url" 
          name="userAvatar" 
          placeholder="Ссылка на картинку" 
          required/>
          <span className="popup__error popup-avatar-error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="confirm"
          title="Вы уверены?"
          buttonText="Да"
        />
        <ImagePopup
          name="image"
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
