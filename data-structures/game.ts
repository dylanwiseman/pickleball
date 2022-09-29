import { TabBarIOS } from 'react-native';

class Game {
    player1: {
        name: string;
        plus: number;
        plusPoint: number;
        minus: number;
        minusPoint: number;
    };
    player2: {
        name: string;
        plus: number;
        plusPoint: number;
        minus: number;
        minusPoint: number;
    };
    player3: {
        name: string;
        plus: number;
        plusPoint: number;
        minus: number;
        minusPoint: number;
    };
    player4: {
        name: string;
        plus: number;
        plusPoint: number;
        minus: number;
        minusPoint: number;
    };
    team1Score: number = 0;
    team2Score: number = 0;
    serveIndex: number = 0;
    firstRecieve: number = 2;
    playerArray: any;

    constructor(p1: string, p2: string, p3: string, p4: string) {
        this.player1.name = p1;
        this.player1.plus = 0;
        this.player1.plusPoint = 0;
        this.player1.minus = 0;
        this.player1.minusPoint = 0;
        this.player2.name = p2;
        this.player2.plus = 0;
        this.player2.plusPoint = 0;
        this.player2.minus = 0;
        this.player2.minusPoint = 0;
        this.player3.name = p3;
        this.player3.plus = 0;
        this.player3.plusPoint = 0;
        this.player3.minus = 0;
        this.player3.minusPoint = 0;
        this.player4.name = p4;
        this.player4.plus = 0;
        this.player4.plusPoint = 0;
        this.player4.minus = 0;
        this.player4.minusPoint = 0;
        this.playerArray = [
            this.player1,
            this.player2,
            this.player3,
            this.player4,
        ];
    }
    nextServe() {
        if (this.serveIndex === 3) {
            this.serveIndex = 0;
        } else {
            this.serveIndex++;
        }
    }
    point(playerIndex: number, plus: boolean) {
        if (plus) {
            if (
                (playerIndex <= 1 && this.serveIndex <= 1) ||
                (playerIndex >= 2 && this.serveIndex >= 2)
            ) {
                this.playerArray[playerIndex].plusPoint++;
                playerIndex <= 1 ? this.team1Score : this.team2Score++;
            } else {
                this.nextServe();
            }
            this.playerArray[playerIndex].plus++;
        } else {
            if (
                (playerIndex <= 1 && this.serveIndex >= 2) ||
                (playerIndex >= 2 && this.serveIndex <= 1)
            ) {
                this.playerArray[playerIndex].minusPoint++;
                playerIndex <= 1 ? this.team2Score : this.team1Score++;
            } else {
                this.nextServe();
            }
            this.playerArray[playerIndex].minus++;
        }
    }
}
