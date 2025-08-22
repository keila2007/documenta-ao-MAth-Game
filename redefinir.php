<?php
header("Content-Type: application/json");
include "conexao.php";

$novaSenha = $_POST['novaSenha'] ?? '';
$email     = $_POST['email'] ?? '';

if (!$novaSenha || !$email) {
    echo json_encode(["ok" => false, "error" => "Informe email e senha"]);
    exit;
}

$senha_hash = password_hash($novaSenha, PASSWORD_DEFAULT);

$sql = "UPDATE usuarios SET senha_hash = ? WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $senha_hash, $email);

if ($stmt->execute() && $stmt->affected_rows > 0) {
    echo json_encode(["ok" => true]);
} else {
    echo json_encode(["ok" => false, "error" => "E-mail não encontrado"]);
}

$stmt->close();
$conn->close();
?>
