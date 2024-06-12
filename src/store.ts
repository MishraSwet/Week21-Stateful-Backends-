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

so we create a pvt constructor so we cant create an instance outside the class but then we cant create and export a new instance so export const gameManager=new GameManager() will not work

so we create a static instance attribute since we need a single instance for the entire class and we export it in a function where we create an instance(the only one) if it doesnt xizt and return it if it already xizts

the function also needs to be static dunno why but will do soon...
*/

export class GameManager{
    games: game[];
    //since static therefore only one will would xizt also related directly to class as all instances are but since we cant create an instance outside we just create and pass it through.
    static instance:GameManager
    private constructor() {
        this.games=[]
    }

    //since we cant create an instance outside due to pvt const hence we cant access the class through an instance so we cant access the other methods through instance.method but if we get the single instance then instance.methods can run

    //but to get the instance we dont have anything so we create a static method such that we can access the instance directly through className thats why we use a static function and then on, access the other methods through the instance which is a single one due to it being a static attribute..
    static getInstance() {
        if (!GameManager.instance)
            GameManager.instance = new GameManager();
            return GameManager.instance
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

export const instance = GameManager.getInstance();