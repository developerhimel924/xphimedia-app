import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";
import visaImg from "./Assets/cardImg/visa.png";
import mastercardImg from "./Assets/cardImg/mastercard.png";
import creditCardImg from "./Assets/cardImg/credit-card.png";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);
  console.log("👱", user);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const [userAddrInput, setuserAddrInput] = useState("");
  const handleAddrInput = (event) => {
    setuserAddrInput(event.target.value);
  };
  const [userAppSuiteInput, setuserAppSuiteInput] = useState("");
  const handleAppSuiteInput = (event) => {
    setuserAppSuiteInput(event.target.value);
  };
  const [userZipcodeInput, setuserZipcodeInput] = useState("");
  const handleZipcodeInput = (event) => {
    setuserZipcodeInput(event.target.value);
  };
  const [userCityInput, setuserCityInput] = useState("");
  const handleCityInput = (event) => {
    setuserCityInput(event.target.value);
  };
  const [userfullNameInput, setuserfullNameInput] = useState("");
  const handleuserfullNameInput = (event) => {
    setuserfullNameInput(event.target.value);
  };
  const [handaleselectCountry, sethandaleselectCountry] = useState("");
  const handaleselectCountryinput = (event) => {
    sethandaleselectCountry(event.target.value);
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <center>
          <p>{user?.email}</p>
        </center>
        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items</h3>
            <hr />
          </div>
          <div className="payment__items">
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
        {/* Payment section - delivery address */}
        <div className="paymentSection__wrapper">
          <div className="shipping__Address__section">
            <h3 class="ShippingAddrTitle">Enter Your shipping address</h3>
            <h5 className="shippingAddr__Tittle">Country</h5>
            <div class="countrySection">
              <select
                onClick={handaleselectCountryinput}
                class="country__Select"
              >
                <option value="" selected>
                  Select your country....
                </option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Denmark">Denmark</option>
              </select>
            </div>
            <div className="payment__address__info">
              <div class="fullname__info">
                <h5 className="shippingAddr__Tittle">Full Name</h5>
                <input
                  type="text"
                  onChange={handleuserfullNameInput}
                  placeholder="Full Name...."
                />
              </div>
              <div className="shippingAddr__flex">
                <div class="streetInfo">
                  <h5 className="shippingAddr__Tittle">Street</h5>
                  <input
                    type="text"
                    onChange={handleAddrInput}
                    placeholder="Street...."
                  />
                </div>
                <div class="AppSuite">
                  <h5 className="shippingAddr__Tittle">App Suite or Other</h5>
                  <input
                    type="text"
                    onChange={handleAppSuiteInput}
                    placeholder="App/Suite...."
                  />
                </div>
              </div>
              <div className="shippingAddr__flex">
                <div class="ZipCode">
                  <h5 className="shippingAddr__Tittle">Zip code</h5>
                  <input
                    type="number"
                    onChange={handleZipcodeInput}
                    placeholder="Zip code...."
                  />
                </div>
                <div class="City">
                  <h5 className="shippingAddr__Tittle">City</h5>
                  <input
                    type="text"
                    onChange={handleCityInput}
                    placeholder="City...."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment section - Payment method */}
          <div className="payment__section paymentcard__section">
            <div className="payment__title">
              <h3 className="paymentMethod__title">Payment Method</h3>
            </div>
            <div className="showShipping__addr">
              <div className="paymentMethod__wrapper">
                <h5 className="Payment__method__details">Shipping Address</h5>
                <div>
                  <strong>Country:</strong>
                  <span>&nbsp;&nbsp;{handaleselectCountry}</span>
                </div>
                <div>
                  <strong>Full Name:</strong>
                  <span>&nbsp;&nbsp;{userfullNameInput}</span>
                </div>
                <div>
                  <strong>Address:</strong>
                  <span>
                    &nbsp;&nbsp;
                    {userAddrInput},&nbsp;
                    {userAppSuiteInput},&nbsp;
                    {userZipcodeInput},&nbsp;
                    {userCityInput}
                  </span>
                </div>
              </div>
            </div>
            <div className="payment__details">
              {/* Stripe magic will go */}

              <form onSubmit={handleSubmit}>
                <div className="paymentMethod__wrapper">
                  <h5 className="Payment__method__details">Card Details</h5>
                  <CardElement onChange={handleChange} />
                  <div className="cardImg__div">
                    <img src={visaImg} alt="Visa Card" />
                    <img src={mastercardImg} alt="Master Card" />
                    <img src={creditCardImg} alt="Credit Card" />
                  </div>
                </div>

                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => (
                      <h5>Order Total: &nbsp;&nbsp;<span>{value}</span></h5>
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

                {/* Errors */}
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
