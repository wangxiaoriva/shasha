$(function(){
    var canshu = $('.shangpincanshu');
    var glasslift = $('.glasslift');
    var shangpincanshu = $('.shangpincanshu');

    canshu.on('click','.shangpincanshu-item',function(){
        var index = $(this).index();
        //console.log(index);
        $(this).addClass('current').siblings().removeClass('current');
        //每个参数的高度
        var top = glasslift.eq(index).offset().top;
        //console.log(top);

        $('html,body').animate({scrollTop:top-50});

        
        
        
    });
    //滚动条事件
    var shangpintop = shangpincanshu.offset().top;

    $(window).scroll( function(e) { 

        var scrollTop = document.body.scrollTop;

        if(scrollTop < shangpintop ) {
            
            shangpincanshu.css({
               position:'static'
            })

        }else{
            
            shangpincanshu.css({
                position:'fixed',
                top:0,
                right:'75px',
                boxShadow:'2px 4px 5px rgba(0, 0, 0, 0.2)'
            });
        }
       
        

     } );

})