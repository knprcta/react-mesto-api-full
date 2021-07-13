import React from "react";
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatar = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onUpdateAvatar({
      avatar: avatar.current.value,
    });
  }

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} button="Обновить" onSubmit={handleSubmit} >
      <section className="popup__field">
        <input className="popup__input popup__input_avatar" type="url" name="avatar" id="userAvatar-input" placeholder="Ссылка на картинку" required ref={avatar} />
        <span className="popup__input-error" id="userAvatar-input-error"></span>
      </section>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;