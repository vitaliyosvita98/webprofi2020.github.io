<?php

$recepient = "TKVENTUM74@YA.RU";
$sitename = "Ventum";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$otkuda = trim($_POST["otkuda"]);
$kuda = trim($_POST["kuda"]);
$select = trim($_POST["select"]);

$message = "Имя: $name \nТелефон: $phone \nОткуда: $otkuda \nКуда: $kuda \nТип ТС: $select";

$pagetitle = " \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");