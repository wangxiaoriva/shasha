<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
    <title></title>
</head>
<body>
    <?php
        include 'CURD.php';
        $db = new CURD();
        $sql = 'insert into `user-zuoye` (account,password,name,age,sex,phone,address)
        values("'.$_POST['account'].'","'.$_POST['password'].'","星星","25","女","'.$_POST['phone'].'","西藏")';
                                                          

        $result = $db -> insert($sql);
       
            if($result){
                echo "注册成功,<a href='../user.php'><span class='time'>3</span>秒后自动跳转到登录页面</a>";
            }else{
                echo "注册失败";
            }
    ?>
</body>
<script type="text/javascript">
    window.onload = function(){
                var timeCon = document.querySelector('.time'),
                    count = 3;
                var timer = setInterval(function(){
                    count--;
                    timeCon.innerHTML = count;
                    if(count <= 0){
                        clearInterval(timer);
                        var url = timeCon.parentNode.getAttribute('href');
                        location.href = url;
                    }
                },1000);
            }
</script>
</html>