const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ROUTE DE TEST
app.get('/', (req, res) => {
  res.json({ message: 'Backend Popcorn & Opinions prêt 🚀' });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
