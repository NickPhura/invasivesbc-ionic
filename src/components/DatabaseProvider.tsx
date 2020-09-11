import React, { Component } from "react";
import { RxDatabaseBase } from "rxdb/dist/types/rx-database";
import * as RxDB from "rxdb";
import { useState, useEffect } from 'react'

export const DatabaseContext = React.createContext({database: null, isReady: false})

export function DatabaseProvider(props) {

     async function setupDatabase() {
        console.log('setupdatabase')
       const database = await window["cordova"] ? RxDB.createRxDatabase({
            name: "mydatabase",
            adapter: "cordova-sqlite", // mobile adapter
            pouchSettings: {
                location: "default",
            },
            ignoreDuplicate: true,
        })
            :
            RxDB.createRxDatabase({
                name: "mydatabase",
                adapter: "indexeddb", // browser adapter
                ignoreDuplicate: true,
            })
        setDatabase({database: database, isReady: true})
        console.log('its set up')
    }

    if (window["cordova"]) {
        RxDB.addRxPlugin(require("pouchdb-adapter-cordova-sqlite")); // mobile adapter
    } else {
        RxDB.addRxPlugin(require("pouchdb-adapter-indexeddb")); // browser adapter
    }


    // make state
    const [database, setDatabase] = useState(null)

    // one time setup
    useEffect(() => { setupDatabase() }, [])

    return (
        <DatabaseContext.Provider value={database}>
            {props.children}
        </DatabaseContext.Provider>
    )
}