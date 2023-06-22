// =========== Start Component ===========
const Start = ({ updatePage }) => {
  return (
    <div className="Start container">
      <button
        type="button"
        className="bg-color-btn"
        onClick={() => updatePage('menu')}
      >
        Start My Order
      </button>
      {/* <p>Please read the Terms & Conditions on the home page before ordering:)</p> */}
    </div>
  );
};

export default Start;
