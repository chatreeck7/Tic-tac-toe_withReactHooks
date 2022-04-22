import React from "react";
import Square from "./Square";

function Board({squares, onClick}) { //parent Component
    // const squares = useContext(squaresContext);
    // const onClick = useContext(onClickContext);
    function check(i){
        if((i+1)% 3 == 0){
          return <br></br> 
        }
    }
    return <div className="board">
        {squares.map((square,i) => (
          check(i),
           <Square 
           key={i}
           value={square}
           onClick={()=> onClick(i)}
           />
        ))}
          </div>
}

export default Board;