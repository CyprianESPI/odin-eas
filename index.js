let Squares = []
class Square {
    clickCount = 0;
    shadeIndex = 0;
    shade = SHADES[0];
}

const SHADES = ["#ffffff", "#bfbfbf", "#7f7f7f", "#404040", "#000000"];

main();

function main() {
    fillBoard(16)
}

function createSquare() {
    Squares.push(new Square());
    var div = document.createElement("div");

    div.style.width = "50px"
    div.style.height = "50px";
    div.style.background = "white";
    div.id = (Squares.length - 1).toString();
    div.onclick = squareClick;
    div.onmouseenter = squareEnter;
    div.onmouseleave = squareLeave;
    return div;
}

function fillBoard(size) {
    Squares = [];
    const board = document.getElementById("board");
    for (let index = 0; index < size; index++) {
        const sq = createSquare();
        console.log(index, sq);
        board.appendChild(sq);
    }
}

function squareClick(event) {
    console.log("clicked", event);
    // Update Square object
    const index = parseInt(event.target.id);
    Squares[index].clickCount++;
    Squares[index].shadeIndex = Math.min(Squares[index].shadeIndex + 1, SHADES.length - 1);
    Squares[index].shade = SHADES[Squares[index].shadeIndex];
    console.log("squareClick: ", index, Squares[index]);

    // Update div object
    const square = document.getElementById(event.target.id);
    square.style.background = Squares[index].shade;
    console.log(square);
}

function squareEnter(event) {
    // Update div object
    const square = document.getElementById(event.target.id);
    square.style.background = "blue";
}

function squareLeave(event) {
    // Update div object
    const square = document.getElementById(event.target.id);
    const index = parseInt(event.target.id);
    square.style.background = Squares[index].shade;
}