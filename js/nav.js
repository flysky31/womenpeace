$(document).ready(function(){
    //pc nav
    // $('.depth').hover(function(){
    //     $(this).find('ul').slideDown();
    // }, function(){
    //     $(this).find('ul').slideUp();
    // })

    //nav
    $('header').mouseover(function(){
        $('.logo a').css('background','url("../img/logo2.png") no-repeat center');
        $('.ver_box a').css('color','#1a3571');
    }).mouseout(function(){
        // $('.logo a').css('background','url(../img/logo.png) no-repeat center');
        $('.ver_box a').css('color','#fff');
    });
    var count = 0;
    var h = $(window).height()
    $('.nav_ham').click(function(){
        $('#box').height(h);
        $('.m_gnb').height(h);
        $('body').toggleClass("on");
        
        count++;
        if(count%2==1){
            $('.m_gnb').stop().animate({left:0},'slow');
            $(this).find('span').addClass('on');
            $('#box').show();
        }else{
            $('.m_gnb').stop().animate({left:'-100%'});
            $(this).find('span').removeClass('on');
            $('#box').hide();
        }
    });
    
    //모바일 네비 클릭
    var onoff = [false,false,false,false,false,false]
    var arrcount = onoff.length;
    $('.m_depth>a').click(function(){
        $(this).toggleClass("on");
        $('.m_depth>a').not(this).removeClass('on');        
        var ind=$(this).parent().index();
    
        $(this).next().slideUp('slow');
        if(onoff[ind]==false){
            $(this).next().slideDown('slow');

            $(this).parents().siblings().children('ul').slideUp('fast');

            for(var i=0; i<arrcount; i++) onoff[i]=false;

            onoff[ind]=true;
        }else{
            $(this).next().slideUp('fast');
            onoff[ind]=false;
        }
    });

    $(window).scroll(function(){
        var sctop = $(window).scrollTop();
       // console.log(sctop);

        if(sctop > 30){
            $('header').addClass('scroll');
            $('.logo a').css('background','url("/img/logo2.png") no-repeat center');
            $('.ver_box a').css('color','#1a3571');
        }else{
            $('header').removeClass('scroll');
            $('.logo a').css('background','url("/img/logo2.png") no-repeat center');
        $('.ver_box a').css('color','#fff');
        }
    })

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#topBtn.go_top').addClass("on");
        } else {
            $('#topBtn.go_top').removeClass("on");
        }
    });

    // Scroll to the top of the page when the "top" button is clicked
    $('#topBtn.go_top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
})

