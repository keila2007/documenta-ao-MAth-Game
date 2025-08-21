<?php
require "config.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome_completo = $_POST["nome_completo"];
    $nome_usuario  = $_POST["nome_usuario"];
    $email         = $_POST["email"];
    $senha         = password_hash($_POST["senha"], PASSWORD_DEFAULT);
    $serie         = $_POST["serie"];

    $sql = "INSERT INTO usuarios (nome_completo, nome_usuario, email, senha_hash, serie)
        VALUES ("$nome_completo", "$nome_usuario ", "$email", "$senha" ,"$serie");
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $nome_completo, $nome_usuario, $email, $senha, $serie);

    if ($stmt->execute()) {
        echo json_encode(["ok" => true]);
    } else {
        echo json_encode(["ok" => false, "error" => $stmt->error]);
    }

    $stmt->close();
    $conn->close();
}
?>
