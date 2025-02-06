import React, { useState } from 'react';
import Status from './Status';

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');

    const handleClick = (index) => {
        if (board[index]) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;

        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };

    return (
        <div className="game-container">
            <div className="board">
                {board.map((square, index) => (
                    <div className="square" key={index} onClick={() => handleClick(index)}>
                        {square}
                    </div>
                ))}
            </div>
            <Status currentPlayer={currentPlayer} /> 
        </div>
    );
};

export default Board;
