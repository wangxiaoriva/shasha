<?php
   
   if(empty($_GET)){
      $id = $_POST['id'];
   }else{
       $id = $_GET['id'];
   }
   
   if(empty($id)){
      $result = array(
         'info' => '用户编号必须',
         'status' => 0
      );
      echo json_encode($result);
      exit();
   }
   
    //引入db.php基础文件
   include_once("CURD.php");
   
   //创建DB实例（操作数据库的对象）
   $db = new CURD();
   
   //定义sql语句
   $sql = 'delete from `user-zuoye` where id = '.$id;
  
   //调用删除 delete(数据库名字,sql)   删除成功返回1 不成功返回0
   $result = $db->delete($sql);
   
   if($result){
      $result = array(
         'info' => '操作成功',
         'status' => 1
      );
     
   }else{
      $result = array(
         'info' => '操作失败',
         'status' => 0
      );
   }
   
   echo json_encode($result);
   
?>