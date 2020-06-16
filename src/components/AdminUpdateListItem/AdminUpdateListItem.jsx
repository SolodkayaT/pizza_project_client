import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./adminUpdateListItem.module.css";
import Axios from "axios";

export const AdminUpdateListItem = ({ productForEdit }) => {
  const [confirmMassage, setConfirmMassage] = useState("");
  const [image, setImage] = useState(productForEdit.product.images[0]);
  const [name, setName] = useState(productForEdit.product.name);
  const [price, setPrice] = useState(productForEdit.product.price);
  const [description, setDescription] = useState(
    productForEdit.product.description
  );

  const handleForm = (ev) => {
    ev.preventDefault();
    Axios.get(
      `https://evening-caverns-34846.herokuapp.com/products/${productForEdit.product._id}`,
      {}
    )
      .then(() => setConfirmMassage("Редактирование проведено"))
      .catch((error) => {
        console.log(error);
        setConfirmMassage("Ошибка");
      });
  };
  return (
    <div className={style.editCard}>
      <img
        src="http://ссылки.in.ua/sitepictures/kartinka.jpg"
        alt={productForEdit.product.closeUpImages}
        className={style.image}
      />
      <form onSubmit={handleForm} className={style.editForm}>
        <input
          type="text"
          name="image"
          value={image}
          onChange={(ev) => setImage(ev.target.value)}
          className={style.editForm__input}
        />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          className={style.editForm__input}
        />
        <input
          type="text"
          name="price"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
          className={style.editForm__input}
        />
        <textarea
          name="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
          className={style.editForm__text}
        ></textarea>
        <button type="submit" className={style.editForm__btnSubmit}>
          Edit
        </button>
      </form>
      {confirmMassage && (
        <div className={style.confirmation}>
          <div className={style.confirmation__form}>
            <p className={style.confirmation__formText}>{confirmMassage}</p>
            <Link to="#" className={style.confirmation__formBtnLink}>
              <button type="button" className={style.confirmation__formBtn}>
                Вернутся на предыдущую страницу
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
