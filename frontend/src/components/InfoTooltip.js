import React from "react";
import success from "../images/success.svg";
import fail from "../images/fail.svg";

function InfoTooltip(props) {
  return (
    <div className={`popup popup-status ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__status-container">
        <img className="popup__status-image" src={props.status ? success : fail} alt={props.status ? "Успешно" : "Ошибка"} />
        <p className="popup__status-text">
          {props.status ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
        <button className="popup__close-button" type="reset" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default InfoTooltip;