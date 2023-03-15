import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("GeoHand.db", () => {
  createTable();
  fillTable();
});
let rowArray = [];
const cities = [
  {
    name: "Paris",
    lat: 48.8566,
    lon: 2.3522,
    country: "France",
  },
  {
    name: "Marseille",
    lat: 43.2964,
    lon: 5.37,
    country: "France",
  },
  {
    name: "Lyon",
    lat: 45.76,
    lon: 4.84,
    country: "France",
  },
  {
    name: "Toulouse",
    lat: 43.6045,
    lon: 1.444,
    country: "France",
  },
  {
    name: "Nice",
    lat: 43.7034,
    lon: 7.2663,
    country: "France",
  },
  {
    name: "Nantes",
    lat: 47.2181,
    lon: -1.5528,
    country: "France",
  },
  //   {
  //     name: "Montpellier",
  //     lat: 43.6119,
  //     lon: 3.8772,
  //     country: "France",
  //   },
  //   {
  //     name: "Strasbourg",
  //     lat: 48.5833,
  //     lon: 7.7458,
  //     country: "France",
  //   },
  //   {
  //     name: "Bordeaux",
  //     lat: 44.84,
  //     lon: -0.58,
  //     country: "France",
  //   },
  //   {
  //     name: "Lille",
  //     lat: 50.6278,
  //     lon: 3.0583,
  //     country: "France",
  //   },
  //   {
  //     name: "Rennes",
  //     lat: 48.1147,
  //     lon: -1.6794,
  //     country: "France",
  //   },
  //   {
  //     name: "Reims",
  //     lat: 49.2628,
  //     lon: 4.0347,
  //     country: "France",
  //   },
  //   {
  //     name: "Toulon",
  //     lat: 43.1258,
  //     lon: 5.9306,
  //     country: "France",
  //   },
];

export const openGeoHandDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql("DROP table if exists city;");

    createTable();
    fillTable();
    return fetchDataFromDB("city");
    // tx.executeSql(
    //   'SELECT name FROM sqlite_master WHERE type="table" and name="city"',
    //   [],
    //   (tx, result) => {
    //     if (result.rows.length == 0) {
    //       console.log("Creat");
    //       createTable();
    //       fillTable();
    //     }
    //     return fetchDataFromDB("city");
    //   }
    // );
  });
};

const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE if not exists city (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,lat NUMBER, lon NUMBER, country TEXT)"
    );
  });
};

const fillTable = () => {
  db.transaction((tx) => {
    cities.forEach((elem) => {
      tx.executeSql(
        "INSERT INTO city (name,lat,lon,country) VALUES (?,?,?,?)",
        [elem.name, elem.lat, elem.lon, elem.country]
      );
    });
  });
};

export const fetchDataFromDB = (data) => {
  db.transaction((tx) => {
    if (rowArray.length == 0) {
      tx.executeSql(
        `SELECT * FROM ` + data,
        [],
        (_, result) => {
          const rows = result.rows;
          for (let i = 0; i < rows.length; i++) {
            rowArray.push(rows.item(i));
          }
        },
        (_, error) => console.log(error)
      );
    }
  });
  return rowArray;
};
