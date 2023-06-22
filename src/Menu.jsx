import React from 'react';

import { popularItems } from './constants';

const Menu = ({
  menu,
  selectedItems,
  handleItemSelected,
  updatePage,
  numItems,
}) => {
  return (
    <div className="Menu container">
      <h2>Menu</h2>
      <div style={{ marginBottom: '10px' }}>* Customer favorites</div>
      {menu.map((category) => (
        <div className="category-title" key={category.title}>
          <h3>{category.title}</h3>
          {category.items &&
            category.items.map((item) => (
              <div key={item.title} className="menu-item">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item)}
                    onChange={() => handleItemSelected(item)}
                  />{' '}
                  {item.title}
                  {popularItems.includes(item.title) ? ' *' : ''} (${item.price}
                  )
                </label>
              </div>
            ))}
        </div>
      ))}
      <br />
      <button
        type="button"
        id="cart-btn"
        className="bg-color-btn"
        onClick={() => updatePage('cart')}
      >
        Go To Cart <div id="cart-items-length"> {numItems}</div>
      </button>
    </div>
  );
};

export default Menu;
