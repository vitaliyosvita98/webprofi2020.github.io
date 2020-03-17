<?php

$recepient = "vitaliy.osvita@mail.ru";
$sitename = "OIL-PORT";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$coment = trim($_POST["coment"]);
$agree = trim($_POST["agree"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $mail \nКоментарий: $coment \nСоглашение: $agree";

$pagetitle = "Подбор смазочных материалов \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");