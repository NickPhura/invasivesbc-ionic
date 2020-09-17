import React from "react";
import * as RxDB from "rxdb";
import { useState, useEffect } from "react";

export const DatabaseContext = React.createContext(null);

export const DatabaseContextProvider: React.FC = (props) => {
  const [database, setDatabase] = useState(null);

  const setupDatabase = async () => {
    if (database) {
      // database already exists
      return;
    }

    let db: RxDB.RxDatabase;

    if (window["cordova"]) {
      RxDB.addRxPlugin(require("pouchdb-adapter-cordova-sqlite")); // mobile adapter

      db = await RxDB.createRxDatabase({
        name: "mydatabase",
        adapter: "cordova-sqlite", // mobile adapter
        pouchSettings: {
          location: "default",
        },
        ignoreDuplicate: true,
      });
    } else {
      RxDB.addRxPlugin(require("pouchdb-adapter-indexeddb")); // browser adapter

      db = await RxDB.createRxDatabase({
        name: "mydatabase",
        adapter: "indexeddb", // browser adapter
        ignoreDuplicate: true,
      });
    }

    setDatabase(db);
  };

  useEffect(() => {
    setupDatabase();

    // TODO return database cleanup here?
  }, []);

  return (
    <DatabaseContext.Provider value={database}>
      {props.children}
    </DatabaseContext.Provider>
  );
};
