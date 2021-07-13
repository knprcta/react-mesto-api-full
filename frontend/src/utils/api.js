import { baseUrl } from "./utils";

class Api {
  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUserInfo(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkRes);
  }

  getInitialCards(token) {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkRes);
  }

  setUserInfo({ name, about }, token) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._checkRes);
  }

  updateAvatar({ avatar }, token) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._checkRes);
  }

  addCard({ name, link }, token) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._checkRes);
  }

  deleteCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkRes);
  }

  toogleLike(cardId, status, token) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: status ? "DELETE" : "PUT",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkRes);
  }
}

const api = new Api({ baseUrl });

export default api;