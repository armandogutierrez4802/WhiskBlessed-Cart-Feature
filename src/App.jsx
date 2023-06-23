import { useState } from 'react';
import { menu, pickupTimes, paymentMethods } from './constants.js';
import Start from './Start.jsx';
import Menu from './Menu.jsx';
import MenuItem from './MenuItem.jsx';
import Cart from './Cart.jsx';
import Checkout from './Checkout.jsx';
import Confirmation from './Confirmation.jsx';
import './App.css';

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [specialRequests, setSpecialRequests] = useState('');
  const [estimatedTotal, setEstimatedTotal] = useState(0);

  const [page, setPage] = useState('start');

  // Handler Functions
  const updatePage = (page) => {
    setPage(page);
    console.log(cartItems);
  };

  const updateSpecialRequests = (request) => {
    setSpecialRequests(request);
  };

  const handleItemSelected = (item) => {
    if (selectedItems.includes(item)) {
      removeItem(item);
      updatePage('menu');
    } else {
      setSelectedItems([...selectedItems, item]);
      updatePage('item');
    }
  };

  const handleOptionSelected = (item, optionGroup, choice) => {
    const newOption = {
      itemId: item.id,
      optionGroupName: optionGroup.name,
      choice: choice,
    };
    const previousOptions = selectedOptions.filter(
      (option) =>
        item.id !== option.itemId || optionGroup.name !== option.optionGroupName
    );
    setSelectedOptions([...previousOptions, newOption]);
  };

  const handleAddToCart = () => {
    // Create cartId for item
    let cartId = String(selectedItems[0].id);
    selectedOptions.map((option) => {
      // cartId += `-${option.optionGroupName}-${option.choiceValue}`;
      cartId += `-${option.optionGroupName}-${option.choice.value}`;
    });

    //Assume item is not in the cart, so it's new qty = 1
    let itemInCart = false;
    let newQty = 1;

    // Update itemInCart & newQty if the item actually does exist
    for (let cartItem of cartItems) {
      if (cartItem.id === cartId) {
        itemInCart = true;
        newQty = cartItem.qty + 1; // Update newQty if item does exist
      }
    }

    // Create newCartItem now that we have the correct qty
    const newCartItem = {
      id: cartId,
      item: selectedItems[0],
      options: selectedOptions,
      qty: newQty,
    };

    if (itemInCart) {
      // Replace the old item with the new item with updated qty
      let updatedCart = cartItems.filter((cartItem) => cartItem.id !== cartId);
      setCartItems([...updatedCart, newCartItem]);
    } else {
      // Add the new item with existing
      setCartItems([...cartItems, newCartItem]);
    }

    // Tell user that item was successfully added to cart
    setIsItemAdded(true);
    setTimeout(() => {
      setIsItemAdded(false);
      updatePage('menu');
    }, 1500);

    //Remove item and options
    removeItem(selectedItems[0]);
  };

  // Helper Functions
  const removeItem = (item) => {
    //Remove item
    setSelectedItems(
      selectedItems.filter((selectedItem) => selectedItem !== item)
    );
    //Remove options
    setSelectedOptions(
      selectedOptions.filter((option) => option.itemId !== item.id)
    );
  };

  const updateQty = (cartItemId, operation) => {
    const item = cartItems.filter((cartItem) => cartItem.id === cartItemId);

    if (item[0].qty === 1 && operation === '-') {
      //WHY IS item.qty ===  1 NEVER TRUE?????
      const updatedCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== cartItemId
      );
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.map((cartItem) => {
        let newQty;
        if (cartItem.id === cartItemId) {
          if (operation === '-') {
            newQty = cartItem.qty - 1;
          } else if (operation === '+') {
            newQty = cartItem.qty + 1;
          }
          // console.log({ ...cartItem, qty: newQty });
          return { ...cartItem, qty: newQty };
        } else {
          return cartItem;
        }
      });
      setCartItems(updatedCartItems);
    }
  };

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

  //Code
  let formComponent;
  if (page === 'start') {
    formComponent = <Start updatePage={updatePage} />;
  } else if (page === 'menu') {
    let numItems = 0;
    for (let item of cartItems) {
      numItems += item.qty;
    }
    formComponent = (
      <Menu
        menu={menu}
        selectedItems={selectedItems}
        handleItemSelected={handleItemSelected}
        updatePage={updatePage}
        numItems={numItems}
      />
    );
  } else if (page === 'item') {
    formComponent = (
      <MenuItem
        selectedItems={selectedItems}
        updatePage={updatePage}
        removeItem={removeItem}
        handleOptionSelected={handleOptionSelected}
        handleAddToCart={handleAddToCart}
        isItemAdded={isItemAdded}
      />
    );
  } else if (page === 'cart') {
    formComponent = (
      <Cart
        cartItems={cartItems}
        updatePage={updatePage}
        updateQty={updateQty}
        specialRequests={specialRequests}
        updateSpecialRequests={updateSpecialRequests}
        getTotal={getTotal}
      />
    );
  } else if (page === 'checkout') {
    formComponent = (
      <Checkout
        updatePage={updatePage}
        pickupTimes={pickupTimes}
        paymentMethods={paymentMethods}
        cartItems={cartItems}
        estimatedTotal={estimatedTotal}
        getTotal={getTotal}
      />
    );
  } else if (page === 'confirmation') {
    formComponent = <Confirmation />;
  }

  return (
    <>
      {/* <form onSubmit={submitForm}>{formComponent}</form> */}
      <div>{formComponent}</div>
    </>
  );
}

export default App;
