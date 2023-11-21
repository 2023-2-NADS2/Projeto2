```SQL
CREATE DATABASE 'todos_por_eles';

USE todos_por_eles;

CREATE TABLE animais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    tipo ENUM('Gato', 'Cachorro', 'Outro') NOT NULL,
    genero ENUM('Fêmea', 'Macho') NOT NULL,
    dataNascimento DATE,
    imagem VARCHAR(255),
    castrado ENUM('Castrado', 'Não Castrado') NOT NULL,
    descricao TEXT NOT NULL
);

SELECT * FROM animais;

```

