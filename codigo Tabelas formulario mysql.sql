use formulariomathgame;

-- Tabela de usuários (Cadastro + Login)
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(150) NOT NULL,
    nome_usuario VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    serie ENUM('1EM','2EM','3EM') NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de recuperação de senha (Esqueci Senha + Recuperar Senha)
CREATE TABLE recuperacao_senha (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    token VARCHAR(255) NOT NULL UNIQUE,   -- código de verificação
    expiracao DATETIME NOT NULL,          -- até quando o token é válido
    usado BOOLEAN DEFAULT FALSE,          -- se já foi utilizado
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- relação com usuários
    CONSTRAINT fk_usuario_recuperacao FOREIGN KEY (usuario_id)
        REFERENCES usuarios(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

select * from usuarios;