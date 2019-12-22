function arrayOfArrays(size) {
    return new Array(size)
        .fill(true)
        .map(() => (new Array(size).fill(false)));
}

function initPlayer(name, size) {
    return {
        name,
        coords : {
            x : arrayOfArrays(size),
            y : arrayOfArrays(size)
        }
    };
}

module.exports = class TTT {
    constructor({ size = 3, name0 = "player 1", name1 = "player 2" } = {}) {
        this.size = size;
        this.board = arrayOfArrays(3); // to printing

        this.players = [
            initPlayer(name0, size),
            initPlayer(name1, size),
        ];

        this.plays = 0;

        this.currPlayerIdx = 0;
        this.opponentIdx   = 1;
    }

    add({ x, y }) {
        this.plays++;

        this.player.coords.x[x][y] = true;
        this.player.coords.y[y][x] = true;

        this.board[y][x] = this.currPlayerIdx;
    }

    play({ x, y }) {
        if (this.done) {
            console.log("game is done");

            return;
        }

        if (this.player.coords.x[x].includes(y) || this.opponent.coords.x[x].includes(y)) {
            console.log("square already marked");
            console.log(this.toString());

            return;
        }

        this.add({ x, y });

        console.log(this.toString());

        if (this.plays >= this.size - 1 && this.wonGame()) {
            return;
        }

        this.changePlayer();
    }

    get player() {
        return this.players[this.currPlayerIdx];
    }

    get opponent() {
        return this.players[this.opponentIdx];
    }

    changePlayer() {
        const temp = this.currPlayerIdx;

        this.currPlayerIdx = this.opponentIdx;
        this.opponentIdx   = temp;
    }

    toString() {
        const line = `\n${new Array((this.size * 2) - 1).fill("-").join("")}\n`;

        let output = "";

        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                output = `${output}${x ? "|" : ""}${this.board[y][x] !== false ? this.board[y][x] : " "}`;
            }

            output = `${output}${y === this.size - 1 ? "" : line}`;
        }

        return output;
    }

    lengthCheck(colOrRow) {
        if (colOrRow.length === this.size && colOrRow.reduce((acc, val) => (acc && val), true)) {
            return true;
        }

        return false;
    }

    winRow() {
        return this.player.coords.x.some(row => this.lengthCheck(row));
    }

    winCol() {
        return this.player.coords.y.some(row => this.lengthCheck(row));
    }

    wonGame() {
        if (
            this.winRow() ||
            this.winCol() ||
            this.player.coords.x.reduce((acc, col, idx) => acc && col[idx], true) ||
            this.player.coords.x.reduce((acc, col, idx) => acc && col[this.size - idx], true)
        ) {
            console.log(`${this.player.name} won!`);

            this.done = true;

            return true;
        }

        console.log("next");
    }
};
