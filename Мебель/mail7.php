<?php

$recepient = "nn-diamond@yandex.ru";
$sitename = "Valente";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$razmer = trim($_POST["razmer"]);
$message = "Имя: $name \nТелефон: $phone\n Размер: $razmer";

$pagetitle = "Рассчитать размер \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");