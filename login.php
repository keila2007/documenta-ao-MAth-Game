<?php
header("Content-Type: application/json");
include "conexao.php";

$usuario_email = $_POST['usuario_ou_email'] ?? '';
$senha         = $_POST['senha'] ?? '';

if (!$usuario_email || !$senha) {
    echo json_encode(["ok" => false, "error" => "Preencha todos os campos"]);
    exit;
}

// Verifica se o usuário existe
$sql = "SELECT id, nome_completo, nome_usuario, email, senha_hash FROM usuarios 
        WHERE nome_usuario = ? OR email = ? LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $usuario_email, $usuario_email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    if (password_verify($senha, $user['senha_hash'])) {
        session_start();
        $_SESSION['usuario_id'] = $user['id'];
        $_SESSION['nome'] = $user['nome_completo'];
        echo json_encode(["ok" => true]);
    } else {
        echo json_encode(["ok" => false, "error" => "Senha incorreta"]);
    }
} else {
    echo json_encode(["ok" => false, "error" => "Usuário não encontrado"]);
}

$stmt->close();
$conn->close();
?>
