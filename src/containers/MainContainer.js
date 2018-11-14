import React, { Component, Fragment } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {


state = {
  stocks: [],
  myStocks: [],
  searchBar: "",
  sortBy: ""
}


  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(result => this.setState({
      stocks: result
    })
  )
  }

  addToPortfolio = (stock) => {
    console.log(stock)
    let portfolioArr = [...this.state.myStocks, stock];
    this.setState({
      myStocks: portfolioArr
    },()=> console.log(this.state.myStocks))
  }

  onSearchChange = event => {
    this.setState({
      searchBar: event.target.value
    })
  }

  showStocks = () => {
    if (this.state.searchBar === ""){
      return this.state.stocks
    }else{
      return this.state.stocks.filter(stocks=>
      stocks.name.toLowerCase().includes(this.state.searchBar) || stocks.ticker.toLowerCase().includes(this.state.searchBar) || stocks.name.includes(this.state.searchBar) ||stocks.ticker.includes(this.state.searchBar)
    )}
  }

  compareStock = (event)=> {
    console.log(this.state.sortBy)
  let newArr = [...this.state.stocks]
  if (this.state.sortBy === "Alphabetically") {
    console.log("yo")
    let newStateArr = newArr.sort((a,b) => {return a.name.localeCompare(b.name)})
    return newStateArr
  } else if (this.state.sortBy === "Price") {
    console.log("no")
  return newArr.sort((a,b) => {
    return a.price - b.price
  })
}
}
handleRadio = (event) => this.setState({sortBy: event.target.value})



  // handleInput(){
  //
  // }
  //
  handleRadio= (event) => {
    console.log(event.target.value)
    this.setState({sortBy: event.target.value})
  }
  //
  // handleSelect(){
  //
  // }

  render() {
    // console.log(this.state.stocks.sort(compareStocks))

    return (
      <Fragment>
        <SearchBar searchStocks={this.onSearchChange} searchBar={this.state.searchBar} alphaCompare={this.handleRadio} sortBy={this.state.sortBy}/>

          <div className="row">
            <div className="col-8">

              <StockContainer myStocks={this.showStocks()} addStock={this.addToPortfolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.myStocks}/>

            </div>
          </div>
      </Fragment>
    );
  }

}

export default MainContainer;
