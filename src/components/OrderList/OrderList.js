import React, { Component } from "react";
import styles from "./OrderList.module.css";
import OrderListItem from "../OrderListItem/OrderListItem";
import { FormattedMessage } from "react-intl";
// import orderItems from "../../services/orderItems.json";

class orderList extends Component {
  getSum = (userOrderList) => {
    return userOrderList.reduce(function (sum, { itemsCount, productprice }) {
      return sum + itemsCount * productprice;
    }, 0);
  };
  render() {
    const orderItems = this.props.userOrderList;
    const orderListPrice = this.getSum(this.props.userOrderList);
    return (
      <div className={styles.orderList}>
        <h2 className={styles.orderListTitle}>
          <FormattedMessage id="order" />
        </h2>
        <ul>
          {orderItems.map(
            ({ productId, productName, productprice, product, itemsCount }) => (
              <OrderListItem
                key={productId}
                img={product.images}
                name={productName}
                price={productprice}
                ingredients={product.ingredients}
                itemsCount={itemsCount}
                local={this.props.local}
              />
            )
          )}
        </ul>
        <p className={styles.orderListPrice}>
          {orderListPrice || "0"}
          <span className={styles.orderListPriceCurrency}>
            <FormattedMessage id="grn" />
          </span>
        </p>
      </div>
    );
  }
}

export default orderList;
