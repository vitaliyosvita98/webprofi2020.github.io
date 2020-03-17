<?php

$recepient = "vitaliy.osvita@mail.ru";
$sitename = "OIL-PORT";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$agree = trim($_POST["agree"]);
$message = "Имя: $name \nТелефон: $phone  \nПочта: $mail \nСоглашение: $agree";

$pagetitle = "Лабораторный анализ \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");