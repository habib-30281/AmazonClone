import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <FlipMove duration={250}
  easing="linear">

   
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
          alt="Amazon Add section"
        />

        <div>
          <h4 className="checkout__title">
            Hello, {!user ? "Guest" : user.email}
          </h4>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        {/* show total number of items and calculate the total price */}
        <Subtotal />
      </div>
    </div>
    </FlipMove>
  );
}

export default Checkout;

{
  /* 
            {/* BasketItems */
}
{
  /* BasketItems */
}
{
  /* BasketItems */
}
{
  /* BasketItems */
}
{
  /* BasketItems */
}

//    </div> */}
