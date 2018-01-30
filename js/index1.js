// $(function () {
window.onload=function(){

    var videoALL = document.getElementById('videoALL'),
        videobox = document.getElementById('videobox'),
        btn = document.getElementById('btn'),
        videoend =  document.getElementById('videoend');
    var clientWidth = document.documentElement.clientWidth;
    var clientHeight = document.documentElement.clientHeight;
    videoALL.style.width = clientWidth + 'px';
    videoALL.style.height = 'auto';
    document.addEventListener('touchmove', function(e){e.preventDefault()}, false);

    function stylediv(divId){
        divId.style.width = clientWidth + 'px';
        divId.style.height = clientHeight +200+ 'px';
    }
    stylediv(videobox);
    stylediv(videoend);

    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    var videoAndroidInit = 0;
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;

    function playcontr(){

        if (isAndroid) {
            videoALL.style.width = window.screen.width + 'px';
            videoALL.style.height = window.screen.height + 'px';
        }
        if (!videoAndroidInit) {
               setTimeout(function () {
                   $('.ringPage2').hide();
               },1000)
                videoALL.play();
                videoAndroidInit = 1;
        }
        
        videobox.style.display = "block";
        btn.style.display = "none";
        videoend.style.display = "none";
    };

    videoALL.addEventListener('pause',function(){
        videoALL.style.width = clientWidth + 'px';
        btn.style.display = "block";
    })



      // $('#videoALL').on('ended',function () {
      //     // videoALL.pause();
      //     // setTimeout(function () {
      //     //     $('.voice_bar').addClass('flash');
      //     // },1000);
      //     // // $('.ringPage3').show();

      //     // $('.chat').show().css({"opacity":1,"visibility":"visible"});
      //     // $('.keyborde').show().css({"opacity":1,"visibility":"visible"});

      //     // $('.keyborde').addClass('fadeInUp');
      // })

     $('#videoALL').on("play", function () {
            setTimeout(function(){
                setEnd();
            },300)
        })

        function setEnd(){
           var videoEnd = 0;
             $('#videoALL').on("ended", function () {
                if (!videoEnd) {
                    $(".p4").show();
                    $('#videoALL')[0].pause();
                    if(isAndroid){
                        $(".p3").hide();
                        $('.keyborde').addClass('fadeInUp');
                    }else{
                        setTimeout(function(){
                            $(".p3").hide();
                            $('.keyborde').addClass('fadeInUp');
                        },100);
                    }
                    videoEnd = 1;
                }
            });
        }


    //首页铃声
    var audio = document.getElementById('musicid');
    //消息推送的声音
    var audio2 =  document.getElementById("audio2");
    //解锁的声音
    var audio3 =  document.getElementById('audio3');
    //热聊的声音
    var audio4 =  document.getElementById('audio4');
    // alert(audio2)
    //首页进入
    $('.ringPage1').fadeIn(200,function(){
        var _this = this;
        //七秒后跳转到下一个页面 同时铃声停止
        setTimeout(function(){
            audio.pause();

            $('.ringPage2').fadeIn(200,function(){
                $('.ringPage1').hide();
                //第二章页面进入后 一秒以后显示消息 同时播放短息消息
                setTimeout(function(){
                    audio2.play()
                    $('.bg21').fadeIn(200,function(){
                        $('.nextPage').fadeIn()
                    });
                },400)
            })

        },3000)
    });
    setTimeout(function(){
        audio.pause();
    },3000)
    // 页面当前时间
    getTime();
    var timer=setInterval(function(){
        getTime();
        clearInterval(timer);
    },60000)
    function getTime(){
        var Odate = new Date();
        var  hours  = Odate.getHours(),
            minutes = Odate.getMinutes(),
            month = Odate.getMonth()+1,
            day =Odate.getDate(),
            weekDay = Odate.getDay(),
            weekStr ='';
        $('.hours').html(hours);
        $('.minutes').html(toDub(minutes));
        $('.monthDay').html(month+'月'+day+'日');
        if(weekDay === 1){
            weekStr = '星期一';
        }else if(weekDay === 2){
            weekStr = '星期二';
        }else if(weekDay === 3){
            weekStr = '星期三';
        }else if(weekDay === 4){
            weekStr = '星期四';
        }else if(weekDay === 5){
            weekStr = '星期五';
        }else if(weekDay === 6){
            weekStr = '星期六';
        }else if(weekDay === 7){
            weekStr = '星期日';
        }
        $('.weekDay').html(weekStr)
        function toDub(num) {
            return num<10 ? '0'+num: num;
        }
    }

	 // 设置video的宽高
	  var height=$(window).height();
	  var width=$(window).width();
	  $('#media').css({'height':height,"width":width});

    $('.ringPage2').on('click',function(){
        $('#videobox').addClass('fadeIn');
         playcontr()
         audio2.pause();
         audio3.play();
         // $('.ringPage2').hide();
         $('.videoBox').show();
         // $('#media')[0].play();

    })


      // $('#media')[0].onended = function() {
      //     // alert("音频播放完成");
      //     $('.ringPage3').show();
      //     $('.chat').show();
      //     $('.keyborde').addClass('fadeInUp').css({"opacity":1})
      // };

    var selectIndex = '';
    $('.year-box li').click(function () {
        selectIndex = $(this).index();
        var html = $(this).html();
        // $(this).addClass('active');
        $('.voice_bar').html(html).css({"color":"#000"});
        $('.sent-btn').addClass('active');
    })

    $('.sent-btn').click(function () {
        window.location.href="share.html?select="+selectIndex;
    })


    // })
}
// }