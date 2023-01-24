import React from 'react'

function Card(props) {
    return (
        <div className="elements-template">
            <div className="element">
                <button className="element__delete" type="button">
                    <img className="element__trashcan"/>
                </button>
                <img className="element__image" src={props.card.link} alt={props.card.name}/>
                <div className="element__description">
                    <h2 className="element__title">{props.card.name}</h2>
                    <div className="element__like-zone">
                        <button className="element__like" type="button"></button>
                        <span className="element__like-counter">{props.card.likes.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;