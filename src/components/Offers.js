import React, { Component, Fragment } from "react";
import { storeProducts } from "../data";

class Offers extends Component {
  render() {
    let numRandom = Math.floor(Math.random() * (8 - 0)) + 0;
    let randomCarImage = storeProducts[numRandom].img;
    let randomCarTitle = storeProducts[numRandom].title;
    let randomCarPrice = storeProducts[numRandom].price;
    console.log(numRandom);

    return (
      <Fragment>
        <div className="container">
          <h1 className="text-center text-title-2 mt-3" style={{letterSpacing: '3px'}}>
            looking for some good offers?
          </h1>
          <div className="row mt-4">
            <div className="col-md-6 col-sm-12">
              <img src={randomCarImage} alt="image" style={{ width: "90%" }} />
            </div>
            <div className="col-md-6 col-sm-12 my-auto">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{randomCarTitle}</h1>
              </div>
              <h2>
                This vehicle is in offer, it just costs{" "}
                <span className="text-blue font-weight-bold">$ {randomCarPrice}</span>, Why don't rent this car?
              </h2>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Offers;
