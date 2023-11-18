let Squares = []
class Square {
    clickCount = 0;
}

main();

function main() {
    fillBoard(16)
}

function createSquare() {
    Squares.push(new Square());
    var div = document.createElement("div");
    div.style.width = "50px"
    div.style.height = "50px";
    div.style.background = "black";
    div.id = (Squares.length - 1).toString();
    div.onclick = squareClicked;
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

function squareClicked(event) {
    console.log("clicked", event);
    const index = parseInt(event.target.id);
    Squares[index].clickCount++;
    console.log("squareClicked: ", index, Squares[index].clickCount);
}