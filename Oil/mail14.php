<?php

$recepient = "vitaliy.osvita98@gmail.com";
$sitename = "OIL-PORT";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$product = trim($_POST["product"]);
$mail = trim($_POST["mail"]);
$agree = trim($_POST["agree"]);
$message = "Имя: $name \nТелефон: $phone \nПродукт: $product \nПочта: $mail \nСоглашение: $agree";

$pagetitle = "Конкретный продукт\"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");