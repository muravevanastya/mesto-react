import React from 'react';
import profileAvatar from '../images/image.jpg';
import pencil from '../images/Vector(2).svg';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    return (
        <main className="content">
            <div className="profile">
                <div className="profile__avatar-wrapper" onClick={onEditAvatar}>
                    <img src={profileAvatar} alt="Жак-Ив Кусто" className="profile__ellipse"/>
                    <button className="profile__ellipse-pencil" type="button"></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__info-name">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__info-edit-button" onClick={onEditProfile}>
                        <img src={pencil} alt="Карандаш" className="profile__pencil"/>
                    </button>
                    <p className="profile__info-text">Исследователь океана</p>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
            </div>
            <section className="elements">
            </section>
        </main>
    )
}

export default Main;