<?php

require_once('init.php');

    if($inputJSON = file_get_contents('php://input')){
        if($data = json_decode($inputJSON, true)){
            if(isset($data['login']) && isset($data['password'])){
                $usr = new User($data['login'], $data['password']);
                if($usr->login()){
                    echo json_encode(array("token" => $usr->publicKey()));
                } else {
                    echo json_encode(array("error" => "Incorrect username or password"));
                }
            } else {
                echo json_encode(array("error" => "You need to fill both username and password"));
            }
        } else {
            echo json_encode(array("error" => "Internal error, try again later!"));
        }
    }
