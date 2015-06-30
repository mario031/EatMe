<?php

$post = $_POST;
// DBへ接続
$mongo = new Mongo();

// データベースを指定
$db = $mongo->selectDB("eatme");

// コレクションを指定1
$col = $db->selectCollection("eatmes");

$col->save($post);
//var_dump($post);

include("find.php");
