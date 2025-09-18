<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>envia</title>
</head>
<body>
    
<?php
// Conectar ao banco
$conexao = mysqli_connect("26.140.197.92", "usuario_remoto", "senha123", "math_game");


// Checar conexão
if (!$conexao) {
    die("Erro na conexão: " . mysqli_connect_error());
}
echo "Conectado ao banco<br>";

// Captura os dados do formulário
$nome_completo = mysqli_real_escape_string($conexao, $_POST['nome_completo']);
$nome_usuario  = mysqli_real_escape_string($conexao, $_POST['nome_usuario']);
$email         = mysqli_real_escape_string($conexao, $_POST['email']);
$senha         = mysqli_real_escape_string($conexao, $_POST['senha']);
$serie         = mysqli_real_escape_string($conexao, $_POST['serie']);

$sql = "INSERT INTO math_game.usuarios(nome_completo, nome_usuario, email, senha, serie)
values('$nome_completo','$nome_usuario', '$email', '$senha', '$serie')";
$resultado = mysqli_query($conexao, $sql);
echo">>>Usuario cadastrado com sucesso!<br>";

?>

</body>
</html>