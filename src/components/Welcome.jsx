const Welcome = ({ onGetPost }) => {
  return (
    <div className="welcome-container">
      <h1>No items available right now</h1>
      <p>Please fetch items from the server to get started.</p>
      <button onClick={onGetPost} className="welcome-btn">
        Fetch Items
      </button>
    </div>
  );
};

export default Welcome;
