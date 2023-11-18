main();

function main() {
    fillBoard(16)
}

function createSquare() {
    var div = document.createElement("div");
    div.style.width = "50px"
    div.style.height = "50px";
    div.style.background = "black";
    return div;
}

function fillBoard(size) {
    const board = document.getElementById("board");
    for (let index = 0; index < size; index++) {
        const s = createSquare();
        console.log(index, s);
        board.appendChild(s);
    }
}