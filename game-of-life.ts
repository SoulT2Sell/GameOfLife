function fillTheField(rows: number, cols: number): boolean[][] {

    let createdField:boolean[][] = Array.from(
        {length: rows},
        () => Array(cols).fill(false)
    );

    for(let y = 0; y < rows; y++)
    {
        for(let x = 0; x < cols; x++)
        {
            let rng:number = Math.floor(Math.random() * 20) + 1;
            if(rng <= 10)
                createdField[y][x] = false;
            else
                createdField[y][x] = true;
        }
    }

    return createdField;
}
    
function renderField(field: boolean[][]): void
{
    const game = document.getElementById("game") as HTMLDivElement

    if(!game)
        return;

    game.innerHTML = "";

    for(const row of field)
    {
        for(const value of row)
        {

            const cell = document.createElement("div") as HTMLDivElement

            cell.classList.add("cell")

            if(value)
                cell.classList.add("alive");
            
            game.appendChild(cell)
        }
    }
}

function logic(field: boolean[][], rows: number, cols: number): boolean[][]
{
    let newField: boolean[][] = Array.from(
        {length: rows},
        () => Array(cols).fill(false)
    );

    for(let y = 0; y < rows; y++)
    {
        for(let x = 0; x < cols; x++)
        {
            let neighbors: number = 0;

            for(let dy = -1; dy <= 1; dy++)
            {
                for(let dx = -1; dx <= 1; dx++)
                {
                    if(dy === 0 && dx === 0)
                        continue;

                    const neighborY = (y + dy + rows) % rows;
                    const neighborX = (x + dx + cols) % cols;

                    if(field[neighborY][neighborX])
                        neighbors++;
                }
            }
            
            if(field[y][x])
            {
                newField[y][x] = !(neighbors < 2 || neighbors > 3);
            }
            else
            {
                newField[y][x] = neighbors === 3
            }
        }
    }

    return newField;
}

function Sleep(ms: number): Promise<void>
{
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Main() : Promise<void>
{
    const ROWS: number = 25;
    const COLS: number = 25;
    let myField: boolean[][] = fillTheField(ROWS, COLS);

    while(true)
    {
        renderField(myField);
        myField = logic(myField, ROWS, COLS);
        await Sleep(200);
    }
}

Main();