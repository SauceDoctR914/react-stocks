import React, { Component, Fragment } from 'react';
import Stock from '../components/Stock'
import SearchBar from '../components/SearchBar'

class StockContainer extends Component {

  allStocks(){
    return this.props.myStocks.map(stockObj => {
       return <Stock key={stockObj.id} stock={stockObj} addStock={this.props.addStock} />
     })
   }
// } <div>{this.allStocks()}</div>
  render() {

    return(
      <Fragment>
        <h2>Stocks</h2>
        {this.allStocks()}
        
      </Fragment>
    );
  }

}

export default StockContainer;
