import React, { Component } from 'react';

class EvenAndOdd extends Component {
  
    constructor () {
        super();

        this.state = {
        evenArray:[],
        oddArray:[],
        userInput:""
        }
    }
  handleChange(val) {
      this.setState({ userInput:val });
  }

  assignEvenAndOdds(userInput) {
      var arr = userInput.split(',');
      var allEven = [];
      var allOdd = [];
    for (var i=0;i<=arr.length; i++) {
        if(arr[i]%2===0) {
            allEven.push( parseInt(arr[i], 10)); 
         } else {
            allOdd.push( parseInt(arr[i], 10));
            }
        }
    this.setState({ evenArray: allEven, oddArray: allOdd});
  }


render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input className="inputLine" onChange={ (e) => 
            this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => 
            { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
        <span className="resultsBox"> Evens: {
             JSON.stringify(this.state.evenArray) } </span>
        <span className="resultsBox"> Odds: 
        { JSON.stringify(this.state.oddArray) } </span>
      </div>
    )
  }
}

export default EvenAndOdd;