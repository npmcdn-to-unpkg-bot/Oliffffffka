<?php

    require_once('init.php');

    $db = Database::connect();

?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Creating User</title>
</head>
<body>
    <form action="" method="post">
        <input type="text" name="login" placeholder="login">
        <input type="password" name="password" placeholder="password">
        <input type="submit" value="submit">
    </form>
</body>
</html>

<?php
    if(isset($_POST['login']) && isset($_POST['password'])){
        $db->createUser($_POST['login'], $_POST['password']);
    }
?>
