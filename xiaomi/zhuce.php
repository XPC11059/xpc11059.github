<?php
//注册

//$mysqli = new mysqli('localhost','root','');
//$mysqli->set_charset('utf8');
//$sql = "create database if not exists zhuce";
//$isSuccess = $mysqli->query($sql);
//if($isSuccess){
//    echo "创建数据库成功";
////   选择数据库名字
//    $mysqli->select_db('zhuce');
////    创建表
//    $sql = "create table if not exists zhuce_info(
//        id int PRIMARY key not NULL auto_increment,
//        username VARCHAR(20) unique not null,
//        password VARCHAR(16) not null,
//        tel CHAR (11) not null,
//        sex CHAR (1) not null
//)ENGINE = InnoDB charset=utf8";
//    $mysqli->query($sql);
$username = $_POST['username'];
$password = $_POST['password'];
$tel = $_POST['tel'];
$sex = $_POST['sex'];

$mysqli=new mysqli('localhost','root','','zhuce');
if ($mysqli){
    echo '连接数据库成功';
    $mysqli->set_charset('utf8');

//预编译模板
    $sql = "insert into zhuce_info (username,password,tel,sex) VALUES (?,?,?,?)";
    $stmt = $mysqli->prepare($sql);


    $stmt->bind_param("ssss",$username,$password,$tel,$sex);
//执行
    if($stmt->execute()){
        echo'注册成功';

    }else{
        die('注册失败');
    }
    $stmt->close();
    $mysqli->close();

}else{
    die('连接数据库失败');
}







