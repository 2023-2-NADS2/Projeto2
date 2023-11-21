const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());

const JWT_SECRET = 'TodosPorEles2023';

const users = [
  { username: 'todosporeles0@gmail.com', passwordHash: '$2b$10$4X4XbLLstBfb1kBo2079E.hIdce9NW2thXO0xmcITIOu3ih6fZOE2' }
];

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (user && await bcrypt.compare(password, user.passwordHash)) {
    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: "Login bem-sucedido!", token });
  } else {
    res.status(401).send('Credenciais inválidas.');
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
