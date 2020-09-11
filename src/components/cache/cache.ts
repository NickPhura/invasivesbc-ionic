import * as RxDB from "rxdb";

export class Cache {
    db: RxDB.RxDatabase;

    cosntructor() {

    }

    async init() {
        this.configureDatabase();

        await this.createDatabase();
    }

    configureDatabase() {
        if (window["cordova"]) {
            RxDB.addRxPlugin(require("pouchdb-adapter-cordova-sqlite")); // mobile adapter
        } else {
            RxDB.addRxPlugin(require("pouchdb-adapter-indexeddb")); // browser adapter
        }
    }

    async createDatabase() {
        if (window["cordova"]) {
            this.db = await RxDB.createRxDatabase({
                name: "mydatabase",
                adapter: "cordova-sqlite", // mobile adapter
                pouchSettings: {
                    location: "default",
                },
                ignoreDuplicate: true,
            });
        } else {
            this.db = await RxDB.createRxDatabase({
                name: "mydatabase",
                adapter: "indexeddb", // browser adapter
                ignoreDuplicate: true,
            });
        }
    }

    setItem() {

    }

    getItem() {
        
    }
};