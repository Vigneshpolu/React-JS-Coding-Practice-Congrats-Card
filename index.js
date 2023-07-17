const element = (
  // Write your code here.
  <div className="container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="card_image"
      />
      <h1 className="card_heading">Kiran V</h1>
      <p className="card_para">
        Vishnu institute Of Computer Education And Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="card_image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
