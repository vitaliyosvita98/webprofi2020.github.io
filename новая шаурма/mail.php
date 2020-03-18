<?php

$recepient = "advus-neva@mail.ru";
$sitename = "Advus-neva";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$sity = trim($_POST["sity"]);
$howmuch = trim($_POST["howmuch"]);

$message = "Имя: $name \nТелефон: $phone \nГород: $sity \nТочек: $howmuch";

$pagetitle = " \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");