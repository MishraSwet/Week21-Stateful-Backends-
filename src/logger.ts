//updates state in the db(stores in db from backend state every x seconds)
export function Startlogger() {
    setInterval(() => {
        console.log("Updated State");
        //Here we would actually update our state in the database
    }, 5000)
    
    //setInterval syntax = (()=>{},time in milliseconds)
    //runs the function body every x milliseconds

}