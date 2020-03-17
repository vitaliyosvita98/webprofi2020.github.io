<?php

$recepient = "hello@eeeboy.ru";
$sitename = "eeeboy agency";
$tema = trim($_POST["tema"]);
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "\"$tema $sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");