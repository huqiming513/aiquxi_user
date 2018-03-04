<?php
/**
 * Created by PhpStorm.
 * User: ASUS_ZYB
 * Date: 2017/12/19
 * Time: 14:28
 */
error_reporting(0);
$_POST['tel'];
$code=$_POST['code'];
if(empty($code)){
    echo"1";
}else{
    echo $code;
};