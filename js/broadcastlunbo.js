var broadBox = $('.broadcast-con-inner'),
    broadLi = $('.broadcast-con-inner li'),
    timer = null,
    index = 0,
    liTop = broadLi.eq(0).outerHeight(),
    liLenth = broadLi.length;

    
autoPlay();
function autoPlay(){
    timer = setInterval(function(){
        index++;
        if(index >= liLenth){
            index = 1;
            //console.log(1);
            broadBox.css({top:0});
        }
        broadBox.stop(true).animate({top:-1*liTop*index});
    },1000)
}

