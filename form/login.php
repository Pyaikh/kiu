<?php

session_start();

// Подключение к базе данных
$servername = "localhost";
$username = "kirill";
$password = "root";
$dbname = "registration";

$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка подключения
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// Обработка данных из формы
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Поиск пользователя в базе данных
    $query = "SELECT * FROM users WHERE (username = '$username' OR email = '$username') AND password = '$password'";
    $result = $conn->query($query);

    if ($result->num_rows == 1) {
        // Авторизация успешна
        $_SESSION['username'] = $username;
        header("Location: index.html");
        exit();
    } else {
        // Неверное имя пользователя или пароль
        echo "Неверное имя пользователя или пароль.";
    }
}

// Закрытие соединения с базой данных
$conn->close();

