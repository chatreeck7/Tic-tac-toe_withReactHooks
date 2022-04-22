import React, { useState } from "react";
import { calculateWinner } from "./calc-winner.js";
import Board from "./Board.js";
//Hook vers.
function Game(){

    const[XNext, setXNext] = useState(true)
    const[step, setStep] = useState(0)
    const[history, setHistory] = useState([Array(9).fill(null)])

    const winner = calculateWinner(history[step]);
   
    function jumpTo(step){
        setStep(step);
        setXNext((step%2) === 0);
    }
    function handleClick(i){
      //consider at from beginning not after that point
        const our_history = history.slice(0, step+1);
        const current = our_history[step];
        const squares = [...current];
        console.log(squares)
        //return if won or occupied
        if(winner || squares[i]){
            return;
        }
        //if the game is not over , select square
        squares[i] = XNext ? 'X':'O';
        setHistory( [...our_history,squares])
        setStep(our_history.length);
        setXNext(!XNext);
    }
    
    function renderMoves(){
        return history.map((_step,move)=> {
            const destination = move ? `Go to move #${move}` : "Go to Start";
            return (
              <li key={move}>
                <button onClick={() => jumpTo(move)}>{destination}</button>
              </li>
            );
        });
    }
    
    return (
      <div className='game'>
        <div className='game-board'>
          {/* Can provide every data in this code */}
          <h1>React Tic Tac Toe - With Hooks</h1>
          {/* <squaresContext.Provider value={current}>
              <Board/>
          </squaresContext.Provider>
          <onClickContext.Provider value={(i) => handleClick(i)}>
              <Board/>
          </onClickContext.Provider> */}
            <Board squares={history[step]} onClick={(i)=> handleClick(i)}/>
            <div className="info-wrapper">
              <div>
                <h3> History </h3>
                {renderMoves()}
              </div>
              <h3>{winner ? "Winner: " + winner : "Next Player: " + (XNext ? 'X':'O')}</h3>
            </div>
        </div>
      </div>
    );
}

export default Game;
// class Game extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { 
//         history: [{
//           squares: Array(9).fill(null),
//         }],
//         XIsNext: true,
//         stepNumber: 0,
//       };
//     }
//     jumpTo(step){
//       this.setState({
//         stepNumber: step,
//         XIsNext: (step % 2) === 0,
//       });
//     }
//     handleClick(i){
//       const history = this.state.history.slice(0, this.state.stepNumber+1);
//       const current = history[history.length-1];
//       const squares = current.squares.slice();
//       //check if that square of square is used to click or the square is match the win format
//       if(calculateWinner(squares) || squares[i]){
//         return;
//       }
//       squares[i] = this.state.XIsNext ? 'X':'O';
//       this.setState({
//         history: history.concat([{
//           squares: squares,
//         }]),
//         stepNumber: history.length,
//         XIsNext: !this.state.XIsNext,
//       });
//     }
//     render(){
//       const history = this.state.history;
//       const current = history[this.state.stepNumber];
//       const winner = calculateWinner(current.squares);
//       const moves = history.map((step, move) => {
//         const desc = move ? 
//         'Go to move #' + move :
//         'Go to game start';
//         return (
//           <li key={move}>
//             <button onClick={() => this.jumpTo(move)}>
//               {desc}
//             </button>
//           </li>
//         );
//       });
//       let status;
//       if(winner){
//         status = 'Winner: ' + winner;
//       } else {
//         status = "Next player: "+ (this.state.XIsNext ? 'X':'O');
//       }
//       return (
//         <div className='game'>
//           <div className='game-board'>
//             <Board
//               squares= {current.squares}
//               onClick= {(i) => this.handleClick(i)}
//             />
//           </div>
//           <div className='game-info'>
//             <div>{status}</div>
//             <ol>{moves}</ol>
//           </div>
//         </div>
//       );
//     }
//   }