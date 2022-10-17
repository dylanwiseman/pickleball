class Game {
    player1: any;
    player2: any;
    player3: any;
    player4: any;
    team1Score: number = 1;
    team2Score: number = 1;
    serveIndex: number = 0;
    firstServe: number;
    firstRecieve: number;
    playerArray: any[];

    constructor(p1: any, p2: any, p3: any, p4: any, f1: number, r1: number) {
        if (Game.instance) return Game.instance;
        Game.instance = this;
        this.player1 = {
            ...p1,
            plus: 0,
            plusPoint: 0,
            minus: 0,
            minusPoint: 0,
        };
        this.player2 = {
            ...p2,
            plus: 0,
            plusPoint: 0,
            minus: 0,
            minusPoint: 0,
        };
        this.player3 = {
            ...p3,
            plus: 0,
            plusPoint: 0,
            minus: 0,
            minusPoint: 0,
        };
        this.player4 = {
            ...p4,
            plus: 0,
            plusPoint: 0,
            minus: 0,
            minusPoint: 0,
        };
        this.playerArray = [
            this.player1,
            this.player2,
            this.player3,
            this.player4,
        ];
        this.firstServe = f1;
        this.firstRecieve = r1;
    }
    getScore(team: number) {
        return team === 1 ? this.team1Score : this.team2Score;
    }
    nextServe() {
        if (this.serveIndex === 3) {
            this.serveIndex = 0;
        } else {
            this.serveIndex++;
        }
    }
    point(playerIndex: number, plus: boolean) {
        // if (plus) {
        //     if (
        //         (playerIndex <= 1 && this.serveIndex <= 1) ||
        //         (playerIndex >= 2 && this.serveIndex >= 2)
        //     ) {
        //         this.playerArray[playerIndex].plusPoint++;
        //         playerIndex <= 1 ? this.team1Score : this.team2Score++;
        //     } else {
        //         this.nextServe();
        //     }
        //     this.playerArray[playerIndex].plus++;
        // } else {
        //     if (
        //         (playerIndex <= 1 && this.serveIndex >= 2) ||
        //         (playerIndex >= 2 && this.serveIndex <= 1)
        //     ) {
        //         this.playerArray[playerIndex].minusPoint++;
        //         playerIndex <= 1 ? this.team2Score : this.team1Score++;
        //     } else {
        //         this.nextServe();
        //     }
        //     this.playerArray[playerIndex].minus++;
        // }
        this.team1Score++;
    }
}

export default Game;
