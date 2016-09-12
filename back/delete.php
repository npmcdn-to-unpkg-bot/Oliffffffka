<?php

    require_once 'init.php';

    $db = Database::connect();

    if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        if(isset($_GET['id'])){
            $db->action("DELETE FROM cats WHERE id = ?", array($_GET['id']));
        }
    }
