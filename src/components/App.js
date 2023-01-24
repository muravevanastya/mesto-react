import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)

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
  }

  return (
    <div className="body">
      <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleAvatarProfileClick}
      />
      <Footer />
      <PopupWithForm 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="popupEditForm"
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
        name="cardForm"
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
        name="avatarForm"
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
        name="cardForm"
        title="Обновить аватар"
        buttonText="Сохранить"
      />
      <ImagePopup/>
      </div>
    </div>
  );
}

export default App;
