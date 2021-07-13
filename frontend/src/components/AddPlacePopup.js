import React from "react";
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]); 

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm name="place" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} button="Создать" onSubmit={handleSubmit}>
      <section className="popup__field">
        <input className="popup__input popup__input_title" type="text" name="name" id="cardName-input" placeholder="Название" required minLength="2" maxLength="30" onChange={handleNameChange} value={name} />
        <span className="popup__input-error" id="cardName-input-error"></span>
      </section>
      <section className="popup__field">
        <input className="popup__input popup__input_link" type="url" name="link" id="cardLink-input" placeholder="Ссылка на картинку" required onChange={handleLinkChange} value={link} />
        <span className="popup__input-error" id="cardLink-input-error"></span>
      </section>
    </PopupWithForm>
  )
}

export default AddPlacePopup;