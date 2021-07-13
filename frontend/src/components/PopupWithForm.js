function PopupWithForm(props) {
  return (
    <div className={`popup popup-${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <form className="popup__container" name={`${props.name}-form`} autoComplete="off" onSubmit={props.onSubmit}>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button className="popup__submit-button" type="submit">{props.button}</button>
        <button className="popup__close-button" type="reset" onClick={props.onClose}></button>
      </form>
    </div>
  );
}

export default PopupWithForm;