// *** Tỷ lệ khung hình **** //
var _templateType=1;
var _fullScreenStatus=0;
var wH=0;var wW=0;var tyle=920/470;
// Xử lý di chuyển khung thông báo trang câu hỏi và đáp án câu hỏi có thể di chuyển
$('.DraggablePanel').on('mouseenter',function(){$(this).draggable();});
$('#leftMainContent').on('mouseleave',function(){$('.DraggablePanel').mouseup();$('.DraggablePanel').each(function(){var _curPosition=$(this).position();if (_curPosition.left>($('#leftMainContent').width()-20))$(this).css('left',$('#leftMainContent').width()-30+'px');if (_curPosition.left<-20)$(this).css('left',-($(this).width()-20)+'px');if (_curPosition.top>($('#leftMainContent').height()-20))$(this).css('top',$('#leftMainContent').height()-30+'px');if (_curPosition.top<-($(this).height()-20))$(this).css('top',-($(this).height()-20)+'px');});$('.DraggableAnswer').mouseup();$('.DraggableAnswer').each(function(){var _curPosition=$(this).position();if (_curPosition.left>($('#leftMainContent').width()-20))$(this).css('left',$('#leftMainContent').width()-30+'px');if (_curPosition.left<-20)$(this).css('left',-($(this).width()-20)+'px');if (_curPosition.top>($('#leftMainContent').height()-20))$(this).css('top',$('#leftMainContent').height()-30+'px');if (_curPosition.top<-($(this).height()-20))$(this).css('top',-($(this).height()-20)+'px');});});
// *** Hết phần xử lý khung *** //
$(window).on('load',function(){$('.pageName').first().addClass('RightMenuCurrent');$('.pageNameThumb').first().addClass('RightMenuCurrent');wW=$(window).innerWidth();wH=$(window).innerHeight();resizeAll(wW,wH);$('.mainRightBotPageList').jScrollPane({autoReinitialise: true,showArrows: true});var topBotRightH=$('#mainRightTopBotRight').height();$('.mainRightTopBotRight').css('font-size', topBotRightH*0.18+'px');$('.mainRightBotPageList').css('height',$('#mainRightBot').height() - $('#mainRightBotHeader').height()+'px');$('.mainRightBotPageList').css('width',$('#mainRightBot').width() + 0.5 +'px');$('.jspPane').css('border-right',0 + 'px');$('.jspPane').css('width',$('#mainRightBot').width() - $('.jspVerticalBar').width() +'px');$('.jspTrack').css('height',$('.jspVerticalBar').height() - 2*$('.jspArrow').height() +'px');$('.pageName').css('height',$('.jspContainer').height()*0.084 +'px');if ($('.jspPane').height()<$('.jspContainer').height()) $('.jspPane').css('height',$('.jspContainer').height());$('.jspPane').css('border',$('.jspPane').width()*0.03 + 'px solid #F1F1F1');$('.jspPane').css('background','#F1F1F1');$('#leftMainContent').children('.CELPage').addClass('hidden');if ( typeof $('#wtmImage').attr('src') != typeof undefined && $('#wtmImage').attr('src').length==0 && _imageWTM.length>0) $('#wtmImage').attr('src','data:image/png;base64,' + _imageWTM);if (_imageWTM=='') $('#wtmImage').css('visibility','hidden'); $('#leftMainContent').find('video').each(function(){if (typeof $(this).attr('maxVol')!=typeof undefined){var _maxVol=parseFloat($(this).attr('maxVol')/100);if (this.volume > _maxVol)this.volume = _maxVol;}}); $('#leftMainContent').find('audio').each(function(){if (typeof $(this).attr('maxVol')!=typeof undefined){var _maxVol=parseFloat($(this).attr('maxVol')/100);if (this.volume > _maxVol)this.volume = _maxVol;}}); if (typeof ShowPlayer !== 'undefined' && $.isFunction(ShowPlayer)) ShowPlayer();}); 
$('.pageName').on('click',function(){
    if (ReNhanhCauHoi()==false){
        if (CheckMustAnswerQuestion()==true) // 19-9-16 Dũng
        {
            var page = $('#leftMainContent').children('div > .CELPage').not('.hidden');
            var id=$(this).find('.pageNameLeft').attr('id').substring(9,$(this).find('.pageNameLeft').attr('id').length);
            if (typeof $('#'+id).attr('questype')!= typeof undefined) CountAnswerMaxTime(); else if (typeof timeQuestionPageInterval!=typeof undefined)  clearInterval(timeQuestionPageInterval);
            var idIndex=$(page[page.length-1]).attr('id');
            if(idIndex != id){
                $('#leftMainContent').children('.CELPage').css('visibility','');
                $('#leftMainContent').children('.CELPage').addClass('hidden');
                clickShowPage(id);
            }
            $('.DraggablePanel').css('visibility','hidden');
            $('.DraggablePanel').css('z-index','-1');
            if (typeof NextPreviewButtonQuestionPage !== 'undefined' && $.isFunction(NextPreviewButtonQuestionPage)) NextPreviewButtonQuestionPage();
            if (typeof RestyleQuesOneChoice !== 'undefined' && $.isFunction(RestyleQuesOneChoice)) RestyleQuesOneChoice();
            if (typeof CreatePareConnectCrossAnswer !== 'undefined' && $.isFunction(CreatePareConnectCrossAnswer)) CreatePareConnectCrossAnswer();
        } else ShowMessMustAnswer();
    }
});
$('.pageNameThumb').on('click',function(){
    if (ReNhanhCauHoi()==false){
        if (CheckMustAnswerQuestion()==true) // 19-9-16 Dũng
        {
            var page = $('#leftMainContent').children('div > .CELPage').not('.hidden');
            var id=$(this).find('.pageNameLeftThumb').attr('id').substring(10,$(this).find('.pageNameLeftThumb').attr('id').length);
            if (typeof $('#'+id).attr('questype')!= typeof undefined) CountAnswerMaxTime(); else if (typeof timeQuestionPageInterval!=typeof undefined)  clearInterval(timeQuestionPageInterval);
            var idIndex=$(page[page.length-1]).attr('id');
            if(idIndex != id){
                $('#leftMainContent').children('.CELPage').css('visibility','');
                $('#leftMainContent').children('.CELPage').addClass('hidden');
                clickShowPage(id);
            }
            $('.DraggablePanel').css('visibility','hidden');
            $('.DraggablePanel').css('z-index','-1');
            if (typeof NextPreviewButtonQuestionPage !== 'undefined' && $.isFunction(NextPreviewButtonQuestionPage)) NextPreviewButtonQuestionPage();
            if (typeof RestyleQuesOneChoice !== 'undefined' && $.isFunction(RestyleQuesOneChoice)) RestyleQuesOneChoice();
            if (typeof CreatePareConnectCrossAnswer !== 'undefined' && $.isFunction(CreatePareConnectCrossAnswer)) CreatePareConnectCrossAnswer();
        } else ShowMessMustAnswer();
    }
});
function CheckMustAnswerQuestion(){$('.DragableAnswer').each(function(){if (typeof $(this).attr('clozeId') != typeof undefined && $(this).attr('id').indexOf('swerContent')>0){$(this).css('visibility','');}}); var _curPage=GetCurrentPage();if (typeof _curPage != typeof undefined){if (_curPage.attr('id').indexOf('QuestionPage_')>0){if (_curPage.attr('mustanswer')=='True') return false; else return true;}else return true;}else return true;}
function ShowMessMustAnswer(){$('#ConfirmAnswerRight_OnePage_Content_IMG').attr('src','images/button/Question/messageWarning.png');$('#ConfirmAnswerRight_OnePage_Content_Content').text('Trả lời câu hỏi này để tiếp tục!');$('#ConfirmAnswerRight_OnePage_Message').css('visibility','visible');$('#ConfirmAnswerRight_OnePage_Message').css('z-index','19998');$('#ConfirmAnswerRight_OnePage_Content_Content').css('line-height',$('#ConfirmAnswerRight_OnePage_Content_btnAccept').height() + 'px');$('#ConfirmAnswerRight_OnePage_Content_Content').css('font-size',$('#ConfirmAnswerRight_OnePage_Content_btnAccept').height()*0.5 + 'px');$('#ConfirmAnswerRight_OnePage_Content_Content').css('padding-top',$('#ConfirmAnswerRight_OnePage_Content_btnAccept').height()/1.5 + 'px');}
$('#mainRightBotHeaderLeft').on('click',function(){$(this).addClass('mainRightBotHeaderActive'); $('#mainRightBotHeaderRight').removeClass('mainRightBotHeaderActive');$('#mainRightBotPageView').children(':eq(1)').css('display','none');$('#mainRightBotPageView').children(':eq(0)').css('display','');});
$('#mainRightBotHeaderRight').on('click',function(){$(this).addClass('mainRightBotHeaderActive'); $('#mainRightBotHeaderLeft').removeClass('mainRightBotHeaderActive');$('#mainRightBotPageView').children(':eq(0)').css('display','none');$('#mainRightBotPageView').children(':eq(1)').css('display','');});
$('#mainBottomBtnReplay').on('click',function(){$('.pageName').first().trigger('click'); $('.pageNameThumb').first().trigger('click');});
function checkVersionIE(){var ua = window.navigator.userAgent;var msie = ua.indexOf ( 'MSIE ' );if ( msie > 0 ) return parseInt (ua.substring (msie+5, ua.indexOf ('.', msie ))); else return 0;}
function resizeAll(p1,p2){var container=document.getElementById('container');var content=document.getElementById('mainContent');if (_fullScreenStatus==0){if (_templateType==3){$('#rightMainContent').css('display','none');$('#leftMainContent').css('width','99.5%');$('#mainBottomFull').css('width','99.5%');if ((p1/p2)<tyle) {container.style.height= (p1 / tyle)+'px';container.style.width= (p1) * 0.757 +'px';content.style.top = ((p2 - (p1/tyle)*0.98)/tyle)+'px';content.style.left = (p1-p1*0.98)/tyle + 'px';};if ((p1/p2)>tyle) {container.style.height= (p2)+'px';container.style.width= (p2*tyle) * 0.757+'px';content.style.top = (p2-p2*0.98)/tyle +'px';};if (p1>1200 && p2>612) {container.style.height= (612)+'px';container.style.width= (1200) * 0.757+'px';content.style.top = ((p2-(612))/2) +'px';};if (p1<600) {content.style.top = ((p2-(306))/2) +'px';container.style.width=600 * 0.757 + 'px';$('#container').css('min-width',600 * 0.757 + 'px');};}else{if ((p1/p2)<tyle) {container.style.height= (p1 / tyle)+'px';container.style.width= (p1)+'px';content.style.top = ((p2 - (p1/tyle)*0.98)/tyle)+'px';content.style.left = (p1-p1*0.98)/tyle + 'px';};if ((p1/p2)>tyle) {container.style.height= (p2)+'px';container.style.width= (p2*tyle)+'px';content.style.top = (p2-p2*0.98)/tyle +'px';};if (p1>1200 && p2>612) {container.style.height= (612)+'px';container.style.width= (1200)+'px';content.style.top = ((p2-(612))/2) +'px';};if (p1<600) {content.style.top = ((p2-(306))/2) +'px';};}}var contentH=$('#mainContent').height();$('.ques-content-p').css('font-size', contentH*0.035+'px');$('.ans-content-p').css('font-size', contentH*0.025+'px');$('#mainTittleContent').css('font-size', contentH*0.03+'px');$('.seo-bold').css('font-size', contentH*0.025+'px');$('.seo-light').css('font-size', contentH*0.025+'px');$('.pageNameLeft').css('font-size', contentH*0.022+'px');$('.pageNameRight').css('font-size', contentH*0.022+'px');$('#mainRightBotHeaderContent').css('font-size', contentH*0.023+'px');$('#mainRightBotHeaderContent').css('line-height', contentH*0.05+'px');$('#mainRightBotHeaderContentRight').css('font-size', contentH*0.023+'px');$('#mainRightBotHeaderContentRight').css('line-height', contentH*0.05+'px');var topBotRightH=$('#mainRightTopBotRight').height();$('.mainRightTopBotRight').css('font-size', topBotRightH*0.2+'px');$('.mainRightBotPageList').css('height',$('#mainRightBot').height() - $('#mainRightBotHeader').height()+'px');$('.mainRightBotPageList').css('width',$('#mainRightBot').width() + 0.5 +'px');$('.jspPane').css('width',$('#mainRightBot').width() - $('.jspVerticalBar').width() +'px');$('.jspTrack').css('height',$('.jspVerticalBar').height() - 2*$('.jspArrow').height() +'px');$('.pageName').css('height',$('#mainContent').height()*0.05 +'px');$('.pageNameThumb').css('height',$('#mainContent').height()*0.132 +'px');$('.DraggablePanel').css('visibility','hidden');$('.DraggablePanel').css('z-index','-1');if (typeof InitMindMapIMG !== 'undefined' && $.isFunction(InitMindMapIMG)) InitMindMapIMG();$('.jspPane').css('border',$('.jspPane').width()*0.03 + 'px solid #F1F1F1');if (typeof ResizeBorderAndText !== 'undefined' && $.isFunction(ResizeBorderAndText)) ResizeBorderAndText(); if (typeof RestyleQuesOneChoice !== 'undefined' && $.isFunction(RestyleQuesOneChoice)) RestyleQuesOneChoice(); if (typeof ResizeTblPageList !== 'undefined' && $.isFunction(ResizeTblPageList)) ResizeTblPageList(); }
$('#container').on('mouseover',function(){$('.jspPane').each(function(){var borderWidth = parseFloat($(this).css('border-left-width'));if (borderWidth>($(this).width()*0.03))$(this).css('border-width',$(this).width()*0.03 + 'px');})});
var _imageWTM='';
function ExitFullScreen(){$('#leftMainContent').css('left','0.25%');$('#leftMainContent').css('top','0.5%');$('#leftMainContent').css('bottom','auto');$('#leftMainContent').css('right','auto');$('#leftMainContent').css('width','75%');$('#leftMainContent').css('height','92%');wW=$(window).innerWidth();wH=$(window).innerHeight();resizeAll(wW,wH);if (_templateType==3) $('#leftMainContent').css('width','99.5%');if (_templateType==1){$('#leftMainContent').css('right','0.25%');$('#leftMainContent').css('top','0.5%');$('#leftMainContent').css('bottom','auto');$('#leftMainContent').css('left','auto');$('#leftMainContent').css('width','75%');$('#leftMainContent').css('height','92%');}_fullScreenStatus=0;}
$('#mainBottomBtnZoom').on('click',function(){_fullScreenStatus=1;var docElement, request;docElement = document.getElementById('leftMainContent');request = docElement.requestFullScreen || docElement.webkitRequestFullScreen || docElement.mozRequestFullScreen || docElement.msRequestFullscreen; if(typeof request!='undefined' && request){request.call(docElement);var left=0.0;var top=0.0;var bot=0.0;var right=0.0;var w=0.0;var h=0.0;wW=screen.width;wH=screen.height;if (wW/wH == 4/3){w=wW;h=w*10/16;top=(wH-h)/2;bot=top;}if (wW/wH == 16/9){h=wH;w=h*16/10;left=(wW-w)/2;right=left;}if (_templateType==3){$('#leftMainContent').css('left',left + 'px');$('#leftMainContent').css('top',top + 'px');$('#leftMainContent').css('bottom',bot + 'px');$('#leftMainContent').css('right',right + 'px');$('#leftMainContent').css('width',parseFloat(100*(wW-right-left)/wW) + '%' );$('#leftMainContent').css('height','auto');}else{$('#leftMainContent').css('left',left + 'px');$('#leftMainContent').css('top',top + 'px');$('#leftMainContent').css('bottom',bot + 'px');$('#leftMainContent').css('right',right + 'px');$('#leftMainContent').css('width','auto');$('#leftMainContent').css('height','auto');}}});
// *** Thoát fullScreenMode *** //
document.addEventListener('fullscreenchange', function() {var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;if (fullscreenElement == null) {ExitFullScreen();}});
document.addEventListener('webkitfullscreenchange', function() {var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;if (fullscreenElement == null) {ExitFullScreen();}});
document.addEventListener('mozfullscreenchange', function() {var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;if (fullscreenElement == null) {ExitFullScreen();}});
document.addEventListener('MSFullscreenChange', function() {var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;if (fullscreenElement == null) {ExitFullScreen();}});// *** Hết xử lý thoát fullScreenMode *** //
$('.QuestionResultPanelContent_Bottom_NoScore_Right').on('click',function(){$(this).parent().parent().css('z-index',-1);$(this).parent().parent().css('visibility','hidden');});
$('.QuestionResultPanelContent_Bottom').on('click',function(){$(this).parent().parent().css('z-index',-1);$(this).parent().parent().css('visibility','hidden');});
function GetMaxIndex(pageID){var _obj=$('#'+pageID);var _max=_obj.zIndex();_obj.children().each(function(){var _k=GetMaxIndexSub($(this));if (_k>_max)_max=_k;   });return _max;}
function GetMaxIndexSub(_obj){var _max=_obj.zIndex();_obj.children().each(function(){if (typeof $(this) != typeof undefined && $(this).zIndex()>_max)_max=$(this).zIndex();});return _max;}
function ResizeTblPageList(){var _allHeight=0.0;$('#tblPageList').children().each(function(){if (typeof parseFloat($(this).height()) != typeof undefined)_allHeight+= 1 + parseFloat($(this).height());});$('.ConfirmAnswerLeft_Left_btnPre').each(function(){$(this).children().first().css('height',parseFloat(0.8 * $('.ConfirmAnswerLeft_Left_btnPre').parent().parent().parent().height())-1 + 'px');});$('.ConfirmAnswerLeft_Left_btnNext').each(function(){$(this).children().first().css('height',parseFloat(0.8 * $('.ConfirmAnswerLeft_Left_btnNext').parent().parent().parent().height())-1 + 'px');});if (_allHeight<$('#tblPageList').parent().parent().height() && $('#tblPageList').parent().attr('class')=='jspPane') $('#tblPageList').parent().css('height',$('#tblPageList').parent().parent().height()+'px'); else if (_allHeight>$('#tblPageList').parent().parent().height() && $('#tblPageList').parent().attr('class')=='jspPane') $('#tblPageList').parent().css('height',_allHeight+'px');}// *** Phục vụ đa phương tiện *** //
function ShowPlayer(){$('.iconAudio').each(function(){$(this).parent().parent().mouseenter(function(){$(this).find('audio').each(function(){$(this).attr('controls', true);});});$(this).parent().parent().mouseleave(function(){$(this).find('audio').each(function(){$(this).attr('controls', false);});});});$('#leftMainContent').find('audio').each(function(){var _aWidth=$(this).width();var _parWidth=$(this).parent().parent().width();if (_parWidth<_aWidth){$(this).parent().css('left',(_parWidth-_aWidth)/2 + 'px');} else if (_parWidth>_aWidth){$(this).parent().css('left',(_parWidth-_aWidth)/2 + 'px');}});$('video').mouseenter(function(){$(this).attr('controls', true);if (typeof $(this).attr('id')!=typeof undefined && $(this).attr('id')=='mainRightTopBotLeft_Video'){$(this).attr('controls', false);}});$('video').mouseleave(function(){$(this).attr('controls', false);if (typeof $(this).attr('id')!=typeof undefined && $(this).attr('id')=='mainRightTopBotLeft_Video'){$(this).attr('controls', false);}});}
function PlayMedia(namePage){$('#' + namePage).find('video').each(function(){if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0 && $(this).hasClass('VideoDemonstration')==false)this.play();});$('#' + namePage).find('audio').each(function(){if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0)this.play();});}
function PauseMedia(namePage){$('#' + namePage).find('video').each(function(){if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0)this.pause();});$('#' + namePage).find('audio').each(function(){if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0)this.pause();});}
function StopMedia(namePage){$('#' + namePage).find('video').each(function(){if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0){$(this).get(0).pause();this.currentTime = 0;}});$('#' + namePage).find('audio').each(function(){if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0){$(this).get(0).pause();this.currentTime = 0;}});}
function StopAllMedia(){$('#leftMainContent').children('.CELPage').each(function(){$(this).find('video').each(function(){if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0){this.pause();this.currentTime = 0;}});$(this).find('audio').each(function(){if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0){this.pause();this.currentTime = 0;}});});}
function stopFlash(IdCelPage) {var child = $('#' + IdCelPage).find('EMBED');for (var i = 0; i < child.length; i++) {var id = $(child[i]).attr('id');document.getElementById(id).StopPlay();}}
function playFlash(IdCelPage) {var child = $('#' + IdCelPage).find('EMBED');for (var i = 0; i < child.length; i++) {var id = $(child[i]).attr('id');document.getElementById(id).Play();}}
function ControlMedia(){var timeSlide = $('#slider-value').html();var timeSlide = parseFloat(parseFloat(timeSlide).toFixed(1));var _curPage = GetCurrentPage();var namePage =_curPage.attr('id');$('#' +namePage).find('video').each(function(){if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0){var vid = document.getElementById($(this).attr('id'));vid.currentTime = timeSlide;}});$('#' + namePage).find('audio').each(function(){if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0){var aid = document.getElementById($(this).attr('id'));aid.currentTime = timeSlide;}});}
// **** Phục vụ chủ đề **** //
function inlineTest($el,$insert, saveOptions, testOptions) {var svg = $el.html();var canvas = $el.find(testOptions && testOptions.selector || 'svg')[0];svgAsDataUri(canvas,saveOptions,function(uri){$insert.append('<img class="ThemeIMGBackground" src=' + uri + ' />');});}
// **** Phục vụ thuyết minh, đồng bộ //
function GetCurrentPage() {var _curPage;$('#leftMainContent').children().each(function(){if ($(this).hasClass('CELPage')==true && $(this).hasClass('hidden')==false){_curPage=$(this);return _curPage;}});return _curPage;}
function StopGlobalDemonstration(stop)
{
    var timeSlide = $('#slider-value').html();var timeSlide = parseFloat(parseFloat(timeSlide).toFixed(1));var time = timeSlide;var timeStop = time.toFixed(1) * 10;var nubmerPage = checkNumberPage();var list = listObject[nubmerPage];var endTime = list.time;var percent = Math.abs(((100 * timeStop) / (endTime * 10)) - 100);var _curTime= endTime - (percent * endTime/100);
    var _curPage=GetCurrentPage();
    if (typeof _curPage != typeof undefined)
    {
        _curPage.find('audio').each(function(){
            if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0 && $(this).hasClass('AudioDemonstration'))
            {
                if (stop==true) this.pause();
                else
                {
                    if (_curTime<this.duration){this.currentTime=_curTime;this.play();}
                }
            }
        });
    }
    $('#mainRightTopBotLeft').find('video').each(function(){
        if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0)
        {
            if (stop==true) this.pause();
            else
            {
                if (_curTime<this.duration){this.currentTime=_curTime;this.play();}
            }
        }
    });
}
window.onresize = function(event){
    wW=$(window).innerWidth();wH=$(window).innerHeight();
    resizeAll(wW,wH); 
    // Thay đổi kích thước chủ đề
    if (typeof NextPreviewButtonQuestionPage !== 'undefined' && $.isFunction(NextPreviewButtonQuestionPage)) NextPreviewButtonQuestionPage();
    if (typeof NextPreviewButtonQuestionPage !== 'undefined' && $.isFunction(NextPreviewButtonQuestionPage)) NextPreviewButtonQuestionPage();
    if (typeof RestyleQuesOneChoice !== 'undefined' && $.isFunction(RestyleQuesOneChoice)) RestyleQuesOneChoice();
    if (typeof CreatePareConnectCrossAnswer !== 'undefined' && $.isFunction(CreatePareConnectCrossAnswer)) CreatePareConnectCrossAnswer();
    if (typeof InitDragableAnswer !== 'undefined' && $.isFunction(InitDragableAnswer)) InitDragableAnswer();
    if (typeof InitQuestionPages !== 'undefined' && $.isFunction(InitQuestionPages)) InitQuestionPages();
};
var listBackGroundAudio = [{Name:'BGAudio_0', StartTime:0, SRC:'Data/aee9cb21-77e4-48a9-a178-8988b1c63d53.mp3' , Duration: 40.0979166}];
var listSilent_BGAudio_0 = [{StartTime:25.32, Duration:14.28}];
function BackGroundAudio(_nextBack)
{
    var timeSlide = $('#slider-value').html();
    var timeSlide = parseFloat(parseFloat(timeSlide).toFixed(1));
    var time = timeSlide;
    var timeStop = time.toFixed(1) * 10;
    nubmerPage = checkNumberPage();
    var list = listObject[nubmerPage];
    if (typeof list == typeof undefined) return false;
    var listPage = list.listPage;
    var endTime;var percent;var _curTime;
    var _pageTime;var _bgAudioTime=0;var _bgAudioTimePrevious=0;
    var _bgAudio = document.getElementById('BGAudio');
    _bgAudio.volume=0.5;
    if (listPage != null)
    {
        var endTime = list.time;
        var percent = Math.abs(((100 * timeStop) / (endTime * 10)) - 100);
        var _demonstrationTime= endTime - (percent * endTime/100);
        if (_nextBack==true) _demonstrationTime=0;
        var _curPage=GetCurrentPage();
        if (typeof window['listBackGroundAudio'] != typeof undefined)
        {
            // Tổng time từ đầu đến trang hiện tại
            _pageTime=0.0;
            for (i=0;i<nubmerPage;i++){_pageTime += listObject[i].time;}
            _pageTime+=_demonstrationTime; // Thời gian hiện tại
            // Tìm đối tượng BackGround Audio phù hợp - duration + startTime
            _bgAudioTime=0.0;
            _bgIndex=0;
            for (i=0;i<listBackGroundAudio.length;i++)
            {
                _bgAudioTime += listBackGroundAudio[i].Duration;
                _bgAudioTime += listBackGroundAudio[i].StartTime;
                if (i>0)
                {
                    _bgAudioTimePrevious += listBackGroundAudio[i-1].Duration;
                    _bgAudioTimePrevious += listBackGroundAudio[i-1].StartTime;
                }
                if (_bgAudioTime>_pageTime)
                {
                    _bgIndex=i;
                    i=listBackGroundAudio.length;
                }
            }
            if (_pageTime>_bgAudioTime && _bgAudio.paused==false)
            {
                 $('#BGAudio').attr('src','');
                _bgAudio.pause();
            }
            if (_pageTime<_bgAudioTime)
            {
                if (typeof $('#BGAudio').attr('src') != typeof undefined && $('#BGAudio').attr('src') != listBackGroundAudio[_bgIndex].SRC) $('#BGAudio').attr('src',listBackGroundAudio[_bgIndex].SRC);
                if (typeof $('#BGAudio').attr('src') == typeof undefined) $('#BGAudio').attr('src',listBackGroundAudio[_bgIndex].SRC);
                var time = _pageTime-listBackGroundAudio[_bgIndex].StartTime-_bgAudioTimePrevious;
                _bgAudio.currentTime = time;
                if (playingGlobal==true) _bgAudio.play(); else _bgAudio.pause();
            }
        }
    }
}
