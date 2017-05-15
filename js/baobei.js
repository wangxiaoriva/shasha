$(function(){
 
    var ul = $('.xsfeilei-list');
    var li = $('.xsfeilei-list-item');
    var jiantou = $('.jiantou');
    var liside = $('.xsfeilei-juti-list');
    //产品分类，下拉菜单
    var count = 0;
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
    //选项卡，点击小图切换大图
    var dl = $('.xiangshui-small');

    dl.on('click','dd',function(){
        var index = $(this).index();
        //切换边框
        $(this).addClass('current').siblings().removeClass('current');
        //切换图片
        $(this).parents('li').find('.large-chuju-card').find('.large-chuju').eq(index).show().siblings().hide();

    });

    //选项卡的运动，慢慢出来
    var xanxiangka = $('.xiangshui-xuanxiangka');
    var liinfo = $('.xiangshui-xiangqing-imginfo');
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
})