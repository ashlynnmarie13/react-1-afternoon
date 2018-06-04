import React, { Component } from 'react';

class FilterObject extends Component {

  constructor(){
    super();

    this.state= {
    drinks: [  
      {
      vodka:'Titos',
      whiskey:'Makers',
      tequila:'Jose Cuervo'
  },
  {
      soda:'coke',
      coffee:'Corvus Coffee',
      tea:'green tea'
  },
  {
      water:'Evian',
      kombucha:'Rowdy Mermaid',
      soup:'bone broth'
  },
],

  userInput:'',
  filteredDrinks:[]
  }
  }

  handleChange(val) {
    this.setState({ userInput:val });
  }

  filterDrinks(prop) {
    var drinks = this.state.drinks;
    var filteredDrinks = [];

   for(var i=0; i<drinks.length; i++) {
     if (drinks[i].hasOwnProperty(prop)) {
       filteredDrinks.push(drinks[i]);
     }
   }
   this.setState({ filteredDrinks: filteredDrinks });
  }


  render() {
return (
  <div className="puzzleBox filterObjectPB">
    <h4> Filter Object </h4>
    <span className="puzzleText"> Original: 
    { JSON.stringify(this.state.drinks, null, 10) } </span>
    <input className="inputLine" onChange={ (e) => 
      this.handleChange(e.target.value) }></input>
    <button className="confirmationButton" onClick={ () => 
      this.filterDrinks(this.state.userInput) }> Filter </button>
    <span className="resultsBox filterObjectRB"> Filtered: 
    { JSON.stringify(this.state.filteredDrinks, null, 10) } </span>
  </div>
)
}
}

export default FilterObject;