import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('client.db')

export class DB {
    static init() {
        return new Promise ((resolve, reject) =>{
            db.transaction(tx => {
                tx.executeSql(
                    "create table if not exists client (id integer primary key not null, name text, surname text);",
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
                    "select * from client",
                    [],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error)
                )
            })
        })
    }

    static createClient({name, surname}) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    "insert into client (name, surname) values (?, ?)",
                    [name, surname],
                    (_, result) => resolve(result.insertId),
                    (_, error) => reject(error)
                )
            })
        })
    }
}