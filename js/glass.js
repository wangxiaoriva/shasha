$(function(){
    var arrows = $('.glass-arrows'),
    imgyidong = $('.glass-img-yidong'),
    lis = $('.glass-img-yidong li'),
    num = 0,
    swImg = $('.swImg'),
    smWrap = $('.smallImg-wrap'),
    laWrap = $('.glass-largeImg-wrap'),
    filter = $('.filter'),
    lwImg = $('.lwImg'),
    max = lis.length-5;

    //左箭头切换图片
    arrows.eq(0).click(function(){
        num--;
        if(num < 0){
            num = 0;
        }
        imgyidong.stop(true).animate({left:-102*num});
    });
    //右箭头切换图片
    arrows.eq(1).click(function(){
        num++;
        if(num > max){
            num = max;
            return;
        }
        imgyidong.stop(true).animate({left:-102*num});
    });

    //移入小图，更换对应大图，改变边框样式
    imgyidong.on('mouseenter','.simg-item',function(){
        var index = $(this).index();
        //改变边框样式
        $(this).addClass('current').siblings().removeClass('current');
        //移入小图，更换对应大图
        var imgs=$('.simg-item img').eq(index).attr('data-url');
        swImg.attr('src',imgs);
        lwImg.attr('src',imgs);
    })
    //鼠标移入商品图片，显示滤镜，显示大图
    var smWrapleft = smWrap.offset().left,
        smWraptop = smWrap.offset().top,
        filterWidth = filter.outerWidth(),
        filterHeight = filter.outerHeight();

    smWrap.on('mousemove',function(e){
        var e = e;
        e.preventDefault();

        var x = e.pageX - smWrapleft - filterWidth/2,
            y = e.pageY - smWraptop - filterHeight/2;

        x = x < 0 ? 0 : (x > 100 ? 99 : x);
        y = y < 0 ? 0 : (y > 149 ? 148 : y);
        //滤镜移动
        filter.css({left:x,top:y});
        //大图移动
        lwImg.css({left:-2*x,top:-2*y});
        console.log(x,y);
        laWrap.show();
        filter.show();
    });
    smWrap.on('mouseleave',function(){
        laWrap.hide();
        filter.hide();
    })
   
})