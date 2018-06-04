import React, { Component } from 'react';

class FilterString extends Component {

constructor(){
  super();
  
  this.state= {
    food: [
      "Chocolate","Peanut Butter","Cake","Donut","Pasta","Sushi"
    ],
  userInput:"",
  filteredArray:[]
};
}


handleChange(value) {
 this.setState({ userInput: value });
}

filterFood(userInput) {
 var food = this.state.food;
 var filteredFood =[];

 for(var i=0; i<food.length; i++) {
  if(food[i].includes(userInput)){
  filteredFood.push(food[i]);
  }
}
this.setState({ filteredFood: filteredFood})
}



render() {
  return (
    <div className="puzzleBox filterStringPB">
      <h4> Filter String </h4>
      <span className="puzzleText"> Food: 
      { JSON.stringify(this.state.food, null, 10) } </span>
      <input className="inputLine" onChange={ (e) => 
        this.handleChange(e.target.value) }></input>
      <button className="confirmationButton" onClick={ () => 
        this.filterFood(this.state.userInput) }> Filter </button>
      <span className="resultsBox filterStringRB"> Filtered Food: 
      { JSON.stringify(this.state.filteredFood, null, 10) } </span>
    </div>
  )
}
}

export default FilterString;