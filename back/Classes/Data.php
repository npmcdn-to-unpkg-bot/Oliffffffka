<?php

    class Data {
        private $_pdo,
                $_data;

        public function __construct() {
            $this->_pdo = Database::connect();
        }

        public function updateAboutMe($data){
            if(isset($data['image'])){
                $this->_pdo->action(
                                   "UPDATE about
                                    SET title = ?, content = ?, name = ?, number = ?,
                                        mail = ?, snapchat = ?, instagram = ?, image = ?
                                    WHERE id = ?", array(
                                        $data['title'],
                                        $data['content'],
                                        $data['name'],
                                        $data['number'],
                                        $data['mail'],
                                        $data['snapchat'],
                                        $data['instagram'],
                                        $data['image'],
                                        $data['id']
                ));
            } else {
                $this->_pdo->action(
                                   "UPDATE about
                                    SET title = ?, content = ?, name = ?, number = ?,
                                        mail = ?, snapchat = ?, instagram = ?
                                    WHERE id = ?", array(
                                        $data['title'],
                                        $data['content'],
                                        $data['name'],
                                        $data['number'],
                                        $data['mail'],
                                        $data['snapchat'],
                                        $data['instagram'],
                                        $data['id']
                ));
            }
            return true;
        }

        public function createImage($base64){
            $quality = 100;
            $decoded = base64_decode($base64);
            $created = imagecreatefromstring($decoded);
            $newName = $this->randomString(32) . '.jpg';
            $dir = "Images/about/";
            while(file_exists($dir . $newName)){
                $newName = $this->randomString(32) . '.jpg';
            }
            $link = $dir . $newName;
            if(imagejpeg($created, $link, $quality)){
                imagedestroy($created);
            }
            return $newName;
        }

        public function updateCategory($data){
            if(isset($data['id'])){
                $this->_pdo->action(
                                    "UPDATE cats
                                     SET name = ?, datetime = NOW()
                                     WHERE id = ?", array(
                                         $data['name'],
                                         $data['id']
                                     ));
            } else {
                $this->_pdo->action(
                                    "INSERT INTO cats
                                     VALUES (NULL, ?, NOW())", array(
                                         $data['name']
                                     ));
            }
            return true;
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

    }
