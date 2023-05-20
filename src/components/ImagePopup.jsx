import React from 'react';

export default function ImagePopup() {

    return (
        <section className="popup popup_type_image">
        <div className="popup__images">
            <figure className="popup__figure">
                <img src=" " alt="Картинка места" className="popup__image" />
                <figcaption className="popup__img-caption"></figcaption>
            </figure>
            <button className="popup__close popup__close_button_image" type="button"></button>
        </div>
    </section>
    )
}