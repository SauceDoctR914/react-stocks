import React, { Component, Fragment } from 'react';

class SearchBar extends Component {



  // state = {
  //   searchBar: ""
  // }

render(){
  return (
    <Fragment>
      <strong>Search for Stocks!</strong>
      <input type="text" value={this.props.searchBar} onChange={this.props.searchStocks}/>
      <br/>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={this.props.sortBy === "Alphabetically"} onChange={this.props.alphaCompare}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={this.props.sortBy === "Price"} onChange={this.props.alphaCompare}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>

    </Fragment>
  );
}
}


export default SearchBar;
