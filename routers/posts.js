const express = require("express");
const router = express.Router();
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

//^ Index
router.get("/", (req, res) => {
  res.json({
    results: posts,
    message: "Lista dei post",
    success: true,
  });
});

//^ Show
router.get("/:id", (req, res) => {
  const postId = req.params.id;

  res.json({
    results: posts.req,
    message: `Ecco il post ${postId}`,
    success: true,
  });
});

//^ Store
router.post("/", (req, res) => {
  res.json({
    message: `Creato nuovo post`,
    success: true,
  });
});

//^ Update
router.put("/:id", (req, res) => {
  const postId = req.params.id;

  res.json({
    message: `post ${postId} modificato interamente`,
    success: true,
  });
});

//^ Destroy
router.delete("/:id", (req, res) => {
  const postId = req.params.id;

  res.json({
    message: `post ${postId} eliminato`,
    success: true,
  });
});

module.exports = router;
