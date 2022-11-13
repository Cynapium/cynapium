
var female_faces = Array.from(Array(50).keys())
var male_faces = Array.from(Array(50).keys())

var genders = [
    "F", "F", "F", "F", "F", "F", "F", "F",
    "M", "M", "M", "M", "M", "M", "M", "M"
];

var male_names = [
    "Abel",
    "Achille",
    "Adam",
    "Adolphe",
    "Adrien",
    "Alain",
    "Albert",
    "Alexandre",
    "Alexis",
    "Alfred",
    "Alison",
    "Alphonse",
    "Amaury",
    "Ambroise",
    "Amedee",
    "Anatole",
    "Andre",
    "Anselme",
    "Antoine",
    "Apollinaire",
    "Armand",
    "Armel",
    "Arnaud",
    "Auguste",
    "Augustin",
    "Aurel",
    "Aurelien",
    "Arthur",
    "Baptiste",
    "Barnabe",
    "Barthelemy",
    "Basile",
    "Bastien",
    "Benjamin",
    "Benoit",
    "Bernard",
    "Bertrand",
    "Blaise",
    "Brice",
    "Bruno",
    "Camille",
    "Celestin",
    "Cesaire",
    "Cesar",
    "Charles",
    "Charlie",
    "Christian",
    "Christophe",
    "Claude",
    "Clement",
    "Constant",
    "Constantin",
    "Corentin",
    "Cyril",
    "Damien",
    "Daniel",
    "David",
    "Denis",
    "Denis",
    "Dennis",
    "Didier",
    "Dimitri",
    "Dion",
    "Dominique",
    "Edgar",
    "Edgard",
    "Edmond",
    "edouard",
    "emile",
    "emilien",
    "Emmanuel",
    "Eric",
    "etienne",
    "Eugene",
    "Eustache",
    "Fabien",
    "Fabrice",
    "Felicien",
    "Felix",
    "Ferdinand",
    "Fernand",
    "Florent",
    "Florentin",
    "Florian",
    "Francis",
    "Franck",
    "François",
    "Frederic",
    "Gabin",
    "Gabriel",
    "Gael",
    "Gaetan",
    "Gaspard",
    "Gaston",
    "Gautier",
    "Georges",
    "Gerard",
    "Germain",
    "Gervais",
    "Gilles",
    "Gregoire",
    "Guillaume",
    "Gustave",
    "Guy",
    "Hector",
    "Henri",
    "Herve",
    "Honore",
    "Horace",
    "Hubert",
    "Hugues",
    "Hugo",
    "Jacques",
    "Jean",
    "Jean-Baptiste",
    "Jean-Marie",
    "Jeremie",
    "Jerome",
    "Joachim",
    "Joël",
    "Joseph",
    "Jules",
    "Julien",
    "Justin",
    "Lambert",
    "Laurent",
    "Leo",
    "Leon",
    "Leonard",
    "Leopold",
    "Lionel",
    "Liam",
    "Loic",
    "Louis",
    "Luc",
    "Lucas",
    "Lucien",
    "Marc",
    "Marcel",
    "Marin",
    "Marius",
    "Martin",
    "Matheo",
    "Mathis",
    "Matthieu",
    "Maurice",
    "Maxime",
    "Maximilien",
    "Michel",
    "Nathan",
    "Nicholas",
    "Nicolas",
    "Noah",
    "Noe",
    "Olivier",
    "Pascal",
    "Patrice",
    "Patrick",
    "Paul",
    "Philippe",
    "Pierre",
    "Pierrick",
    "Quentin",
    "Raoul",
    "Raphael",
    "Raymond",
    "Regis",
    "Remi",
    "Rene",
    "Richard",
    "Robert",
    "Rodolphe",
    "Roger",
    "Roland",
    "Romain",
    "Sacha",
    "Samuel",
    "Sebastien",
    "Serge",
    "Simon",
    "Stephane",
    "Sylvain",
    "Theo",
    "Theodore",
    "Theophile",
    "Thibault",
    "Thierry",
    "Thomas",
    "Timothee",
    "Tristan",
    "Valentin",
    "Victor",
    "Vincent",
    "Vivien",
    "Xavier",
    "Yann",
    "Yannick",
    "Yoann",
    "Yves",
    "Zacharie"
];
var female_names = [
    "Adelaïde",
    "Adele",
    "Adrienne",
    "Agathe",
    "Agnes",
    "Alexandra",
    "Alexis",
    "Alice",
    "Aline",
    "Alison",
    "Amarante",
    "Ambre",
    "Amelie",
    "Anaïs",
    "Angele",
    "Angelique",
    "Anna",
    "Anne",
    "Apolline",
    "Ariane",
    "Armelle",
    "Aude",
    "Aurelie",
    "Aurore",
    "Avril",
    "Barbara",
    "Beatrice",
    "Bernadette",
    "Blanche",
    "Brigitte",
    "Camille",
    "Capucine",
    "Carole",
    "Caroline",
    "Catherine",
    "Cecile",
    "Celeste",
    "Celine",
    "Chantal",
    "Charline",
    "Charlotte",
    "Chloe",
    "Christelle",
    "Christine",
    "Claire",
    "Clarisse",
    "Claudette",
    "Claudine",
    "Clemence",
    "Clementine",
    "Clothilde",
    "Colette",
    "Colombe",
    "Constance",
    "Corinne",
    "Danielle",
    "Delphine",
    "Denise",
    "Diane",
    "Dominique",
    "Dorothee",
    "edith",
    "Eleonore",
    "eliane",
    "Elisabeth",
    "elise",
    "elodie",
    "eloise",
    "Emeline",
    "emilie",
    "Emma",
    "Emmanuelle",
    "Esther",
    "Eugenie",
    "Eulalie",
    "Eve",
    "Fabienne",
    "Fernande",
    "Flavie",
    "Florence",
    "Francine",
    "Françoise",
    "Frederique",
    "Gabrielle",
    "Georgette",
    "Giselle",
    "Helene",
    "Heloïse",
    "Henriette",
    "Hortense",
    "Ines",
    "Irene",
    "Isabelle",
    "Jacinthe",
    "Jacqueline",
    "Jeanne",
    "Jeannette",
    "Jeannine",
    "Joceline",
    "Josephine",
    "Josiane",
    "Judith",
    "Julie",
    "Juliette",
    "Justine",
    "Laure",
    "Laurence",
    "Laurine",
    "Lea",
    "Leonie",
    "Lila",
    "Lisette",
    "Louise",
    "Luce",
    "Lucie",
    "Lucienne",
    "Lucille",
    "Lydie",
    "Madeleine",
    "Manon",
    "Marceline",
    "Marguerite",
    "Marianne",
    "Marie",
    "Marielle",
    "Marine",
    "Marion",
    "Martine",
    "Mathilde",
    "Melanie",
    "Melissa",
    "Mia",
    "Michelle",
    "Mirabelle",
    "Mireille",
    "Monique",
    "Morgane",
    "Muriel",
    "Myriam",
    "Nadia",
    "Nadine",
    "Nathalie",
    "Nicole",
    "Nina",
    "Ninon",
    "Noelle",
    "Noemie",
    "Oceane",
    "Odile",
    "Olympe",
    "Pascale",
    "Pauline",
    "Penelope",
    "Rachel",
    "Rebecca",
    "Regine",
    "Reine",
    "Renee",
    "Rochelle",
    "Rolande",
    "Rosalie",
    "Rose",
    "Roxanne",
    "Sabine",
    "Sacha",
    "Salome",
    "Sandrine",
    "Sarah",
    "Simone",
    "Solange",
    "Solene",
    "Sophie",
    "Stephanie",
    "Suzanne",
    "Sylvie",
    "Therese",
    "Valentine",
    "Valerie",
    "Veronique",
    "Victoire",
    "Violette",
    "Virginie",
    "Vivienne",
    "Yolande",
    "Yvonne",
    "Zoe",
    "Jade",
    "Lina",
    "Mila",
    "Julia",
    "Iris",
    "Charlie",
    "Lola",
    "Romane",
    "Margaux",
    "Alix",
    "Elena",
    "Alba",
    "Nora",
    "Emmy"
];
