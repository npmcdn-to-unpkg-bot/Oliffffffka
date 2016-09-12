<?php

    class User {

        private $_salt,
                $_hash,
                $_login,
                $_passwd,
                $_pdo,
                $_public;

        public function __construct($login, $password){
            $this->_pdo = Database::connect();
            if($this->find($login)){
                $this->_login = $login;
                $this->_passwd = $password;
            }
        }

        private function find($login){
            if(!$user = $this->_pdo->findUser($login)){
                $this->_login = "undefined";
                $this->_passwd = "undefined";
                $this->_salt = "undefined";
                $this->_hash = "undefined";
                return false;
            } else {
                $this->_salt = $user[0]["salt"];
                $this->_hash = $user[0]["hash"];
                return true;
            }
        }

        public function login(){
            if(Hash::make($this->_passwd, $this->_salt) === $this->_hash){
                if(!$user = $this->_pdo->getUserKey($this->_login)){
                    return false;
                } else {
                    $this->_public = $user[0]["public"];
                    return true;
                }
            } else {
                return false;
            }
        }

        public function publicKey(){
            return $this->_public;
        }

    }
