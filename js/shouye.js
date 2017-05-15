 $(function(){
        var miLi = $('.me-li'),
            dlPos = $('.dlpos'),
            goChe = $('.go-che'),
            goWu = $('.gowuche'),
            wb = $('.wb'),
            wx = $('.wx'),
            weibo = $('.weibo'),
            weixin = $('.weixin'),
            wt = $('.t-huaa');

        //鼠标经过我的账户
        miLi.on('mouseenter',function(){
          dlPos.show();
        });
        miLi.on('mouseleave',function(){
          dlPos.hide();
        });
        //鼠标经过我的购物车
         goChe.on('mouseenter',function(){
          goWu.show();
        });
        goChe.on('mouseleave',function(){
          goWu.hide();
        });
        //鼠标经过微博
        wb.on('mouseenter',function(){
           weibo.show();
        })
        wb.on('mouseleave',function(){
          weibo.hide();
        });
        //鼠标经过微信
        wx.on('mouseenter',function(){
           weixin.show();
        })
        wx.on('mouseleave',function(){
          weixin.hide();
        });
        //回到顶部
        $('.hui-Top').on('click',function(){
           $('html body').animate({scrollTop:0},500);
        })
       
})