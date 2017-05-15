<?php
    //引入CURD
    include 'CURD.php';

    $account = $_GET['account'];

    $db = new CURD();
    //$sql = 'select * from `user-zuoye`';
    $sql = 'select * from `user-zuoye` where account = "' . $account . '"';

    $result = $db -> find($sql);
    
    $arr = array("status" => 0);

    if(count($result)){
        $arr['status'] = 1;
    }
    echo json_encode($arr);
   
?>