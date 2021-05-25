import { DB } from "./db";

export async function init(){
    try {
        await DB.init()
        console.log('Database started..')
    } catch (e){
        console.log(e)
    }
}