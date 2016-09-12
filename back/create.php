<?php

require_once('init.php');

$db = Database::connect();

if($inputJSON = file_get_contents('php://input')){
    if($data = json_decode($inputJSON, true)){
        if(isset($data['type'])){

            if($data['type'] == 'about'){
                if(
                    isset($data['id']) &&
                    isset($data['title']) &&
                    isset($data['content']) &&
                    isset($data['name']) &&
                    isset($data['number']) &&
                    isset($data['mail']) &&
                    isset($data['snapchat']) &&
                    isset($data['instagram'])
                ) {
                    $upload = new Data();
                    if(isset($data['image']) && $img_url = $upload->createImage($data['image'])){
                        $data['image'] = 'http://localhost/Oliwka/back/Images/about/' . $img_url;
                    }
                    if($upload->updateAboutMe($data)){
                        echo json_encode(array("success" => "Updated!"));
                    } else {
                        echo json_encode(array("error" => "Not all data sent"));
                    }
                } else {
                    echo json_encode(array("error" => "Everything is required"));
                }

            } else if($data['type'] == 'category'){

                if(isset($data['name'])){
                    $upload = new Data();
                    if($upload->updateCategory($data)){
                        echo json_encode(array("success" => "Updated!"));
                    } else {
                        echo json_encode(array("error" => "Not all data sent"));
                    }
                } else {
                    echo json_encode(array("error" => "Everything is required"));
                }
            }
        } else {
            echo json_encode(array("error" => "No request type"));
        }
    } else {
        echo json_encode(array("error" => "Internal error, try again later!"));
    }

}
