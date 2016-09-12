<?php

    class Database {

        private static $_connection;
        private $_pdo,
                $_query;
        public $_results;

        private function __construct() {
            try {
                $this->_pdo = new PDO(
                    'mysql:host=127.0.0.1;dbname=test_oli',
                    'root',
                    ''
                );
            } catch (PDOException $e) {
                echo 'There was a problem with connecting to your database ' . $e->getMessage();
            }
        }

        public static function connect() {
			if(!isset(self::$_connection)) {
				self::$_connection = new Database();
			}
			return self::$_connection;
        }

        public function action($sql, $vars = null) {
            try {
                $this->_query = $this->_pdo->prepare($sql);
                $this->_query->execute($vars);
                $this->_results = $this->_query->fetchAll(PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                return false;
            }

            if ($this->_results != NULL) {
                return $this->_results;
            } else {
                return false;
            }
        }


        public function findCategory($id) {
            if(is_numeric($id)){
                if(!$this->action("SELECT name FROM cats WHERE id = ?", array($id))){
                    return false;
                } else {
                    return $this->_results;
                }
            } else {
                return false;
            }
        }

        public function get($table, $id = null) {
            if(!isset($id)) {
                if(!$this->action("SELECT * FROM {$table}")){
                    return false;
                } else {
                    return $this->_results;
                }
            } else {
                if(!$this->action("SELECT * FROM {$table} WHERE id = ?", array($id))){
                    return false;
                } else {
                    return $this->_results;
                }
            }
        }

        public function getCat($id) {
            if(!$this->action("SELECT * FROM posts WHERE category_id = ?", array($id))){
                return false;
            } else {
                return $this->_results;
            }
        }

        public function findUser($login){
            if(!$this->action("SELECT salt, hash FROM users WHERE login = ?", array($login))){
                return false;
            } else {
                return $this->_results;
            }
        }

        public function getUserKey($login){
            if(!$this->action("SELECT public FROM users WHERE login = ?", array($login))){
                return false;
            } else {
                return $this->_results;
            }
        }

        public function createUser($login, $password){
            $salt = $this->randomString(32);
            $hash = Hash::make($password, $salt);
            $public = $this->randomString(32);
            $private = Hash::make($salt, $this->randomString(32));
            $this->_query = $this->_pdo->prepare("INSERT INTO users VALUES (NULL, ?, ?, ?, ?, ?, NOW())");
            $this->_query->execute(array($login, $hash, $salt, $public, $private));
        }

        private function randomString($length){
            $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < $length; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
            return $randomString;
        }

        public function simulate($user, $token){
            if(!$this->action("SELECT public, private FROM users WHERE login = ?", array($user))){
                return false;
            } else {
                $db_public_key = $this->_results[0]["public"];
                $db_private_key = $this->_results[0]["private"];
                if(Hash::make($token, $db_private_key) == Hash::make($db_public_key, $db_private_key)){
                    return true;
                } else {
                    return false;
                }
            }
        }

    }
