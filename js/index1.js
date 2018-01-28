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

    function playcontr(){
        if (isAndroid) {
            videoALL.style.width = window.screen.width + 'px';
            videoALL.style.height = window.screen.height + 'px';
        }
        videobox.style.display = "block";
        videoALL.play();
        btn.style.display = "none";
        videoend.style.display = "none";
    };

    videoALL.addEventListener('pause',function(){
        videoALL.style.width = clientWidth + 'px';
        btn.style.display = "block";
    })

    videoALL.addEventListener("ended",function(){
        videoALL.pause();
        // videobox.style.display = "none";
        // videoend.style.display = "block";
        var html = '<img alt="" src="images/chatbg.jpg" class="chatbg">\n' +
            '          <div class="keyborde animated fadeInUp">\n' +
            '              <!-- <img class="comImg hot-foot" src="images/bg3-2.png" alt=""> -->\n' +
            '              <div class="voice_bar animated">点击下方按钮进行选择</div>\n' +
            '              <ul class="year-box">\n' +
            '                  <li>第一个</li>\n' +
            '                  <li>第二个</li>\n' +
            '                  <li>第三个</li>\n' +
            '                  <li>第四个</li>\n' +
            '                  <li>第五个</li>\n' +
            '                  <li>第六个</li>\n' +
            '                  <li>第七个</li>\n' +
            '                  <li>第八个</li>\n' +
            '                  <li>第九个</li>\n' +
            '              </ul>\n' +
            '              <a href="javascript:;" class="sent-btn">发送</a>\n' +
            '          </div>';

        setTimeout(function () {
            $('.voice_bar').addClass('flash');
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
        },1000)
        $('.ringPage3').show();
        $('.chat').append(html)
        $('.chat').show();
        // $('.keyborde').addClass('fadeInUp').css({"opacity":1})
    });


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
         $('.ringPage2').hide();
         $('.videoBox').show();
         // $('#media')[0].play();

    })


      // $('#media')[0].onended = function() {
      //     // alert("音频播放完成");
      //     $('.ringPage3').show();
      //     $('.chat').show();
      //     $('.keyborde').addClass('fadeInUp').css({"opacity":1})
      // };




    // })
}
// }