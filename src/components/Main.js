import React from 'react';
import profileAvatar from '../images/image.jpg';
import pencil from '../images/Vector(2).svg';

function Main() {
    return (
        <main className="content">
            <div className="profile">
                <div className="profile__avatar-wrapper">
                    <img src={profileAvatar} alt="Жак-Ив Кусто" class="profile__ellipse"/>
                    <button class="profile__ellipse-pencil" type="button"></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__info-name">Жак-Ив Кусто</h1>
                    <button type="button" className="profile__info-edit-button">
                        <img src={pencil} alt="Карандаш" class="profile__pencil"/>
                    </button>
                    <p className="profile__info-text">Исследователь океана</p>
                </div>
                <button type="button" className="profile__add-button"></button>
            </div>
            <section className="elements">
            </section>
        </main>
    )
}

export default Main;