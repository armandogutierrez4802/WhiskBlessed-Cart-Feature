const Cart = ({
  cartItems,
  updatePage,
  updateQty,
  specialRequests,
  updateSpecialRequests,
}) => {
  // Helper Function
  const getTotal = () => {
    let total = 0;
    for (let cartItem of cartItems) {
      total += cartItem.item.price * cartItem.qty;
      for (let option of cartItem.options) {
        total += option.choice.extraCharge * cartItem.qty;
      }
    }
    return total;
  };

  return (
    <div className="Cart container">
      <button
        type="button"
        className="back-btn bg-color-btn"
        onClick={() => updatePage('menu')}
      >
        {'←'}
      </button>
      <h2>Cart</h2>
      {cartItems.map((cartItem) => (
        <div
          key={cartItem.id}
          style={{
            // margin: '10px 0',
            padding: '10px',
            borderBottom: '1px solid grey',
          }}
        >
          <div key={cartItem.item.title}>
            {cartItem.item.title} (${cartItem.item.price})
          </div>
          {cartItem.options.map((option) => (
            <div key={option.id}>
              {option.optionGroupName}: {option.choice.title}{' '}
              {option.choice.extraCharge > 0
                ? `(+$${option.choice.extraCharge})`
                : ''}
            </div>
          ))}
          <button
            type="button"
            className="qty-btn"
            onClick={() => updateQty(cartItem.id, '-')}
          >
            -
          </button>
          <span> {cartItem.qty} </span>
          <button
            type="button"
            className="qty-btn"
            onClick={() => updateQty(cartItem.id, '+')}
          >
            +
          </button>
        </div>
      ))}
      {cartItems.length ? '' : <p>(Cart is empty)</p>}
      <h3>
        Estimated Total:
        <span>${getTotal()}</span>
      </h3>
      <label>Special Requests:</label> <br />
      <textarea
        onChange={(e) => updateSpecialRequests(e.target.value)}
        defaultValue={`${specialRequests}`}
        name="special-requests"
        id=""
        rows="5"
      ></textarea>{' '}
      {/* <br /> */}
      <br />
      <ul>
        <li>Cakes are 3 layers unless otherwise requested</li>
        <li>Prices for fillings may vary</li>
        <li>Prices do NOT include added decor</li>
      </ul>
      <br />
      <button
        type="button"
        className="bg-color-btn"
        onClick={() => updatePage('checkout')}
      >
        Checkout →
      </button>
    </div>
  );
};

export default Cart;
