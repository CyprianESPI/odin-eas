let Squares = []
class Square {
    clickCount = 0;
    shadeIndex = 0;
    shade = SHADES[0];
}
const DEBUG = false;

const SHADES = ["#ffffff", "#bfbfbf", "#7f7f7f", "#404040", "#000000"];

main();

function main() {
    fillBoard(16 * 16)
}

function createSquare() {
    Squares.push(new Square());
    var div = document.createElement("div");
    div.style.margin = "1px";
    div.style.border = "2px solid black";
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.background = "white";
    div.id = (Squares.length - 1).toString();
    div.onmouseenter = squareEnter;
    div.onmouseleave = squareLeave;
    return div;
}

function fillBoard(size) {
    Squares = [];
    const board = document.getElementById("board");
    for (let index = 0; index < size; index++) {
        const sq = createSquare();
        board.appendChild(sq);
        if (DEBUG)
            console.log(index, sq);
    }
}

function increaseShade(event) {
    // Update Square object
    const index = parseInt(event.target.id);
    Squares[index].clickCount++;
    Squares[index].shadeIndex = Math.min(Squares[index].shadeIndex + 1, SHADES.length - 1);
    Squares[index].shade = SHADES[Squares[index].shadeIndex];

    // Update div object
    const square = document.getElementById(event.target.id);
    square.style.background = Squares[index].shade;
    if (DEBUG) {
        console.log("clicked", event);
        console.log("squareClick: ", index, Squares[index]);
        console.log(square);
    }
}

function squareEnter(event) {
    increaseShade(event);
}

function squareLeave(event) {
    // Update div object
    const square = document.getElementById(event.target.id);
    const index = parseInt(event.target.id);
    square.style.background = Squares[index].shade;
}