function ImagePopup(props) {
  return (
    <div className={`popup popup-pic ${props.isOpen ? "popup_opened" : ""}`}>
      <figure className="popup__figure">
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
          <figcaption className="popup__caption">{props.card.name}</figcaption>
          <button className="popup__close-button" type="reset" onClick={props.onClose}></button>
    </figure>
  </div>
  )
}

export default ImagePopup;