<?php
session_start();

$servername = "localhost";
$username = "kirill";
$password = "root";
$dbname = "registration";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// Обработка данных из формы
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Проверяем, существует ли уже пользователь с таким именем
    $check_query = "SELECT * FROM users WHERE username = '$username'";
    $check_result = $conn->query($check_query);
    if ($check_result->num_rows > 0) {
        echo "Пользователь с таким именем уже существует.";
    } else {
        // Добавляем нового пользователя
        $insert_query = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
        if ($conn->query($insert_query) === TRUE) {
            echo "Пользователь успешно зарегистрирован.";
        } else {
            echo "Ошибка при регистрации пользователя: " . $conn->error;
        }
    }
}

$conn->close();


