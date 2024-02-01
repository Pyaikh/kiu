<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $course = $_POST["course"];
    $university = $_POST["university"];
    $age = $_POST["age"];
    $phone = $_POST["phone"];
    $company = $_POST["company"];


    $to = "kirkk040@gmail.com";
    $subject = "Новая заявка на участие";
    $message = "ФИО: $name\n";
    $message .= "Курс: $course\n";
    $message .= "Университет: $university\n";
    $message .= "Возраст: $age\n";
    $message .= "Телефон: $phone\n";
    $message .= "Компания: $company\n";


    if (mail($to, $subject, $message)) {
        echo "Сообщение отправлено!";
    } else {
        echo "Что-то пошло не так, попробуйте еще раз.";
    }
}

