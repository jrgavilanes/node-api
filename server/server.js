const express = require('express');

const PORT = process.env.PORT || 3000;

let app = new express();

app.get('/', (req, res) => {
  res.send('hola nano');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
