interface game{
    id: number
    whiteplayer: number // player1 id in a chess game
    blackplayer: number // player 2 id in a chess game
    moves:string[] //all moves in the game
}
export const games:game[] = []; //type = game array stores all games(objects) in an array so array of objects