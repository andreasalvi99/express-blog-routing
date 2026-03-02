//^ Importo express dopo aver fatto npm i express
const express = require("express");

//^ Invoco express
const app = express();

//^ Per convenienza creo la const della porta
const port = 3000;

//^ Per convenienza creo la const dell'URL
const appUrl = `http://localhost:${port}`;

//^ Array di elementi da restituire con la chiamata get
const posts = [
  {
    titolo: "Ciambellone",
    contenuto:
      "Un classico dolce da forno soffice e profumato, perfetto per colazione o merenda.",
    img: "ciambellone.jpeg",
    tags: ["dolci", "forno", "tradizione"],
  },
  {
    titolo: "Cracker alla barbabietola",
    contenuto:
      "Cracker croccanti con barbabietola nell’impasto, ideali come snack o aperitivo.",
    img: "cracker_barbabietola.jpeg",
    tags: ["salato", "barbabietola", "snack"],
  },
  {
    titolo: "Pane fritto dolce",
    contenuto:
      "Fette di pane fritte e zuccherate, una ricetta semplice e golosa della tradizione casalinga.",
    img: "pane_fritto_dolce.jpeg",
    tags: ["dolci", "fritto", "tradizione"],
  },
  {
    titolo: "Pasta alla barbabietola",
    contenuto:
      "Pasta dal colore vivace preparata con barbabietola, dal gusto delicato e leggermente dolce.",
    img: "pasta_barbabietola.jpeg",
    tags: ["primo", "barbabietola", "pasta"],
  },
  {
    titolo: "Torta paesana",
    contenuto:
      "Dolce rustico tipico della tradizione, preparato con ingredienti semplici e sapori autentici.",
    img: "torta_paesana.jpeg",
    tags: ["dolci", "tradizione", "rustico"],
  },
];

//^ Middle ware
app.use(express.static("public"));

//^ Chiamata alla homepage ("/"), restituisce oggetto json come response
app.get("/", (req, res) => {
  res.json({
    message: "Server del mio blog",
  });
});

//^ Chiamata alla page bacheca ("/bacheca"), restituisce oggetto json come response (contiene array)
app.get("/bacheca", (req, res) => {
  res.json({
    results: posts,
    success: true,
  });
});

//^ Server in ascolto, si verifica con npm run watch
app.listen(port, () => {
  console.log(`Server online on ${appUrl}`);
});
