<?php
   
    


     include "CURD.php";
    
    $page = $_GET["page"];
    
    $db = new CURD();
    
   $sql = "select * from shashaxiangshui";


    $result = $db -> find($sql);
    $len = count($result);
    $sum_page = ceil($len / 21);
    
    shuffle($result);
    
    $arr = array_slice($result, ($page-1)*21,21);
    
    $obj = array(
        "data" => $arr,
        "sum_page" => $sum_page,
        "now_page" => $page 
    );
    
    echo json_encode($obj);
?>