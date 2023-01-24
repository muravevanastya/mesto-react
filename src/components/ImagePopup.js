function ImagePopup() {
    return(
        <div className="popup popup_type_image">
            <div className="popup__image-container">
                <button className="popup__close-button" type="button"></button>
                <img className="popup__image-open" src="none" alt="none"/>
                <p className="popup__image-title"></p>
            </div>
        </div>
    )
}

export default ImagePopup;