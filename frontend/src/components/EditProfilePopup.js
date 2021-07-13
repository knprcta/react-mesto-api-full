import React from "react";
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]); 

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm name="profile" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} button="Сохранить" onSubmit={handleSubmit}>
      <section className="popup__field">
        <input className="popup__input popup__input_name" type="text" name="name" id="userName-input" placeholder="Имя" required minLength="2" maxLength="40" onChange={handleNameChange} value={name || ''} />
        <span className="popup__input-error" id="userName-input-error"></span>
      </section>
      <section className="popup__field">
        <input className="popup__input popup__input_about" type="text" name="about" id="userAbout-input" placeholder="О себе" required minLength="2" maxLength="200" onChange={handleDescriptionChange} value={description || ''} />
        <span className="popup__input-error" id="userAbout-input-error"></span>
      </section>
    </PopupWithForm>
  )
}

export default EditProfilePopup;