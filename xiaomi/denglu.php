<?php
$username=$_POST['username'];
$password=$_POST['password'];
//登录
$mysqli = new mysqli('localhost','root','','zhuce');
if($mysqli){
//    echo '连接成功 ';
    $mysqli->set_charset('utf8');
    $sql = "select * from zhuce_info where username=? and password=?";
    $stmt = $mysqli->prepare($sql);
    $stmt->bind_param('ss',$username,$password);
    if($stmt->execute()){
//        echo '查询成功';
        $result = $stmt->get_result();
        $array=$result->fetch_all(MYSQLI_ASSOC);
//        print_r($array);
        if ($array){
//            echo '<script>alert("登录成功");location.href="xiaomi.html"</script>';
//            header('location:xiaomi.html');
            echo '1';
        }else{
            echo '登录失败';
        }
//        if ($stmt->num_rows==0){
//            header('location:xiaomi.html');
//        }else{
//            echo "密码错误";
//        }
    }else{
        die('查询失败');
    }
    $stmt->close();
    $mysqli->close();
}else{
    die('连接失败');
}

