<?php

    require_once('init.php');

    $db = Database::connect();

    if(isset($_GET['id']) && is_numeric($_GET['id'])){
        if(!$result = $db->get('cats', $_GET['id'])){
            echo json_encode(array("error" => "Cannot access this category"));
        } else {
            echo json_encode(array("cats" => $result));
        }
    } else {
        if(!$result = $db->get('cats')){
            echo json_encode(array("error" => "No posts avaiable right now"));
        } else {
            echo json_encode(array("cats" => $result));
        }
    }
