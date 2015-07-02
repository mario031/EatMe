<?php
$get = $_GET;
// DBへ接続
$mongo = new Mongo();
// データベースを指定
$db = $mongo->selectDB("eatme");
// コレクションを指定1
$col = $db->selectCollection("eatmes");
// コレクションのドキュメントを全件取得
$cursor = $col->find();

$cursor->sort(array('date' => -1));
$cursor->limit(1);
// 表示
foreach ($cursor as $id =>$obj) {
	var_dump($obj);
}