<?php
<<<<<<< HEAD
//$get = $_GET;
$cursor = array();
=======
$get = $_GET;
>>>>>>> 02138b3108bb7db8fc0d5b35e019f27949b970f7
// DBへ接続
$mongo = new MongoClient();
// データベースを指定
$db = $mongo->selectDB("eatme");
// コレクションを指定1
$col = $db->selectCollection("eatmes");

// 10分に一回monogoを覗きに行く
// $w = new EvTimer(0., 600, NULL, function($w, $revents){
// コレクションのドキュメントを全件取得
<<<<<<< HEAD
$sensorTag1 = array('name' => 'sensortag1');
$sensorTag2 = array('name' => 'sensortag2');
$sensorTag3 = array('name' => 'sensortag3');

$cursor1 = $col->find($sensortag1);
$cursor1->sort(array('date' => -1));
$cursor1->limit(1);
setcookie("key_1",$cursor1(array('date')));
if ($_COOKIE["key_1"] =! $cursor1(array('date')) ) {
	// 表示
	foreach ($cursor1 as $id =>$obj) {
		var_dump($obj);
	}
	setcookie("key_1",$cursor1(array('date')));
}

$cursor2 = $col->find($sensortag2);
$cursor2->sort(array('date' => -1));
$cursor2->limit(1);
setcookie("key_2",$cursor2(array('date')));
if ($_COOKIE["key_2"] =! $cursor2(array('date')) ) {
	// 表示
	foreach ($cursor2 as $id =>$obj) {
		var_dump($obj);
	}
	setcookie("key_2",$cursor2(array('date')));
}

$cursor3 = $col->find($sensortag3);
$cursor3->sort(array('date' => -1));
$cursor3->limit(1);
setcookie("key_3",$cursor3(array('date')));
if ($_COOKIE["key_1"] =! $cursor3(array('date')) ) {
	// 表示
	foreach ($cursor3 as $id =>$obj) {
		var_dump($obj);
	}
	setcookie("key_3",$cursor3(array('date')));
}


// });

// Ev::run();
=======
$cursor = $col->find();

$cursor->sort(array('date' => -1));
$cursor->limit(1);
// 表示
foreach ($cursor as $id =>$obj) {
	var_dump($obj);
}
>>>>>>> 02138b3108bb7db8fc0d5b35e019f27949b970f7
