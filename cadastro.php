<?php
header("Content-Type: application/json");
include "conexao.php";

$nome_completo = $_POST['nome_completo'] ?? '';
$nome_usuario  = $_POST['nome_usuario'] ?? '';
$email         = $_POST['email'] ?? '';
$senha         = $_POST['senha'] ?? '';
$serie         = $_POST['serie'] ?? '';

if (!$nome_completo || !$nome_usuario || !$email || !$senha || !$serie) {
    echo json_encode(["ok" => false, "error" => "Preencha todos os campos"]);
    exit;
}

$senha_hash = password_hash($senha, PASSWORD_DEFAULT);

$sql = "INSERT INTO usuarios (nome_completo, nome_usuario, email, senha_hash, serie) 
        VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $nome_completo, $nome_usuario, $email, $senha_hash, $serie);

if ($stmt->execute()) {
    echo json_encode(["ok" => true]);
} else {
    echo json_encode(["ok" => false, "error" => $stmt->error]);
}
$stmt->close();
$conn->close();
?>
