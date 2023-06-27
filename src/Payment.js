import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";

// import hooks for stripe payment
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  //   these states is used to Enable and Disabled and show Error message if it occure
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  // these states is for processing and disabling the buttons
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [clientSecret, SetClientSecret] = useState(true);

  //   hooks used for stripe payment
  const stripe = useStripe();
  const elements = useElements();

  // generate the special stripe secret which allows us to charge a customer
  // whenawer the basket changes it would make this request and it would update the strip secret which allows us to charge the customer  correct amount
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects the total in a currencies subunits like 1 dollar = 100 cents
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });

      SetClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("The secret is >>> ", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confimation

        db
          .collection("users")
          .doc(user?.uid)
          .collection('orders')
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
          })

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("/orders");
      });
  };

  const handleChange = (event) => {
    //Listen for the changes in the cardElement
    // and display any error as the customer types theri cards details

    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items </Link>)
        </h1>

        {/* payment section - delivery address */}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            <p>hs#703 F10/4 Sector</p>
            <p>Islamabad, Capital</p>
          </div>
        </div>

        {/* Payment section - Review items */}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and delivery</h3>
          </div>
          <div className="payment__items">
            {/* All the porjects are gona show here which user address  */}

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

        {/* Payment section - Payment menthod */}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">
            {/* strip method will got here */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total : {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Show Any types of Error related to payment  */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
