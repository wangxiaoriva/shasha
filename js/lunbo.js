var bannerBox = $('.banner-img'),
    imgs = $('.banner-img img'),
    now = 0,
    next = 0,
    timer = null,
    spans = $('.circle-box span');
autoPlay();
function imgSwitch(){
    imgs.eq(now).stop(true).fadeTo(500,0);
    imgs.eq(next).stop(true).fadeTo(500,1);
    spans.eq(now).removeClass('current');
    spans.eq(next).addClass('current');
    now = next;
}
//自动播放
function autoPlay(){
        timer = setInterval(function(){
        next++;
        next %= imgs.length;
        imgSwitch();
    },2000)
}
//鼠标悬停
bannerBox.on('mouseenter',function(){
    clearInterval(timer);
})
bannerBox.on('mouseleave',function(){
    autoPlay();
})
//点击小圆圈，切换对应的图片
//console.log(spans.length);
for(var i = 0; i < spans.length; i++){
    spans[i].index = i;
    spans[i].onmouseenter = function(){
        clearInterval(timer);
        next = this.index;
        imgSwitch();
    }
}