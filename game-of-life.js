"use strict";
function fillTheField(rows, cols) {
    let createdField = Array.from({ length: rows }, () => Array(cols).fill(false));
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let rng = Math.floor(Math.random() * 20) + 1;
            if (rng <= 10)
                createdField[y][x] = false;
            else
                createdField[y][x] = true;
        }
    }
    return createdField;
}
function renderField(field) {
    const game = document.getElementById("game");
    if (!game)
        return;
    game.innerHTML = "";
    for (const row of field) {
        for (const value of row) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            if (value)
                cell.classList.add("alive");
            game.appendChild(cell);
        }
    }
}
function logic(field, rows, cols) {
    let newField = Array.from({ length: rows }, () => Array(cols).fill(false));
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let neighbors = 0;
            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    if (dy === 0 && dx === 0)
                        continue;
                    const neighborY = (y + dy + rows) % rows;
                    const neighborX = (x + dx + cols) % cols;
                    if (field[neighborY][neighborX])
                        neighbors++;
                }
            }
            if (field[y][x]) {
                newField[y][x] = !(neighbors < 2 || neighbors > 3);
            }
            else {
                newField[y][x] = neighbors === 3;
            }
        }
    }
    return newField;
}
function Sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function Main() {
    const ROWS = 25;
    const COLS = 25;
    let myField = fillTheField(ROWS, COLS);
    while (true) {
        renderField(myField);
        myField = logic(myField, ROWS, COLS);
        await Sleep(200);
    }
}
Main();
