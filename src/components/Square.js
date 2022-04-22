import React from "react";

function Square({value,onClick}){ //child Component
    // const square = useContext(boardContext);
    //this line is about css that will represent in each square
    //squares is a class in css file
    return (
      <button 
        className="square"
        onClick={onClick}
      >
        {value} 
        {/* props is a object on the component 
            is how information flows in React apps */}
      </button>
    );
  }

  export default Square;