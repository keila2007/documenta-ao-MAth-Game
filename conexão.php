<?php
$host = "localhost";  // ou 127.0.0.1
$user = "root";       // seu usuário MySQL
$pass = "";           // sua senha do MySQL
$db   = "formulariomathgame";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

$conn->set_charset("utf8");
?>
