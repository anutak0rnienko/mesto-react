import React from "react";

export default function PopupWithForm({name, title, isOpen, children, button}) {
    <>
    <section className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
        <div className="popup__container">
            <button type="button" class="popup__close"></button>
            <h2 className="popup__title">{title}</h2>
            <form name={name} className="popup__form" novalidate>
                {children}
                <button className="popup__button popup__button_edit" type="submit" disabled>{button}</button>
             </form>
        </div>
    </section>
    </>
}

////////////////////////

// ...export default Card

// import React from "react"

// function PopupWithForm({ name, title, buttonText, children, isOpen, onClose }) {
//   return (
//     <div className={popup popup_type_${name} ${isOpen ? "popup_opened" : ""}}>
//       <div className="popup__container">
//         <button className="popup__close" type="button" onClick={onClose} />
//         <form className="popup__form" name={name}>
//           <h2 className="popup__title">{title}</h2>
//           {children}
//           <button className="popup__save popup__save_disabled" type="submit">
//             {buttonText || "Сохранить"}
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default PopupWithForm