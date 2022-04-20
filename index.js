const element = (
  // Write your code here.
  <div className="main-container">
    <h1 className="heading">Congratulations</h1>
    <div className="person-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="person-image"
      />
      <h1 className="person-name">Kiran V</h1>
      <p className="college-details">Vishnu Institute of Technology</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
