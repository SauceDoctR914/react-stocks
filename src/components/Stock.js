import React,{Fragment} from 'react'

const Stock = (props) => {

const { stock, addStock } = props;


  return (

    <Fragment>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            stock.name//Company Name
          }</h5>
        <p className="card-text">{stock.ticker}:{stock.price}</p>
        <button
        className="btn btn-primary"
        onClick={()=> addStock(stock)}
        >Buy Stock</button>
      </div>
    </div>


  </Fragment>
)
};

export default Stock
