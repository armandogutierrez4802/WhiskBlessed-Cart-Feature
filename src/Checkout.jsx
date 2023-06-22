// import React from 'react';
// import emailjs from 'emailjs-com';

// =========== Checkout Component ===========
const Checkout = ({ updatePage, pickupTimes, paymentMethods }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    updatePage('confirmation');
    console.log(e.target);
    console.log('Form submitted!');
  };
  return (
    <div className="Checkout container">
      <button
        type="button"
        className="back-btn bg-color-btn"
        onClick={() => {
          updatePage('cart');
        }}
      >
        {'←'}
      </button>{' '}
      <br />
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="personal-info">
          <input type="text" name="first" placeholder="First Name" /> <br />
          <input type="text" name="last" placeholder="Last Name" /> <br />
          <input type="text" name="email" placeholder="Email" /> <br />
          <input type="text" name="phone" placeholder="Phone #" /> <br />
        </div>
        <div className="pickup-info">
          <label>Preferred pickup date?</label> <br />
          <input
            type="text"
            name="pickup-date"
            placeholder="Ex. Saturday April 15"
          />{' '}
          <br />
          <label>Preferred pickup time?</label> <br />
          <select name="pickup-time" id="time">
            {pickupTimes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.time}
              </option>
            ))}
          </select>
          <br />
          <label>Prefered method of payment?</label> <br />
          <select name="payment" id="payment">
            {paymentMethods.map((option) => (
              <option key={option.value} value={option.value}>
                {option.method}
              </option>
            ))}
          </select>
        </div>
        {/* <input type="checkbox" /> */}
        <label className="checkbox-label"> 
        <input type="checkbox" />
          {' '}
          I have read the Terms & Conditions on the home page
        </label>
        <br />
        {/* <input type="checkbox" /> */}
        <label className="checkbox-label">
        <input type="checkbox" />
          {' '}
          I understand that all orders are subject to Product availability and
          the availability of Personnel to perform the Services
        </label>
        <br />
        <br />
        <button type="submit" className="bg-color-btn">
          Submit Order Request →
        </button>
      </form>
    </div>
  );
};

export default Checkout;
