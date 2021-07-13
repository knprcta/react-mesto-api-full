import React from "react";
import { Link, withRouter } from 'react-router-dom';

function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.onRegister(email, password);
    setEmail("");
    setPassword("");
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="entry">
      <form className="entry__form" onSubmit={handleSubmit}>
        <h2 className="entry__title">Регистрация</h2>
        <input className="entry__input" type="email" name="email" placeholder="Email" required onChange={handleEmailChange} value={email}></input>
        <input className="entry__input" type="password" name="password" placeholder="Пароль" required minLength="6" onChange={handlePasswordChange} value={password}></input>
        <button className="entry__submit-button" type="submit">Зарегистрироваться</button>
      </form>
      <Link className="entry__link" to="/sign-in">Уже зарегистрированы? Войти</Link>
    </div>
  )
}

export default withRouter(Register);