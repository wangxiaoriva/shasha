$(function(){
    
    //点击ul显示下拉菜单
    caidan();

    //数据请求
    var xstu = $('.xiangshui-xiangqing-img');
    $.ajax({
            type:'get',
            url:'http://localhost/project/php/db.php',
            dataType:'json',
            data:{page:1},
            success:function(data){
                console.log(data.data);
                //渲染页面
                var html = template('feiyexiangqing',{result:data.data});
                xstu.html(html);

                //倒计时
                show();
                setInterval(show,1000);

                //分页效果
                fenye();

                //选项卡，点击小图切换大图
                switchImg();
                
                //选项卡的运动，慢慢出来
                selectCard();
            }
    });

     //分页效果
     function fenye(){
            //分页效果
            laypage({
                        cont: 'totalpage',
                        pages: 9,
                        skin: "#ec3e7d"
                    })
            //点击分页
            var totpage = $('#totalpage');
            totpage.on('click',function(){
                    var pagenum = $(this).find('.laypage_curr').html();
                    $.ajax({
                         type:'get',
                         url:'http://localhost/project/php/db.php',
                         dataType:'json',
                         data:{page:pagenum},
                         success:function(data){
                                console.log(data.data);
                                var html = template('feiyexiangqing',{result:data.data});
                                xstu.html(html);
                                //倒计时
                                show();
                                setInterval(show,1000);
                                //选项卡，点击小图切换大图
                                switchImg();
                                
                                //选项卡的运动，慢慢出来
                                selectCard();
                        }
                    });
            });

     }
    
    //选项卡，点击小图切换大图
    function switchImg(){
            var dl = $('.xiangshui-small');

            dl.on('click','dd',function(){
                    var index = $(this).index();
                    //切换边框
                    $(this).addClass('current').siblings().removeClass('current');
                    //切换图片
                    $(this).parents('li').find('.large-chuju-card').find('.large-chuju').eq(index).show().siblings().hide();

            });
    }

    //选项卡的运动，慢慢出来
        function selectCard(){
            var xanxiangka = $('.xiangshui-xuanxiangka'),
                liinfo = $('.xiangshui-xiangqing-imginfo');
            //当li鼠标进入的时候，选项卡慢慢出来
            liinfo.on('mouseenter',function(){
                   
                    $(this).css({
                        zIndex:100
                    }).siblings().css({zIndex:1});

                    $(this).find('.xiangshui-xuanxiangka').show();

                    $(this).find('.xiangshui-goods-price').css({
                        background:'#fff',
                        width:'308px'
                   });
                    $(this).find('.xiangshui-goods-info').css({
                        background:'#fff',
                        width:'308px'

                   });
                   $(this).find('.xiangshuiqianggou').show(100);
            });

            liinfo.on('mouseleave',function(){

                   $('.xiangshui-xuanxiangka').hide();

                    $('.xiangshui-goods-price').css({
                        background:'#fff',
                        width:'223px'
                   });
                    //
                    $('.xiangshui-goods-info').css({
                        background:'#fff',
                        width:'223px'
                   });
                    //
                    $('.xiangshuiqianggou').hide(100);
        
            });

             //跳转页面
            $('.xiangshuiqianggou').click(function(){
                location.href="http://192.168.55.12/project/baobei.html";
            })
    }

    //倒计时
    function show(){
            var spanday = $('.timecountdown');

            var date=new Date();
            var futuredate = new Date('2017/5/20');
            var time = futuredate - date;

           var arr = [];
           arr[0] = parseInt( time/(24*60*60*1000) );
           arr[1] = parseInt( time/(60*60*1000) ) % 24;
           arr[2] = parseInt( time/(60*1000))  % 60;
           arr[3] = parseInt(time/1000)%60;

           arr.forEach(function(v,i){
                        if(v < 10){
                            arr[i] = '0' + v;
                        }
                    });

            //console.log(arr);

            var setting = [' 天 ',' 时 ',' 分 ','秒'];

            var info = '';
                    for(var i=0,len=setting.length; i<len; i++){
                        info += arr[i]+setting[i];
            }
           spanday.html(info);

        };
    //点击ul显示下拉菜单
    function caidan(){
            //产品分类，下拉菜单
            var ul = $('.xsfeilei-list'),
                li = $('.xsfeilei-list-item'),
                jiantou = $('.jiantou'),
                liside = $('.xsfeilei-juti-list'),
                count = 0;
            //点击ul显示下拉菜单   
            ul.on('click','li',function(){
                    li.css({height:'auto'})
                    var self = $(this);
                    count++;
                    count %= 2;
                    if(count == 1){
                        $(this).find('.jiantou').addClass('tupian');
                        self.find(liside).css({display:'block'});
                    }else{
                        $(this).find('.jiantou').removeClass('tupian');
                        self.find(liside).css({display:'none'});
                    }
        
            });
    }

})