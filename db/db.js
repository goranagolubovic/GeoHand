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
    description:
      'Paris is known as the "City of Light" and is famous for its stunning architecture, beautiful parks, and rich history.The city is home to iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum.Paris is a cultural and intellectual capital of the world, attracting artists, writers, and thinkers from around the globe.The city is known for its world-class cuisine, including French pastries, wine, and cheese.Paris is a popular tourist destination, welcoming millions of visitors each year who come to experience its unique charm and beauty.',
  },
  {
    name: "Marseille",
    lat: 43.2964,
    lon: 5.37,
    country: "France",
    description:
      "Marseille is a vibrant and colorful port city located on the Mediterranean coast of France, known for its rich history and cultural diversity.The city is home to stunning architecture, including the Basilique Notre-Dame de la Garde, a beautiful Catholic basilica that sits atop a hill overlooking the city and the sea.Marseille is a hub for seafood, with fresh catches brought in daily from the nearby fishing villages, and is known for its delicious bouillabaisse, a traditional fish stew.The city has a thriving arts scene, with museums and galleries showcasing everything from contemporary art to ancient history. Marseille is also a gateway to the Calanques, a series of breathtaking cliffs and coves along the Mediterranean coastline, making it a popular destination for outdoor enthusiasts and nature lovers.",
  },
  {
    name: "Lyon",
    lat: 45.76,
    lon: 4.84,
    country: "France",
    description:
      "Lyon is a historic city located in east-central France, known for its beautiful architecture, rich cultural heritage, and gastronomic delights.The city is famous for its traboules, a network of secret passageways and staircases that connect the streets and buildings of the old town.Lyon is also known for its Roman-era amphitheaters, basilicas, and other ancient ruins that give visitors a glimpse into the city's past.Lyon is renowned for its culinary scene, particularly its meat-centric dishes such as saucisson, andouillette, and rosette.",
  },
  {
    name: "Toulouse",
    lat: 43.6045,
    lon: 1.444,
    country: "France",
    description:
      "Toulouse is a charming city located in southwestern France, known for its beautiful pink-brick architecture and rich history.The city is home to the stunning Basilica of Saint-Sernin, one of the largest and most beautiful Romanesque churches in Europe.Toulouse is a hub for the aerospace industry, with companies such as Airbus and the European Space Agency headquartered there.The city is known for its lively street markets, where visitors can find everything from fresh produce and flowers to artisanal crafts and antiques.",
  },
  {
    name: "Nice",
    lat: 43.7034,
    lon: 7.2663,
    country: "France",
    description:
      "Nice is a beautiful city located on the French Riviera, known for its stunning coastline, charming old town, and year-round sunny weather.The city is home to the Promenade des Anglais, a picturesque seaside walkway that runs along the Bay of Angels and is lined with palm trees and grand hotels. Nice is a hub for art and culture, with museums and galleries showcasing everything from modern art to ancient history.",
  },
  {
    name: "Nantes",
    lat: 47.2181,
    lon: -1.5528,
    country: "France",
    description:
      "Nantes is a vibrant city located in western France, known for its rich history, lively arts scene, and beautiful green spaces.The city is home to the magnificent Château des Ducs de Bretagne, a historic castle that now houses a museum dedicated to the city's history and culture.Nantes is famous for its art installations, including the famous mechanical elephant that walks through the city streets as part of the Les Machines de l'Île exhibit.",
  },
  {
    name: "Montpellier",
    lat: 43.6119,
    lon: 3.8772,
    country: "France",
    description:
      "The city is home to the stunning Place de la Comédie, a grand square in the heart of the city that is surrounded by cafes, restaurants, and shops.Montpellier is known for its vibrant street art scene, with colorful murals and graffiti adorning buildings and walls throughout the city.The city is a hub for education and research, with several prestigious universities and research institutes located there.Montpellier is surrounded by beautiful countryside, including the stunning Languedoc wine region, where visitors can sample some of the best wines in France.",
  },
  {
    name: "Strasbourg",
    lat: 48.5833,
    lon: 7.7458,
    country: "France",
    description:
      "Strasbourg is a charming city located in eastern France, known for its beautiful architecture, rich history, and unique blend of French and German cultures.The city is home to the stunning Cathedral of Notre Dame, a magnificent Gothic cathedral that is one of the most famous landmarks in France.Strasbourg is known for its charming half-timbered houses, which can be found in the historic Petite France neighborhood.",
  },
  {
    name: "Bordeaux",
    lat: 44.84,
    lon: -0.58,
    country: "France",
    description:
      "The city is home to over 350 historic buildings, including the magnificent Place de la Bourse and the stunning Basilica of Saint Michael.Bordeaux is famous for its wine, with some of the most prestigious vineyards in the world located in the surrounding countryside.The city is known for its vibrant food scene, with delicious local specialties like cannelés (small, sweet cakes) and entrecôte bordelaise (steak with a rich wine sauce). Bordeaux is a UNESCO World Heritage site, recognized for its exceptional urban and architectural ensemble, which includes the historic city center and the famous Bordeaux vineyards.",
  },
  {
    name: "Lille",
    lat: 50.6278,
    lon: 3.0583,
    country: "France",
    description:
      "Lille is a charming city located in northern France, known for its beautiful architecture, rich history, and friendly locals.The city is home to several stunning landmarks, including the ornate Old Stock Exchange building and the impressive Palais des Beaux-Arts museum.The city is known for its vibrant cultural scene, with numerous art galleries, theaters, and music venues hosting events throughout the year.Lille is also a popular destination for shopping, with a mix of trendy boutiques, traditional markets, and high-end stores offering something for every taste and budget.",
  },
  {
    name: "Rennes",
    lat: 48.1147,
    lon: -1.6794,
    country: "France",
    description:
      "Rennes is a charming city located in western France, known for its beautiful historic architecture, vibrant cultural scene, and picturesque parks.The city is home to several stunning landmarks, including the impressive Saint George Palace and the stunning Rennes Cathedral.The city is known for its lively nightlife, with a mix of trendy bars, clubs, and live music venues keeping visitors entertained until the early hours.",
  },
  {
    name: "Reims",
    lat: 49.2628,
    lon: 4.0347,
    country: "France",
    description:
      "Reims is a city located in northeastern France, known for its rich history, stunning architecture, and world-famous Champagne wine.The city is home to several impressive landmarks, including the beautiful Reims Cathedral and the historic Palace of Tau.Reims is the unofficial capital of the Champagne region, with numerous vineyards and wineries offering tours and tastings of their world-class Champagne.",
  },
  {
    name: "Toulon",
    lat: 43.1258,
    lon: 5.9306,
    country: "France",
    description:
      "Toulon is a port city located on the French Riviera, known for its stunning beaches, picturesque harbor, and Mediterranean charm.The city is home to several impressive landmarks, including the historic Toulon Cathedral and the stunning Mont Faron mountain range.Toulon is famous for its naval heritage, with several museums and attractions showcasing the city's rich maritime history.The city is known for its lively atmosphere, with a mix of trendy bars, clubs, and restaurants keeping visitors entertained day and night.Toulon is also a popular destination for outdoor enthusiasts, with opportunities for hiking, cycling, and water sports available throughout the year.",
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
    name: "Cathedral of Notre-Dame",
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
    // tx.executeSql(`DROP TABLE IF EXISTS city`, []);
    tx.executeSql(
      "CREATE TABLE  IF NOT EXISTS city(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,lat NUMBER, lon NUMBER, country TEXT,description TEXT)",
      [],
      () => {
        tx.executeSql(
          "SELECT count(*) as count FROM city",
          [],
          (_, result) => {
            const count = result.rows.item(0).count;
            if (count === 0) {
              cities.forEach((elem) => {
                tx.executeSql(
                  "INSERT INTO city (name,lat,lon,country,description) VALUES (?,?,?,?,?)",
                  [
                    elem.name,
                    elem.lat,
                    elem.lon,
                    elem.country,
                    elem.description,
                  ]
                );
              });
            }
          },
          (_, error) => {
            console.log("Error while checking table: " + error);
          }
        );
      }
    );
  });
};

export const fetchLandmarksFromDB = () => {
  db.transaction((tx) => {
    // tx.executeSql("DROP TABLE landmarks", []);
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS landmarks (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT,lat NUMBER, lon NUMBER, country TEXT,details TEXT,image TEXT,favourite NUMBER)",
      [],
      () => {
        tx.executeSql(
          "SELECT count(*) as count FROM landmarks",
          [],
          (_, result) => {
            const count = result.rows.item(0).count;
            if (count === 0) {
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
            }
          },
          (_, error) => {
            console.log("Error while checking table: " + error);
          }
        );
      }
    );
  });
};

export const fetchCitiesTable = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
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
              resolve(rowArrayCities);
            },
            (_, error) => reject(error)
          );
        }
      },
      reject,
      resolve
    );
  });
};

export const fetchLandmarksTable = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
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
              resolve(rowArrayLandmarks);
            },
            (_, error) => reject(error)
          );
        }
      },
      reject,
      resolve
    );
  });
};

export const editLandmark = (favourite, name, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      "UPDATE landmarks SET favourite = ? WHERE name = ?",
      [favourite, name],
      (tx, results) => {
        if (results.rowsAffected > 0) {
          tx.executeSql(
            "SELECT * FROM landmarks WHERE name = ?",
            [name],
            (_, { rows: { _array } }) => callback(_array[0])
          );
        } else console.log("Error");
      }
    );
  });
};
