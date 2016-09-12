<?php

require_once('init.php');

$db = Database::connect();

if($data = file_get_contents('php://input')){
    if($decoded_data = json_decode($data, true)){
        $user = $decoded_data["user"];
        $token = $decoded_data["token"];
        if(!$db->simulate($user, $token)){
            echo json_encode(array("authenticated" => false));
        } else {
            echo json_encode(array("authenticated" => true));
        }
    } else {
        echo json_encode(array("authenticated" => false));
    }
} else {
    echo json_encode(array("authenticated" => false));
}
