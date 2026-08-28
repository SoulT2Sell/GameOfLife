# GameOfLife
The Game of Life, also known as Conway's Game of Life (sometimes abbreviated as CGoL) or simply Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves in discrete time steps called generations. There is no limit to the number of generations (computational resources permitting) nor is there a win condition.

## Rules
The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours (its Moore neighborhood), which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

    1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    2. Any live cell with two or three live neighbours lives on to the next generation.
    3. Any live cell with more than three live neighbours dies, as if by overpopulation.
    4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    
I wrote the **GameOfLife** with Typescript/Javascript and the html/css. 

## An Example of GameOfLife
![GameOfLife](game-of-life-loop-cropped.gif)

[**wikipedia link for more information**](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
