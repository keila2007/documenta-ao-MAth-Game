<?php
require "config.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario_ou_email = $_POST["usuario_ou_email"];
    $senha = $_POST["senha"];

    $sql = "SELECT * FROM usuarios WHERE nome_usuario = ? OR email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $usuario_ou_email, $usuario_ou_email);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows > 0) {
        $user = $resultado->fetch_assoc();
        if (password_verify($senha, $user["senha_hash"])) {
            echo json_encode(["ok" => true]);
        } else {
            echo json_encode(["ok" => false, "error" => "Senha incorreta"]);
        }
    } else {
        echo json_encode(["ok" => false, "error" => "Usuário não encontrado"]);
    }

    $stmt->close();
    $conn->close();
}
?>
