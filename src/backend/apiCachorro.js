const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'todos_por_eles'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao MySQL');
});

app.post('/adicionarAnimal', upload.single('imagem'), (req, res) => {
    console.log('Dados do Formulário Recebidos:', req.body); 
    if (req.file) {
        console.log('Arquivo Recebido:', req.file.path); 
    }

    const { nome, tipoAnimal, genero, dataNascimento, castrado, descricao } = req.body;
    const imagem = req.file ? req.file.path : '';

    const sql = `INSERT INTO animais (nome, tipo, genero, dataNascimento, imagem, castrado, descricao) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(sql, [nome, tipoAnimal, genero, dataNascimento, imagem, castrado, descricao], (err, result) => {
        if (err) {
            console.error('Erro ao Inserir no Banco de Dados:', err); 
            throw err;
        }
        res.send('Dados do animal adicionados com sucesso');
    });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
