interface game{
    id: number
    whiteplayer: number // player1 id in a chess game
    blackplayer: number // player 2 id in a chess game
    moves:string[] //all moves in the game
}
export const games: game[] = []; //type = game array stores all games(objects) in an array so array of objects

export function createGame(x: number, y: number) {
    //create new Game
    const game = {
        id: games.length,
        whiteplayer: x,
        blackplayer: y,
        moves:[]
    }
    games.push(game)
    return game
}

export function addMove(move:string,player:string,gameid:number) {
    games[gameid].moves.push(player+"->"+move)
}

/*
Here Games == Store/database
function == mutations on the store
we export these functions in a module/obj
But we can use a class which has same properties in addition to oops properties inheiritance etc that can help us and is more convinient than raw module export
But if we export the class then with each new instance the a new store is created therefore we use singleton pattern i.e only a single instance of the class would xizt we do this by using a private constructor(can also be done by not exporting the class) and then creating a single instance and exporting that instance to all importers 
*/

export class GameManager{
    games: game[] ;
    constructor() {
        this.games=[]
    }

    addMove(gameid: number, playerid: number, move: string) {
        games[gameid].moves.push(playerid+"->"+move)
    }

    addGame(pid1: number, pid2: number) {
        const game = {
            id: games.length,
            whiteplayer: pid1,
            blackplayer: pid2,
            moves:[]
        }
        games.push(game);
    }
}

export const gameManager = new GameManager();