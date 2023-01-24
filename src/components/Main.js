import React from 'react';
import pencil from '../images/Vector(2).svg';
import { api } from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {

    const [userName, setUserName] = React.useState('')
    const [userDescription, setUserDescription] = React.useState('')
    const [userAvatar, setUserAvatar] = React.useState('')
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setUserName(data.name)
                setUserDescription(data.about)
                setUserAvatar(data.avatar)
            })
            .catch((err) => console.log(err))
    }, [])

    React.useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                setCards(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <main className="content">
            <div className="profile">
                <div className="profile__avatar-wrapper" onClick={onEditAvatar}>
                    <img src={userAvatar} alt="Жак-Ив Кусто" className="profile__ellipse"/>
                    <button className="profile__ellipse-pencil" type="button"></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__info-name">{userName}</h1>
                    <button type="button" className="profile__info-edit-button" onClick={onEditProfile}>
                        <img src={pencil} alt="Карандаш" className="profile__pencil"/>
                    </button>
                    <p className="profile__info-text">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}></button>
            </div>
            <section className="elements">
                {
                    cards.map((card) => {
                        return (
                            <Card
                            card={card}
                            key={card._id}
                        />
                        )
                    })
                }
            </section>
        </main>
    )
}

export default Main;