<?
$day = 6;//date("w");//4

switch($day){
	case 6:
		echo "Суббота<hr>";
		break;
	case 0:
		echo "Воскресенье<hr>";
		break;
	default:
		echo "Будний день";	
}
