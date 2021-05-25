import * as SQLite from 'expo-sqlite'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen'

const db = SQLite.openDatabase('client.db')

export class DB {
    static init() {
        return new Promise ((resolve, reject) =>{
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS clients (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, surname TEXT NOT NULL',
                    [],
                    resolve(),
                    (_, error) => reject(error)
                )
            })
        })
    }

    static getClients(){
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM clients',
                    [],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error)
                )
            })
        })
    }
}