const TTT = require("../TTT");

function test() {
    const ttt = new TTT();

    console.log(arguments.callee.name);

    // console.log(ttt);

    ttt.play({ x : 0, y : 0 });
    ttt.play({ x : 1, y : 0 });

    ttt.play({ x : 2, y : 0 });
    ttt.play({ x : 2, y : 0 });
    ttt.play({ x : 2, y : 1 });

    ttt.play({ x : 0, y : 2 });
    ttt.play({ x : 0, y : 1 });

    ttt.play({ x : 1, y : 1 });

    // console.log(ttt.toString());
    // console.log("row", ttt.winRow());
    // console.log("col", ttt.winCol());
}

test();
