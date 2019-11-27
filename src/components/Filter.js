import React, { Component } from "react";
import { storeProducts } from "../data";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      results: []
    };

    //para conectar el estado con el handleChange
    this.handleChange = this.handleChange.bind(this);
    //para conectar el estado con el handleSubmit
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    console.log("se envío alv we");
    let filteredArray = storeProducts.filter(element => {
      return element.company === this.state.search;
    });
    console.log(filteredArray);

    this.setState({
      results: filteredArray
    });

    console.log("el state es", this.state);
  }

  render() {
    return (
      <form>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-10 col-sm-6 my-auto">
              <div className="form-group">
                <h3 className="text-center text-title-2">
                  You can filter cars based on the brand
                </h3>
                <p className="text-muted text-center">
                  You can filter by these brands: TOYOTA, KIA, FORD, SUZUKI, IDK
                </p>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Type to filter"
                  name="search"
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="col-md-2 col-sm-6 my-auto mt-4">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={this.handleSubmit}
              >
                Buscar
              </button>
            </div>
          </div>

          {this.state.results.map(result => {
            return (
                <div className="card mt-5" key="result">
                <img src={result.img} className="card-img-top" alt="car" style={{width: '50%'}} />
                <div className="card-body">
            <h5 className="card-title">{result.title}</h5>
            <p className="card-text">{result.info}</p>
            <h1 className="text-blue">$ {result.price}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </form>
    );
  }
}

export default Filter;
