<?php
    include "CURD.php";
    
    $page = $_GET["page"];
    
    $db = new CURD();
    
    $sql = "select src,title,text,info,status from ad_info";


    $result = $db -> find($sql);
    $len = count($result);
    $sum_page = ceil($len / 24);
    
    shuffle($result);
    
    $arr = array_slice($result, ($page-1)*24,24);
    
    $obj = array(
        "data" => $arr,
        "sum_page" => $sum_page,
        "now_page" => $page 
    );
    
    echo json_encode($obj);
    
?>
