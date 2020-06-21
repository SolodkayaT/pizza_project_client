import React from "react";
import { useSelector } from "react-redux";
import styles from "./OrderListItem.module.css";
import closeBtn from "../../assets/img/remove_order_item_button.svg";
import { FormattedMessage } from "react-intl";
import { localSelectors } from "../../redux/local";

const OrdersListItem = ({
  name,
  id,
  img,
  ingredients,
  price,
  onIncrementItem,
  onDecrementItem,
  onRemoveItem,
  itemsCount,
  type,
}) => {
  const local = useSelector((state) => localSelectors.getLocal(state));
  const ingredientsList = ingredients
    .map((item) => [item.name[local]])
    .join(", ");
  return (
    <div className={styles.orderItemCard}>
      <img src={img} alt={name} className={styles.itemImg} />
      <button
        type="button"
        className={styles.deleteButton}
        onClick={() => onRemoveItem({ id, type })}
      >
        <img src={closeBtn} alt="delete-btn" />
      </button>
      <div className={styles.contentWrapper}>
        <h5 className={styles.productName}>{name[local]}</h5>
        <p className={styles.ingredientsText}>{ingredientsList}</p>
        <div className={styles.orderDetailsWrapper}>
          <p className={styles.priceText}>
            {price}
            <span className={styles.currencyText}>
              <FormattedMessage id="grn" />
            </span>
          </p>

          <div className={styles.amountContainer}>
            <button
              className={styles.deleteBtn}
              onClick={() => onDecrementItem({ id, type })}
            >
              -
            </button>
            <p className={styles.amountNumber}>{itemsCount}</p>
            <button
              className={[styles.deleteBtn, styles.incrementBtn].join(" ")}
              onClick={() => onIncrementItem({ id, type })}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersListItem;
