<?php

$recepient = "vitaliy.osvita98@gmail.com";
$sitename = "OIL-PORT";

$value = trim($_POST["value"]);
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$product = trim($_POST["product"]);
$mail = trim($_POST["mail"]);
$agree = trim($_POST["agree"]);
$message = "Тема: $value \n\n\nИмя: $name \nТелефон: $phone \nПродукт: $product \nПочта: $mail \nСоглашение: $agree";

$pagetitle = "Новый заказ с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");