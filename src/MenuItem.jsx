import { popularOptions } from './constants';

const MenuItem = ({
  selectedItems,
  updatePage,
  removeItem,
  handleOptionSelected,
  handleAddToCart,
  isItemAdded,
}) => {
  const handleXbutton = () => {
    updatePage('menu');
    removeItem(selectedItems[0]); //There is only ever one item selected (new way)
  };
  return (
    <div className="MenuItem">
      {!isItemAdded && (
        <div className="expanded-item">
          <button
            type="button"
            className="back-btn"
            onClick={() => handleXbutton()}
          >
            X
          </button>
          <h2>
            {selectedItems[0].title} {` ($${selectedItems[0].price})`}
          </h2>
          <div>
            {selectedItems[0].options.map((optionGroup) => (
              <div key={optionGroup.name}>
                <p className="option-group-name">{optionGroup.name}</p>
                {optionGroup.choices.map((choice) => (
                  <label
                    key={choice.title}
                    style={{ display: 'block', marginBottom: '10px' }}
                  >
                    <input
                      type="radio"
                      name={`${optionGroup.name}`}
                      value={choice.title}
                      onChange={
                        () =>
                          handleOptionSelected(
                            // item,
                            selectedItems[0],
                            optionGroup,
                            choice
                          ) // choice as in 6" or 8"
                      }
                    />{' '}
                    {choice.title}{' '}
                    {popularOptions.includes(choice.title) ? ' *' : ''}{' '}
                    {choice.extraCharge > 0 ? `(+$${choice.extraCharge})` : ''}
                  </label>
                ))}
              </div>
            ))}
          </div>
          <button
            type="button"
            className="add-to-cart-btn"
            onClick={() => handleAddToCart()}
          >
            Add to Cart
          </button>
        </div>
      )}
      {isItemAdded && <h2>Item added to cart!</h2>}
    </div>
  );
};

export default MenuItem;
