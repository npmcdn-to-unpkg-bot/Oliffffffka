<?php

    require_once('init.php');

    $db = Database::connect();

    if(!$result = $db->get('about')){
        echo json_encode(array("error" => "No posts avaiable right now"));
    } else {
        echo json_encode(array("about" => $result));
    }
