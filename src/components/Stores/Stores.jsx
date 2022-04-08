import React from "react";
import "./Stores.css";

const Stores = () => {
  return (
    <div className="stores-a">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SOd6Q5vG5hgC1xvoyFwimf1Twk3qKU9umHjMIQA5UIWad4TIaAJcdk3PQMZ7VDkgB1U&usqp=CAU"
          alt=""
        />
        <h3 className="stores-text">CARTIER in LONDON</h3>
      </div>
      <div>
        <img
          style={{ height: 260, width: 200, objectFit: "cover" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ334XTx9LVmm1mxBfW6bcTgRlXaHBqq4nNMQ&usqp=CAU"
          alt=""
        />
        <h3 className="stores-text">CARTIER in PARIS</h3>
      </div>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzypwZp6DjR1MtifYgKKp5bMyC_lVuSnf6fFnHC3aqA84pYeLtxW81qZuT3VX-3ox2Hm0&usqp=CAU"
          alt=""
        />
        <h3 className="stores-text">CARTIER in ROME</h3>
      </div>

      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQur587o1sQZRwqBteCiNnHz2FRiWwTo_DQmw&usqp=CAU"
          alt=""
        />
        <h3 className="stores-text">CARTIER in NEW YORK</h3>
      </div>

      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SOd6Q5vG5hgC1xvoyFwimf1Twk3qKU9umHjMIQA5UIWad4TIaAJcdk3PQMZ7VDkgB1U&usqp=CAU"
          alt=""
        />
        <h3 className="stores-text">CARTIER in BERLIN</h3>
      </div>
    </div>
  );
};

export default Stores;
