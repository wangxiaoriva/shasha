
$(function(){
    var 
        lift = $('.lift'),
        liftWrap = $('.lift-wrap'),
        litem = $('.li-item'),
        louti = $('.louti');
    console.log(louti,lift,liftWrap,louti);
    
    liftWrap.on('click','.li-item',function(){
        var index = $(this).index();
        console.log(index);
        var topp = louti.eq(index).offset().top;
        $('html,body').animate({scrollTop:topp});
        //
        
    })

})

