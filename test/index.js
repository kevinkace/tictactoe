const TTT = require("../TTT");

function topRow() {
    const ttt = new TTT();

    console.log(arguments.callee.name);

    // console.log(ttt);

    ttt.add({ x : 0, y : 0 });
    ttt.add({ x : 1, y : 0 });
    ttt.add({ x : 2, y : 0 });

    console.log(ttt.toString());
    console.log("row", ttt.winRow());
    console.log("col", ttt.winCol());
}

function secondRow() {
    const ttt = new TTT();

    console.log(arguments.callee.name);

    // console.log(ttt);

    ttt.add({ x : 1, y : 1 });
    ttt.add({ x : 0, y : 1 });
    ttt.add({ x : 2, y : 1 });

    console.log(ttt.toString());
    console.log("row", ttt.winRow());
    console.log("col", ttt.winCol());
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
    ttt.add({ x : 1, y : 2 });

    console.log(ttt.toString());
    console.log("row", ttt.winRow());
    console.log("col", ttt.winCol());

    // console.log(JSON.stringify(ttt.player.coords, null, 2));
}

function firstCol() {
    const ttt = new TTT();

    console.log(arguments.callee.name);

    // console.log(ttt);

    ttt.add({ x : 0, y : 0 });
    ttt.add({ x : 0, y : 1 });
    ttt.add({ x : 0, y : 2 });

    console.log(ttt.toString());
    console.log("row", ttt.winRow());
    console.log("col", ttt.winCol());
}

function negSlope() {
    const ttt = new TTT();

    console.log(arguments.callee.name);

    // console.log(ttt);

    ttt.add({ x : 0, y : 0 });
    ttt.add({ x : 1, y : 1 });
    ttt.add({ x : 2, y : 2 });

    console.log(ttt.toString());
    console.log("neg", ttt.negSlopeWin());
    console.log("pos", ttt.posSlopeWin());
}

function posSlope() {
    const ttt = new TTT();

    console.log(arguments.callee.name);

    // console.log(ttt);

    ttt.add({ x : 2, y : 0 });
    ttt.add({ x : 1, y : 1 });
    ttt.add({ x : 0, y : 2 });

    console.log(ttt.toString());
    console.log("neg", ttt.negSlopeWin());
    console.log("pos", ttt.posSlopeWin());
}


// topRow();
// secondRow();
// notTopRow();
// firstCol();
// negSlope();
posSlope();
