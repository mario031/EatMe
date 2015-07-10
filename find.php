<?php

$sensorTag1 = array('name' => 'sensortag1');
$sensorTag2 = array('name' => 'sensortag2');
$sensorTag3 = array('name' => 'sensortag3');

$message = array('僕を食べてー', '動いてないよー', '腐っちゃうよー', '忘れないでくれー');
$message_sent1 = $message[rand(0,3)];
$message_sent2 = $message[rand(0,3)];

$date_now = new DateTime();
$date_now->setTimeZone(new DateTimeZone('Asia/Tokyo'));
$today = $date_now->format('Y-m-d H:i:s');

//$get = $_GET;

// DBへ接続
$mongo = new Mongo();
// データベースを指定
$db = $mongo->selectDB("eatme");
// コレクションを指定1
$col = $db->selectCollection("eatmes");

// コレクションのドキュメントを全件取得

$cursor1 = $col->find($sensorTag1);
$cursor1->sort(array('date' => -1));
$cursor1->limit(1);
foreach ($cursor1 as $id => $tag1) {	
	$time1 = (strtotime($today)) - (strtotime($tag1["realDate"]));
	$show_min_time1 = floor($time1 / 60);
	$show_min_time1 = $show_min_time1 % 60;
}
if ($show_min_time1 > 1440) {
	// 表示
	echo " sensor1  $message_sent1\n\n";
}

$cursor2 = $col->find($sensorTag2);
$cursor2->sort(array('date' => -1));
$cursor2->limit(1);
foreach ($cursor2 as $id => $tag2) {	
	$time2 = (strtotime($today)) - (strtotime($tag2["realDate"]));
	$show_min_time2 = floor($time2 / 60);
	$show_min_time2 = $show_min_time2 % 60;
}
if ($show_min_time2 > 1440) {
	// 表示
	echo " sensor2  $message_sent2";
}

// $cursor3->find($sensorTag3);
// $cursor3->sort(array('date' => -1));
// $cursor3->limit(1);
// foreach ($cursor3 as $id => $tag3) {	
// 	$time3 = (strtotime($today)) - (strtotime($tag3["realDate"]));
// 	$show_min_time3 = floor($time3 / 60);
// 	$show_min_time3 = $show_min_time3 % 60;
// }
// if ($show_min_time3 > 1) {
// 	// 表示
// 	echo "sensor3　うごいてないよー";
// }




