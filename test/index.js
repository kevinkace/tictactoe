const TTT = require("../TTT");

function topRow() {
    const ttt = new TTT();

    console.log(arguments.callee.name);

    // console.log(ttt);

    ttt.play({ x : 0, y : 0 });
    ttt.play({ x : 1, y : 0 });
    ttt.play({ x : 2, y : 0 });
}

function notTopRow() {
    const ttt = new TTT();

    console.log(arguments.callee.name);

    // console.log(ttt);

    ttt.add({ x : 0, y : 0 });
    ttt.add({ x : 1, y : 0 });
    ttt.add({ x : 2, y : 1 });
    ttt.add({ x : 2, y : 1 });
    ttt.add({ x : 0, y : 1 });
    console.log(ttt.toString());

    // console.log(JSON.stringify(ttt.player.coords, null, 2));
}

function firstCol() {
    const ttt = new TTT();

    console.log(arguments.callee.name);

    // console.log(ttt);

    ttt.play({ x : 0, y : 0 });
    ttt.play({ x : 1, y : 1 });
    ttt.play({ x : 2, y : 1 });
}


// topRow();
notTopRow();
