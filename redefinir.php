<?php
require "conexao.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $novaSenha = password_hash($_POST["novaSenha"], PASSWORD_DEFAULT);

    $sql = "UPDATE usuarios SET senha_hash = ? WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $novaSenha, $email);

    if ($stmt->execute()) {
        echo json_encode(["ok" => true]);
    } else {
        echo json_encode(["ok" => false, "error" => $stmt->error]);
    }

    $stmt->close();
    $conn->close();
}
?>
