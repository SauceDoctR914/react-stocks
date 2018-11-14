import React, { Component, Fragment } from 'react';
import PortfolioStock from '../components/PortfolioStock'
import Stock from '../components/Stock'
class PortfolioContainer extends Component {

  render() {
    let portfolioStocks = this.props.myStocks.map(stockObj => <PortfolioStock key={stockObj.id} stock={stockObj} addStock={this.props.addStock}/>)

    return (
      <Fragment>
        <h2>My Portfolio</h2>
        <ul className="list-group">
          {portfolioStocks}
        </ul>
      </Fragment>
    );
  }

}

export default PortfolioContainer;
