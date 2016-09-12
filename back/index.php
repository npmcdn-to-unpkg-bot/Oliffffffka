<?php

    require_once('init.php');

    $db = Database::connect();

    if(isset($_GET['post']) && is_numeric($_GET['post'])){
        if(!$result = $db->get('posts', $_GET['post'])){
            echo json_encode(array("error" => "Cannot access this post"));
        } else {
            echo json_encode(array("posts" => $result));
        }
    } else if(isset($_GET['cat']) && is_numeric($_GET['cat'])) {
        if(!$result = $db->getCat($_GET['cat'])){
            echo json_encode(array("error" => "No post in this category"));
        } else {
            echo json_encode(array("posts" => $result));
        }
    } else {
        if(!$result = $db->get('posts')){
            echo json_encode(array("error" => "No posts avaiable right now"));
        } else {
            echo json_encode(array("posts" => $result));
        }
    }
