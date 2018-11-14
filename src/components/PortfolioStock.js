import React, {Fragment} from 'react'

const Stock = (props) => {

const { stock } = props;
  return (
  <Fragment>
    <li class="list-group-item">
      <h4>Tickr: {stock.ticker}</h4>
      <h5>Price: {stock.price}</h5>
    </li>
  </Fragment>
)
};

export default Stock
