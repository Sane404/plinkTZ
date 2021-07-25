import React, { useState } from "react";
import "./Final.css";
const Final = ({ user_data, product, stateChanger, stateChanger_two }) => {
  const { name, price, HDD, RAM, SKU } = product.item;
  const { fullname, email, country, city, address } = user_data;
  const [finalFadeOut, setFinalFadeOut] = useState(false);
  const reset = () => {
    setFinalFadeOut(true);
    setTimeout(() => {
      stateChanger(true);
      stateChanger_two(false);
    }, 500);
  };
  return (
    <div className={finalFadeOut ? "final fade" : "final"}>
      <div className="wrap">
        <div className="item">
          Your order:
          <div className="name">
            <div className="sku">{SKU}</div>
            <div className="name">{name}</div>
            <div className="ram">{RAM} GB RAM</div>
            <div className="hdd">{HDD} GB HDD</div>
            <div className="price">{price} $</div>
          </div>
        </div>
        <div className="user">
          Your user credentials:
          <div className="fullname">{fullname}</div>
          <div className="email">{email}</div>
          <div className="location">
            {city},{country}
          </div>
          <div className="address">{address}</div>
        </div>
      </div>
      <button onClick={reset}>Try Again ?</button>
    </div>
  );
};

export default Final;
