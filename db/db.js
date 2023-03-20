import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("GeoHand.db", () => {});
let rowArrayCities = [];
let rowArrayLandmarks = [];
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
  {
    name: "Montpellier",
    lat: 43.6119,
    lon: 3.8772,
    country: "France",
  },
  {
    name: "Strasbourg",
    lat: 48.5833,
    lon: 7.7458,
    country: "France",
  },
  {
    name: "Bordeaux",
    lat: 44.84,
    lon: -0.58,
    country: "France",
  },
  {
    name: "Lille",
    lat: 50.6278,
    lon: 3.0583,
    country: "France",
  },
  {
    name: "Rennes",
    lat: 48.1147,
    lon: -1.6794,
    country: "France",
  },
  {
    name: "Reims",
    lat: 49.2628,
    lon: 4.0347,
    country: "France",
  },
  {
    name: "Toulon",
    lat: 43.1258,
    lon: 5.9306,
    country: "France",
  },
];
const landmarks = [
  {
    name: "Eiffel Tower",
    lat: 48.858257,
    lon: 2.294537,
    country: "France",
    details:
      "The Eiffel Tower (/ˈaɪfəl/ EYE-fəl; French: tour Eiffel [tuʁ ɛfɛl] (listen)) is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.Locally nicknamed 'La dame de fer' (French for 'Iron Lady'), it was constructed from 1887 to 1889 as the centerpiece of the 1889 World's Fair. Although initially criticised by some of France's leading artists and intellectuals for its design, it has since become a global cultural icon of France and one of the most recognisable structures in the world. The Eiffel Tower is the most visited monument with an entrance fee in the world: 6.91 million people ascended it in 2015. It was designated a monument historique in 1964, and was named part of a UNESCO World Heritage Site ('Paris, Banks of the Seine') in 1991.",
    image:
      "https://fastly.4sqi.net/img/general/original/2960181_QytskOzX9KNE4z9ifAJtXTjT6YE6Zqc_volw8k3mSzE.jpg",
    favorite: 0,
  },
  {
    name: "Arc de Triomphe",
    lat: 48.873783275868725,
    lon: 2.2950589656829834,
    country: "France",
    details:
      "The Arc de Triomphe in Paris is a monument located in the center of Charles de Gaulle Square (Place Charles de Gaulle), also known as the Place de l'Étoile (Star Square). It is situated at the western end of the Champs-Élysées avenue. The triumphal arch was erected in honor of French soldiers, especially those who fought in the Napoleonic Wars. Beneath the arch is the Tomb of the Unknown Soldier from World War I.The monument was designed by Jean Chalgrin in 1806, shortly after the Battle of Austerlitz. Construction lasted until the early 1830s. The design is a neoclassical interpretation of the ancient Roman Arch of Titus. The monument is 49.5 meters high and 45 meters wide, making it the second-largest triumphal arch in the world.",
    image: "https://xdn.tf.rs/2021/10/23/foto-pixabay-iankelsall1-830x0.jpg",
    favorite: 0,
  },
  {
    name: "Cathedral of Notre-Dame de Paris",
    lat: 48.85312443201169,
    lon: 2.3495614528656006,
    country: "France",
    details:
      "Notre-Dame de Paris, referred to simply as Notre-Dame,is a medieval Catholic cathedral. The cathedral, dedicated to the Virgin Mary, is considered one of the finest examples of French Gothic architecture. Several attributes set it apart from the earlier Romanesque style, particularly its pioneering use of the rib vault and flying buttress, its enormous and colourful rose windows, and the naturalism and abundance of its sculptural decoration. Notre Dame also stands out for its three pipe organs (one historic) and its immense church bells.",
    image:
      "https://images.adsttc.com/media/images/62e7/6fc7/8855/c975/bbc6/fccd/newsletter/notre-dame-de-paris-cathedral-is-on-track-to-reopen-in-2024_1.jpg?1659334633",
    favorite: 0,
  },
  {
    name: "Louvre",
    lat: 48.860294,
    lon: 2.338629,
    country: "France",
    details:
      "The Louvre or the Louvre Museum, is the world's most-visited museum, and a historic landmark in Paris, France. It is the home of some of the best-known works of art, including the Mona Lisa and the Venus de Milo. The Musée du Louvre contains more than 380,000 objects and displays 35,000 works of art in eight curatorial departments with more than 60,600 square metres (652,000 sq ft) dedicated to the permanent collection. The Louvre exhibits sculptures, objets d'art, paintings, drawings, and archaeological finds ",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Ycfuus7-hXk70Yd61oY5oxZSLpI8nOXDsswmhC_MY3ufc_ytw92AN1TDWlHiHtiCDKc&usqp=CAU",
    favorite: 0,
  },
  {
    name: "Pont du Gard",
    lat: 43.947224,
    lon: 4.535556,
    country: "France",
    details:
      "The Pont du Gard is an ancient Roman aqueduct bridge built in the first century AD to carry water over 50 km (31 mi) to the Roman colony of Nemausus (Nîmes). It crosses the river Gardon near the town of Vers-Pont-du-Gard in southern France. The Pont du Gard is the tallest of all Roman aqueduct bridges, as well as one of the best preserved. It was added to UNESCO's list of World Heritage sites in 1985 because of its exceptional preservation, historical importance, and architectural ingenuity.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Pont_du_Gard_Oct_2007.jpg/420px-Pont_du_Gard_Oct_2007.jpg",
    favorite: 0,
  },
  {
    name: "Château_de_Montsoreau",
    lat: 47.215726,
    lon: 0.06253,
    country: "France",
    details:
      "The Château de Montsoreau is a Flamboyant Gothic castle in the Loire Valley, directly built in the Loire riverbed. It is located in the small market town of Montsoreau, in the Maine-et-Loire département of France, close to Saumur, Chinon, Fontevraud-l'Abbaye and Candes-Saint-Martin. The Château de Montsoreau is situated at the confluence of two rivers, the Loire and the Vienne, and the meeting point of three historical regions: Anjou, Poitou, and Touraine. It is the only château of the Loire Valley built directly in the Loire riverbed.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Chateau_de_Montsoreau_Museum_of_contemporary_art_Loire_Valley_France.jpg/800px-Chateau_de_Montsoreau_Museum_of_contemporary_art_Loire_Valley_France.jpg",
    favorite: 0,
  },
];

export const fetchCitiesFromDB = () => {
  db.transaction((tx) => {
    tx.executeSql("DROP table if exists city;");
    createTableCity();
    fillTableCity();
    return fetchCitiesTable();
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

export const fetchLandmarksFromDB = () => {
  db.transaction((tx) => {
    tx.executeSql("DROP table if exists landmarks;");
    createTableLandmarks();
    fillTableLandmarks();
    return fetchLandmarksTable();
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

const createTableCity = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE if not exists city (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,lat NUMBER, lon NUMBER, country TEXT)"
    );
  });
};

const fillTableCity = () => {
  db.transaction((tx) => {
    cities.forEach((elem) => {
      tx.executeSql(
        "INSERT INTO city (name,lat,lon,country) VALUES (?,?,?,?)",
        [elem.name, elem.lat, elem.lon, elem.country]
      );
    });
  });
};

const createTableLandmarks = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE if not exists landmarks (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,lat NUMBER, lon NUMBER, country TEXT,details TEXT,image TEXT,favourite NUMBER)"
    );
  });
};

const fillTableLandmarks = () => {
  db.transaction((tx) => {
    landmarks.forEach((elem) => {
      tx.executeSql(
        "INSERT INTO landmarks (name,lat,lon,country,details,image,favourite) VALUES (?,?,?,?,?,?,?)",
        [
          elem.name,
          elem.lat,
          elem.lon,
          elem.country,
          elem.details,
          elem.image,
          elem.favorite,
        ]
      );
    });
  });
};

export const fetchCitiesTable = () => {
  db.transaction((tx) => {
    rowArrayCities = [];
    if (rowArrayCities.length == 0) {
      tx.executeSql(
        `SELECT * FROM city`,
        [],
        (_, result) => {
          const rows = result.rows;
          for (let i = 0; i < rows.length; i++) {
            rowArrayCities.push(rows.item(i));
          }
        },
        (_, error) => console.log(error)
      );
    }
  });
  return rowArrayCities;
};

export const fetchLandmarksTable = () => {
  db.transaction((tx) => {
    rowArrayLandmarks = [];
    if (rowArrayLandmarks.length == 0) {
      tx.executeSql(
        `SELECT * FROM landmarks`,
        [],
        (_, result) => {
          const rows = result.rows;
          for (let i = 0; i < rows.length; i++) {
            rowArrayLandmarks.push(rows.item(i));
          }
        },
        (_, error) => console.log(error)
      );
    }
  });
  return rowArrayLandmarks;
};

// export const fetchDataFromDB = (data) => {
//   db.transaction((tx) => {
//     rowArray = [];
//     if (rowArray.length == 0) {
//       tx.executeSql(
//         `SELECT * FROM ` + data,
//         [],
//         (_, result) => {
//           const rows = result.rows;
//           for (let i = 0; i < rows.length; i++) {
//             rowArray.push(rows.item(i));
//           }
//         },
//         (_, error) => console.log(error)
//       );
//     }
//   });
//   return rowArray;
// };

export const editLandmark = (favourite, name, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      "UPDATE landmarks SET favourite = ? WHERE name = ?",
      [favourite, name],
      (tx, results) => {
        //console.log("Results", results.rowsAffected);
        if (results.rowsAffected > 0) {
          tx.executeSql(
            "SELECT * FROM landmarks WHERE name = ?",
            [name],
            (_, { rows: { _array } }) => callback(_array[0])
          );
          //console.log("Record Updated Successfully...");
        } else console.log("Error");
      }
    );
  });
};
