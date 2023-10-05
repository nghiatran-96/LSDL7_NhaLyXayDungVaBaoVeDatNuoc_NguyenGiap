//version 27/08/2016 | hoa to kio 
//start
function startTime() {
        nextBackPage(true);
        timer = null;
        timer = setInterval(playTime, step);
}
//stop
function stopTime() {
    clearInterval(timer);
}
//play time
function playTime() {

    var max = parseInt($("#slider_Cpage_0").slider("option", "max"));
    stepFrame = stepFrame + (step / 1000);
    if (stepFrame <= max) 
    {
        $("#slider_Cpage_0").slider("option", "value", stepFrame);
        $("#slider_Cpage_0").slider("option", "step", (step / 1000));
        $("#slider-value").html($("#slider_Cpage_0").slider("option", "value"));
        var value = $("#slider_Cpage_0").slider("option", "value");
        //PercentPage(value, false);
        mainAnimate(value);

        var _curPage=GetCurrentPage();
        if (Math.ceil(stepFrame)==max)
        {
            _curPage.attr('fullViewed','True');
            _curPage.children().each(function(){
                if (typeof $(this).attr('id') != typeof undefined && $(this).attr('id').indexOf('_Demonstration')>0)
                {
                    $(this).find('video').each(function(){
                        if (this.canplay)
                        {
                            this.pause();
                            this.currentTime=0;
                        }
                    });
                    $(this).find('audio').each(function(){
                        if (this.canplay)
                        {
                            this.pause();
                            this.currentTime=0;
                        }
                    })
                }
            });

            var _bgAudio = document.getElementById('BGAudio');

            _bgAudio.pause();

        }
        else _curPage.removeAttr('fullViewed');

    }
    else 
    {
        stopTime();
        var _curPage=GetCurrentPage();
        _curPage.attr('fullViewed','True');
        
        var _bgAudio = document.getElementById('BGAudio');

        _bgAudio.pause();

        _curPage.children().each(function(){
            if (typeof $(this).attr('id') != typeof undefined && $(this).attr('id').indexOf('_Demonstration')>0)
            {
                $(this).find('video').each(function(){
                        try {
                        this.pause();
                        this.currentTime=0;
                        } catch(err){}
                });
                $(this).find('audio').each(function(){
                        try {
                        this.pause();
                        this.currentTime=0;
                        } catch(err){}
                });
            }
        });

        var lengthObject = parseInt(listObject.length) - 1;
        nubmerPage = checkNumberPage();
        if (lengthObject >= (nubmerPage + 1))
        {
            nubmerPage = nubmerPage + 1;
            stepFrame = 0;
            var total = listObject[nubmerPage].time;
            setValue(stepFrame, total);
            nextBackPage(true);
        }
    }
    if (CheckEndOfAllSlide()==true && typeof EndLecture !== 'undefined' && $.isFunction(EndLecture)) EndLecture();
    if(typeof FishnishLecture != typeof'undefined' && $.isFunction(FishnishLecture))FishnishLecture();
	
    //new 07-09-2016
    nubmerPage = checkNumberPage();
	var listPage = listObject[nubmerPage].listPage;
	playAllAfterAnimte(listPage,stepFrame);
	//end new 07-09-2016
}
//end silde => end media---9-11-2016
function FishnishLecture()
{
    var pageCount = $("#leftMainContent").children('div > .CELPage');
    var odCurrPage = checkNumberPage();
    if (odCurrPage == pageCount.length -1) {
    var currPage = GetCurrentPage();
    if (typeof currPage.attr('fullViewed')!= typeof undefined) playingGlobal= false;
        else playingGlobal = true;
  }
}
function CheckEndOfAllSlide()
{
    var j=0;
    var i=0;
    $("#leftMainContent").children('div > .CELPage').each(function(){
        i++;
        if (typeof $(this).attr('fullViewed') != typeof undefined)
            j++;
    });
    if (j==i)
        return true;
    else
        return false;
}

function checkNumberPage() {
    var page = $("#leftMainContent").children('div > .CELPage');
    for (var i = 0; i < page.length; i++) {
        if (!$(page[i]).hasClass("hidden")) {

            if (i + 1 < page.length && !$(page[i + 1]).hasClass("hidden"))
                return i + 1;
            else
                return i;
        }

    }
}

function setValue(value, maxTime) {
    $("#slider_Cpage_0").slider("option", "value", value);
    $("#slider_Cpage_0").slider("option", "max", maxTime);
}

function setHiddenPage() {
    $("#leftMainContent").children('div').each(function (index) {
        $(this).addClass("hidden");
        if (index == nubmerPage)
        {
            $(this).removeClass("hidden");
            var list = listObject[nubmerPage];var listPage = list.listPage;ResetTime(listPage);
        }
    });
}

function ShowPage(i,$page1,$page2) {
    var list = listObject[i+1];
    var listPage = list.listPage;
    if (listPage != null) {
        if (listPage[0].type == 0) {
            var fnName = listPage[0].NameFunction;
            if (fnName.split('(')[0] == "CoverFromLeft" || fnName.split('(')[0] == "CoverFormTopLeft" || fnName.split('(')[0] == "CoverFormBottomLeft" || fnName.split('(')[0] == "CoverFromBottomRight"
                || fnName.split('(')[0] == "CoverFromRight" || fnName.split('(')[0] == "CoverFromBottomRight" || fnName.split('(')[0] == "CoverFromTopRight" || fnName.split('(')[0] == "CoverFromBottom"
                || fnName.split('(')[0] == "CoverFromTop") {
                $page1.removeClass("hidden");
            }
            else {
                if (fnName.split('(')[0] == "UncoverFormRight" || fnName.split('(')[0] == "UncoverFormBottomRight" || fnName.split('(')[0] == "UncoverFormTopRight" || fnName.split('(')[0] == "UncoverFromLeft"
                    || fnName.split('(')[0] == "UncoverFormBottomLeft" || fnName.split('(')[0] == "UncoverFormTopLeft" || fnName.split('(')[0] == "UncoverFormTop" || fnName.split('(')[0] == "UncoverFormBottom") {
                    $page1.removeClass("hidden");
                    var zindex = $page2.css('z-index');
                    $($page2).attr("data-zindex", zindex);
                    $($page2).css("z-index", "999");
                } else {
                    if (fnName.split('(')[0] == "PushFromLeft" || fnName.split('(')[0] == "PushFromRight" || fnName.split('(')[0] == "PushFromBottom" || fnName.split('(')[0] == "PushFromTop") {
                        $page1.removeClass("hidden");
                    }
                    else {
                        if (fnName.split('(')[0] == "WipefromLeft") {
                            $page1.removeClass("hidden");
                            $page2.addClass("hidden");
                        } else {
                            $page1.removeClass("hidden");
                            $page2.addClass("hidden");
                        }
                        
                    }
                }
            }
        }
    }
}

function backPage(i, $page1) {
    var list = listObject[i - 1];
    var listPage = list.listPage;
    if (listPage != null) {
        if (listPage[0].type == 0) {
            var fnName = listPage[0].NameFunction;
            if (fnName.split('(')[0] == "UncoverFormRight" || fnName.split('(')[0] == "UncoverFormBottomRight" || fnName.split('(')[0] == "UncoverFormTopRight"
            || fnName.split('(')[0] == "UncoverFromLeft" || fnName.split('(')[0] == "UncoverFormBottomLeft" || fnName.split('(')[0] == "UncoverFormTopLeft"
            || fnName.split('(')[0] == "UncoverFormTop" || fnName.split('(')[0] == "UncoverFormBottom") {
                var check = $("#leftMainContent").children('div > #PageBlack');
                if (check != "undefined") {
                    $("#PageBlack").css("background", "black");
                }
            } else {
                $page1.removeClass("hidden");


            }
        }
    }
}
//set z-index page
function setZIndex(){
    var page = $("#leftMainContent").children('div > .CELPage');
    for (var i = 0; i < page.length; i++) {
        var dataZindex = $(page[i]).attr("data-zindex");
        if (dataZindex != undefined) {
            $(page[i]).css({ "z-index": dataZindex, "left": "", "top": "", "right": "", "bottom": "" });
        }
    }
}
//click menu right show page
function clickShowPage(idPage){
    if (CheckMustAnswerQuestion()==true) // 19-9-16 Dũng
    {
        $('#mainBottomBtnPlayPause').show();
        $('#mainBottomBtnPause').hide();
        stop();
        setZIndex();
    	var checkPageBlack=$("#leftMainContent").find("#PageBlack");
    	if(checkPageBlack.length > 0){
    		$("#PageBlack").css("z-index", -1);
    	}
        var page = $("#leftMainContent").children('div > .CELPage'); 
        $("#leftMainContent").find("#"+idPage).removeClass('hidden');
        $('.pageName').removeClass('RightMenuCurrent');
        $('#RightMenu'+idPage).parent().addClass('RightMenuCurrent');

        $('.pageNameThumb').removeClass('RightMenuCurrent');
        $('#RightMenuT'+idPage).parent().addClass('RightMenuCurrent');

        nubmerPage = checkNumberPage();
        setTransparentPageBalck();
        stopTime();
        StopAllMedia();
    	
    	stopAllFlash(); //new 26-08
    	
        playFlash(idPage);
    	var pageSetBeginObject = $("#leftMainContent").find("#"+idPage);
    	setBeginObject(pageSetBeginObject);

        clearTopLeftRightBottom();

        stepFrame = 0;

        var list = listObject[nubmerPage];
        var listPage = list.listPage;
        ResetTime(listPage);

        var total = list.time;
        setValue(0, total);
        timer = null;
        if ($('#mainBottomBtnPlayPause').css("display") != "none") {
            timer = null;
            timer = setInterval(playTime, step);
        }
        else {
            stopTime();
            timer = null;
        }

        $(".clear-nextback").removeClass('hidden');
        $("#mainBottomBtnNextDisable").hide();
        $("#mainBottomBtnPVDisable").hide();
        if ((nubmerPage) >= (page.length - 1)) {
            $("#mainBottomBtnNext").addClass('hidden');
            $("#mainBottomBtnNextDisable").show();
        }
		
		if (nubmerPage == 0) {
            $("#mainBottomBtnPV").addClass('hidden');
            $("#mainBottomBtnPVDisable").show();
        }
        
        $('.DraggablePanel').each(function(){
            $(this).css('visibility','hidden');
            $(this).css('z-index','-1');
        });
        if (typeof CountAnswerMaxTime !== 'undefined' && $.isFunction(CountAnswerMaxTime)) CountAnswerMaxTime();
        if (typeof MediaDemonstationPage !== 'undefined' && $.isFunction(MediaDemonstationPage)) MediaDemonstationPage('1'); 
        if (typeof InitDragableAnswer !== 'undefined' && $.isFunction(InitDragableAnswer)) InitDragableAnswer();
        if (typeof BackGroundAudio !== 'undefined' && $.isFunction(BackGroundAudio)) BackGroundAudio(false);
        playingGlobal=true;

        var _curPage=GetCurrentPage();

        if (_curPage.attr('id').indexOf('QuestionPage_')>0)
        {
            if (typeof _curPage.attr('questype') != typeof undefined && _curPage.attr('questype') == 'Cloze')
            {
                var _quesArray=[];
                _curPage.find('span').each(function(){
                    if (typeof $(this).attr('holderanswerid') != typeof undefined && $(this).attr('holderanswerid').length>0)
                        _quesArray.push($(this).attr('holderanswerid').toString());
                });

                if (_quesArray.length>0)
                {
                    for (var i=0;i<_quesArray.length;i++)
                    {
                        $('#' + _quesArray[i]).css('visibility','hidden');
                    }
                }
                
            }
        }
    }
    else
    {
        ShowMessMustAnswer();
    }
}

function nextBackPage(check) {

    if (ReNhanhCauHoi()==true) return;
    if (CheckMustAnswerQuestion()==true) // 19-9-16 Dũng
    {
        setTransparentPageBalck();

        var page = $("#leftMainContent").children('div > .CELPage'); 
        var checkpage = false;
        
        if (page.length == 1)
        {
            $("#mainBottomBtnNext").addClass('hidden');
            $("#mainBottomBtnNextDisable").show();
        }

        for (var i = 0; i < page.length; i++) {

            if (!$(page[i]).hasClass("hidden") && check) {
                if ($(page[i + 1]).hasClass("hidden")) {
                    checkpage = true;
                }
            }
            else 
            {
                if (!$(page[i]).hasClass("hidden") && !check) {
                    if ($(page[i + 1]).hasClass("hidden") || i==page.length-1) {
                        checkpage = true;
                    }

                }

            }
    		setBeginObject($(page[i]));
            if (!$(page[i]).hasClass("hidden") && check && checkpage) //next
            {
                if ((i + 1) <= (page.length - 1)) {
                    stopTime();

                    $(page[i]).addClass("hidden");

                    var id = $(page[i]).attr("id");
                    
                    stopFlash(id);
                    var id = $(page[i+1]).attr("id");
                    playFlash(id);

                    console.log(id);
                    $('.pageName').removeClass('RightMenuCurrent');
                    $('#RightMenu' + id).parent().addClass('RightMenuCurrent');

                    $('.pageNameThumb').removeClass('RightMenuCurrent');
                    $('#RightMenuT'+ id).parent().addClass('RightMenuCurrent');

                    var dataZindex=$(page[i - 1]).attr("data-zindex");
                    if (dataZindex != undefined) {
                        $(page[i - 1]).css({ "z-index": dataZindex, "left": "", "top": "", "right": "", "bottom": "" });
                    }
    				var checkPageBlack=$("#leftMainContent").find("#PageBlack");
    				if(checkPageBlack.length > 0){
    					$("#PageBlack").css("z-index", -1);
    				}

                    clearTopLeftRightBottom();

                    var page1 = $(page[i + 1]);
                    var page2 = $(page[i]);
                    ShowPage(i, page1, page2);

                    StopAllMedia();

                    stepFrame = 0;

                    var list = listObject[i + 1];
                    var listPage = list.listPage;
                    ResetTime(listPage);

                    var total = list.time;
                    setValue(0, total);
                    timer = null;
                    if ($('#mainBottomBtnPlayPause').css("display") != "none") {
                        timer = null;
                        timer = setInterval(playTime, step);
                    }
                    else {
                        stopTime();
                        timer = null;
                    }

                    $(".clear-nextback").removeClass('hidden');
                    $("#mainBottomBtnNextDisable").hide();
                    $("#mainBottomBtnPVDisable").hide();
                    if ((i + 1) >= (page.length - 1)) {
                        $("#mainBottomBtnNext").addClass('hidden');
                        $("#mainBottomBtnNextDisable").show();
                    }
                    break;
                }
            }
            if (!$(page[i]).hasClass("hidden") && !check && checkpage)//back
            {
                if ((i - 1) <= (page.length - 1)) {
                    stopTime();
                    clearTopLeftRightBottom();
                    $(page[i - 1]).removeClass("hidden");
                    $(page[i]).addClass("hidden");

                    var id = $(page[i]).attr("id");
                    stopFlash(id);
                    var id = $(page[i-1]).attr("id");
                    playFlash(id);

                    StopAllMedia();

                    $('.pageName').removeClass('RightMenuCurrent');
                    $('#RightMenu' + id).parent().addClass('RightMenuCurrent');
                    
                    $('.pageNameThumb').removeClass('RightMenuCurrent');
                    $('#RightMenuT'+ id).parent().addClass('RightMenuCurrent');

                    var page1 = $(page[i - 1]);
                    backPage(i, page1);

                    var dataZindex1 = $(page[i]).attr("data-zindex");
                    $(page[i - 1]).css({ "z-index": dataZindex1 });
                    var dataZindex = $(page[i - 1]).attr("data-zindex");
                    if (dataZindex != undefined) {
                        $(page[i - 1]).css({ "z-index": dataZindex, "left": "", "top": "", "right": "", "bottom": "" });
                    }
    				var checkPageBlack=$("#leftMainContent").find("#PageBlack");
    				if(checkPageBlack.length > 0){
    					$("#PageBlack").css("z-index", -1);
    				}
                    
                    stepFrame = 0;

                    var list = listObject[i - 1];
                    var listPage = list.listPage;
                    ResetTime(listPage);

                    var total = list.time;
                    setValue(0, total);
                    timer = null;
                    if ($('#mainBottomBtnPlayPause').css("display") != "none") {
                        timer = null;
                        timer = setInterval(playTime, step);
                    }
                    else {
                        stopTime();
                        timer = null;
                    }
                    $(".clear-nextback").removeClass('hidden');
                    $("#mainBottomBtnNextDisable").hide();
                    $("#mainBottomBtnPVDisable").hide();
                    if ((i - 2) < 0) {
                        $("#mainBottomBtnPV").addClass('hidden');
                        $("#mainBottomBtnPVDisable").show();
                    }
                    break;
                }
            }
            
            if (i == page.length-1) {
                stopTime();
                $(page[0]).removeClass("hidden");
                var list = listObject[0];
                var listPage = list.listPage;
                ResetTime(listPage);
                StopAllMedia();
            }
        }
        if (typeof MediaDemonstationPage !== 'undefined' && $.isFunction(MediaDemonstationPage)) MediaDemonstationPage('1');
        if (typeof NextPreviewButtonQuestionPage !== 'undefined' && $.isFunction(NextPreviewButtonQuestionPage)) NextPreviewButtonQuestionPage();
        $('.DraggablePanel').each(function(){
            $(this).css('visibility','hidden');
            $(this).css('z-index','-1');
        });
        if (typeof CountAnswerMaxTime !== 'undefined' && $.isFunction(CountAnswerMaxTime)) CountAnswerMaxTime();
        if (typeof InitDragableAnswer !== 'undefined' && $.isFunction(InitDragableAnswer)) InitDragableAnswer();
        if (typeof BackGroundAudio !== 'undefined' && $.isFunction(BackGroundAudio)) BackGroundAudio(true);
        playingGlobal=true;

        var _curPage=GetCurrentPage();

        if (_curPage.attr('id').indexOf('QuestionPage_')>0)
        {
            if (typeof _curPage.attr('questype') != typeof undefined && _curPage.attr('questype') == 'Cloze')
            {
                var _quesArray=[];
                _curPage.find('span').each(function(){
                    if (typeof $(this).attr('holderanswerid') != typeof undefined && $(this).attr('holderanswerid').length>0)
                        _quesArray.push($(this).attr('holderanswerid').toString());
                });

                if (_quesArray.length>0)
                {
                    for (var i=0;i<_quesArray.length;i++)
                    {
                        $('#' + _quesArray[i]).css('visibility','hidden');
                    }
                }
                
            }
        }
    }
}

function ResetTime(listPage) {
    $.each(listPage, function (index) {
        var p = listPage[index];
        if (listPage[index].type == 0) {
            if (listPage[index].StarTime <=stepFrame && listPage[index].EndTime >stepFrame)
            {
                var fnName = listPage[index].NameFunction;
                var fn = new Function(fnName);
                fn();
                stepFrame = listPage[index].StarTime;
                setValue(stepFrame, listObject[nubmerPage].time);
				stopAllBeforeAnimte(fnName);//new 07-09-2016
            }
         }
    });
    //hiệu ứng đối tượng (hudt)
    if (listPage.length > 1) {
        nubmerPage = checkNumberPage();
        checkAnimateObject(listPage,nubmerPage);
    }
    //end hiệu ứng đối tường
}
var playingGlobal=false;
$(document).on('click','div',function(){
    if($(this).data('function')=='stop'){
        stopTime();
        timer = null;
        $('#mainBottomBtnPlayPause').hide();
        $('#mainBottomBtnPause').show();
        stop();
        playingGlobal=false;
        if (typeof StopGlobalDemonstration !== 'undefined' && $.isFunction(StopGlobalDemonstration)) StopGlobalDemonstration(true);
        if (typeof MediaTimeLine !== 'undefined' && $.isFunction(MediaTimeLine)) MediaTimeLine();

        var _bgAudio = document.getElementById('BGAudio');
        if (!_bgAudio.paused && typeof $('#BGAudio').attr('src')!=typeof undefined  && $('#BGAudio').attr('src').length>0)
            _bgAudio.pause();
		
		//new 27-08
		var namePage=checkNumberPage();
		var page=$("#leftMainContent").children('div > .CELPage'); 
		var id=$(page[namePage]).find("object");
		$(id).css("display","none");
		//edn new 27-08
    }
    if($(this).data('function')=='play'){
        timer = null;

        $('#mainBottomBtnPlayPause').show();
        $('#mainBottomBtnPause').hide();
        var timeSlide = $("#slider-value").html();
        var timeSlide = parseFloat(parseFloat(timeSlide).toFixed(1));
        PercentPage(timeSlide, false);

        playingGlobal=true;
        if (typeof StopGlobalDemonstration !== 'undefined' && $.isFunction(StopGlobalDemonstration)) StopGlobalDemonstration(false);
        if (typeof MediaTimeLine !== 'undefined' && $.isFunction(MediaTimeLine)) MediaTimeLine();
        
        var _bgAudio = document.getElementById('BGAudio');
        if (_bgAudio.paused && typeof $('#BGAudio').attr('src')!=typeof undefined  && $('#BGAudio').attr('src').length>0)
            _bgAudio.play();
		
		//new 27-08
		var namePage=checkNumberPage();
		var page=$("#leftMainContent").children('div > .CELPage'); 
		var id=$(page[namePage]).find("object");
		$(id).css("display","");
		//edn new 27-08

    }
    if($(this).data('function')=='next'){
        if (CheckMustAnswerQuestion()==true) // 19-9-16 Dũng
        {
            stopTime();
            timer = null;
            $('#mainBottomBtnPlayPause').show();
            $('#mainBottomBtnPause').hide();
            stop();
            nextBackPage(true);
        }
        else
        {
            ShowMessMustAnswer();
        }
        
    }
    if($(this).data('function')=='back'){
        if (CheckMustAnswerQuestion()==true) // 19-9-16 Dũng
        {
            stopTime();
            timer = null;
            $('#mainBottomBtnPlayPause').show();
            $('#mainBottomBtnPause').hide();
            stop();
    		nextBackPage(false);
        }
        else
        {
            ShowMessMustAnswer();
        }
    }
});
function clearTopLeftRightBottom() {
    var page = $("#leftMainContent").children('div > .CELPage');
    for (var i = 0; i < page.length; i++) {
            $(page[i]).css({ "left": "", "top": "", "right": "", "bottom": "" });
    }
}

function stopFlash(IdCelPage) {
    var child = $("#" + IdCelPage).find("EMBED");
    for (var i = 0; i < child.length; i++) {
        var id=$("#"+IdCelPage).find("object");
        $(id).css("display","none");    
    }
}
function playFlash(IdCelPage) {
    var child = $("#" + IdCelPage).find("EMBED");
    for (var i = 0; i < child.length; i++) {
        var id=$("#"+IdCelPage).find("object");
        $(id).css("display","");
    }
}

//new 26-08
function stopAllFlash(){
	$("#leftMainContent").find("object").each(function(){
		var id=$(this).children("EMBED").attr("id");
		if( typeof id != typeof undefined){
			$(this).css("display","none");
		}
	});
}
//end new 26-08

//------------------------hiệu ứng đối tượng
function checkAnimateObject(listPage,page) 
{
    
    var pageDiv = $("#leftMainContent").children('div > .CELPage');

    var idPage=$(pageDiv[(parseInt(page))]).attr("id");
    
    var widthPage=parseFloat($("#" + idPage).css('width').split('p')[0]);

    var heightPage=parseFloat($("#" + idPage).css('height').split('p')[0]);

    for (var i = 1; i < listPage.length ; i++) {
        var ObjectName = listPage[i].NameFunction;
    if(ObjectName !="")
    {

            var splitObject = ObjectName.split('#')[1];

            var idObject = splitObject.split('\'')[0];

            if (idObject.length==0) return;

            $("#" + idPage).find("#" + idObject).addClass('hidden');
            
            var dataLeft = $("#" + idPage).find("#" + idObject).css('left');
            
            if (typeof dataLeft != 'undefined')
            {
                if(dataLeft.toString().indexOf("px")>0)
                {
                    dataLeft = (parseFloat(dataLeft.split('p')[0]) *100)/(widthPage);
                    $("#" + idPage).find("#" + idObject).attr("data-left", dataLeft+"%");
                }
                else
                {
                    $("#" + idPage).find("#" + idObject).attr("data-left", dataLeft);
                }
            }

            //top
            var dataTop = $("#" + idPage).find("#" + idObject).css('top');
            if (typeof dataTop != 'undefined')
            {
                if(dataTop.toString().indexOf("px")>0)
                {
                    dataTop = (parseFloat(dataTop.split('p')[0]) *100)/(heightPage);
                    $("#" + idPage).find("#" + idObject).attr("data-top", dataTop+"%");
                }
                else
                {
                    $("#" + idPage).find("#" + idObject).attr("data-top", dataTop);
                }
            }
        
            //right
        
            var dataRight = $("#" + idPage).find("#" + idObject).css('right');
            if (typeof dataRight != 'undefined')
            {
                if(dataRight.toString().indexOf("px")>0)
                {
                    dataRight = (parseFloat(dataRight.split('p')[0]) *100)/(widthPage);
                    $("#" + idPage).find("#" + idObject).attr("data-right", dataRight+"%");
                }
                else
                {
                    $("#" + idPage).find("#" + idObject).attr("data-right", dataRight);
                }
            }
        
            //bottom
            var dataBottom = $("#" + idPage).find("#" + idObject).css('bottom');
            if (typeof dataBottom != 'undefined')
            {
                if(dataBottom.toString().indexOf("px")>0)
                {
                    dataBottom = (parseFloat(dataBottom.split('p')[0]) *100)/(heightPage);
                    $("#" + idPage).find("#" + idObject).attr("data-bottom", dataBottom+"%");
                }
                else
                {
                    $("#" + idPage).find("#" + idObject).attr("data-bottom", dataBottom);
                }
            }
            //width
            var dataWidth = $("#" + idPage).find("#" + idObject).css('width');
            if (typeof dataWidth != 'undefined'){
                if(dataWidth.toString().indexOf("px")>0)
                {
                    dataWidth = (parseFloat(dataWidth.split('p')[0]) *100)/(widthPage);
                    $("#" + idPage).find("#" + idObject).attr("data-width", dataWidth+"%");
                }
                else
                {
                    if(dataWidth.toString().indexOf("auto")<0)
                        $("#" + idPage).find("#" + idObject).attr("data-width", dataWidth);
                }
            }
        
            //height
            var dataHeight = $("#" + idPage).find("#" + idObject).css('height');
            if (typeof dataHeight != 'undefined'){
                if(dataHeight.toString().indexOf("px")>0)
                {
                    dataHeight = (parseFloat(dataHeight.split('p')[0]) *100)/(heightPage);
                    $("#" + idPage).find("#" + idObject).attr("data-height", dataHeight+"%");
                }
                else
                {
                    if(dataHeight.toString().indexOf("auto")<0)
                        $("#" + idPage).find("#" + idObject).attr("data-height", dataHeight);
                }
            }
			//new 09/09/2016
			//transform
            var dataTransform = $("#" + idPage).find("#" + idObject).css('transform');
            if (typeof dataTransform != 'undefined')
            {
				$("#" + idPage).find("#" + idObject).attr("data-transform", dataTransform);
            }
			//End new 09/09/2016
			
       }
    }
}

//----------volumn page ----------------------------

$("#mainBottomVolumnSlideTray").on("click",function(event){
    var video =$("#leftMainContent").find("video");
    var clickPosition=parseInt(event.offsetX);
    var width = parseInt($("#mainBottomVolumnSlideTray").width());
    var precent= ((clickPosition *100)/width).toFixed(1);
    $("#mainBottomVolumnSlideTray").css("background","linear-gradient(90deg, white "+precent+"%, transparent 0%)");
    
    var audio= $("#leftMainContent").find("audio");
    precent = parseFloat(precent) /100;
    if(video.length > 0)
        $(video).prop("volume",precent);
    if(audio.length > 0)
        $(audio).prop("volume", precent);

    $('#mainRightTopBotLeft').find("video").each(function(){
        this.volume=precent;
    });
    $('#BGAudio').parent().find("audio").each(function(){
        this.volume=precent;
    });

    $('#leftMainContent').find("audio").each(function(){
        if (typeof $(this).attr('maxVol')!=typeof undefined)
        {
            var _maxVol=parseFloat($(this).attr('maxVol')/100);
                if (this.volume > _maxVol)
                    this.volume = _maxVol * precent;
            
        }
        else
        {
            this.volume=precent;
        }
    });
    $('#leftMainContent').find("video").each(function(){
        if (typeof $(this).attr('maxVol')!=typeof undefined)
        {
            var _maxVol=parseFloat($(this).attr('maxVol')/100);
                if (this.volume > _maxVol)
                    this.volume = _maxVol * precent;
            
        }
        else
        {
            this.volume=precent;
        }
    });
});
$("#mainBottomBtnVolumn").on("click",function(){
    $(this).hide();
    $("#mainBottomBtnVolumnMute").show();
    var video =$("#leftMainContent").find("video");
    var audio= $("#leftMainContent").find("audio");
    if(video.length > 0)
        $(video).prop("muted",true)
    if(audio.length > 0)
        $(audio).prop("muted",true)

    $('#mainRightTopBotLeft').find("video").each(function(){
        this.muted=true;
    });

    $('#BGAudio').parent().find("audio").each(function(){
        this.muted=true;
    });
});
$("#mainBottomBtnVolumnMute").on("click",function(){
    $(this).hide();
    $("#mainBottomBtnVolumn").show();
    var video =$("#leftMainContent").find("video");
    var audio= $("#leftMainContent").find("audio");
    if(video.length > 0)
        $(video).prop("muted",false)
    if(audio.length > 0)
        $(audio).prop("muted",false)
    $('#mainRightTopBotLeft').find("video").each(function(){
        this.muted=false;
    });
    $('#BGAudio').parent().find("audio").each(function(){
        this.muted=false;
    });
});

//new 27-08-3h
function setBeginObject(page){
	var idpage = $(page).children('div');
	for(var i=0;i<idpage.length;i++){
		var name= $(idpage[i]).attr('id');
		if(name !="PageObject"){
			var id = $(idpage[i]);	
			var top = $(id).attr("data-top");
			if(typeof top !=typeof undefined)
				$(id).css("top", top);
			var left = $(id).attr("data-left");
			if(typeof left !=typeof undefined)
				$(id).css("left", left);
			var width = $(id).attr("data-width");
			if(typeof width !=typeof undefined)
				$(id).css("width", width);
			var checkHeight = parseFloat($(id).css("height").split('p')[0]);
			var h= $(id).attr("data-height");
			if(typeof h !=typeof undefined){
				var height = parseFloat(h.split('%')[0]);
				var heightSplit= (height > 0)? height+"%" : ((checkHeight > 0)?"":"auto");
				$(id).css("height", heightSplit);
			}
			//new 09/09/2016
			/*var t= $(id).attr("data-transform");
			if(typeof t !=typeof undefined)
				$(id).css("transform", "rotate("+t+")");
			*/
			//new 09-09-2016
			var t= $(id).attr("data-transform");
			if(typeof t !=typeof undefined){
				var values = t.split('(')[1];
				if (typeof values != typeof undefined) //Dung check 8-09-09-2016
				{
					values = values.split(')')[0];
					values = values.split(',');
					var a = values[0];
					var b = values[1];
					var c = values[2];
					var d = values[3];

					var scale = Math.sqrt(a*a + b*b);

					var radians = Math.atan2(b, a);
					var angle = Math.round( radians * (180/Math.PI));
					$(id).css("transform", "rotate("+angle+"deg)");
				}
			}
			//End new 09-09-2016
			
			$(id).css("opacity", 1);
		}
		
	}
}

//end new 27-08-3h

//new 07-09-2016
  function stopAllBeforeAnimte(fnName){
	  if(fnName.length >1){
		  var idPage=fnName.split('#')[1];
		  idPage=idPage.split('\'')[0];
		  $("#"+idPage).find('object').each(function(){
			  var id=$(this).children("EMBED").attr("id");
			  if( typeof id != typeof undefined){
					var display = $(this).css("display");
					if(display !="none"){
						$(this).css("display","none");
						$(this).attr("data-stop","true");//chu xong
					}
			  }
		  });
	    }
  }
  
  function playAllAfterAnimte(page,timeNow){
	  var s= page[0].EndTime;
	  if(page[0].EndTime > 0 && page[0].EndTime <=timeNow){
        if (page[0].NameFunction.length >0) {
		  var fnName = page[0].NameFunction;
          console.log(page[0].NameFunction);
		  var idPage=fnName.split('#')[1];
		  idPage=idPage.split('\'')[0];
		  $("#"+idPage).find('object').each(function(){
			  var id=$(this).children("EMBED").attr("id");
			  if( typeof id != typeof undefined){
					var display = $(this).css("display");
					var check= $(this).attr("data-stop");
					if(display =="none" && check =="true"){
						$(this).css("display","");
					}
			  }
		  });
        }
	  }
  }
	//----end new 18_09_2016
    
function MediaTimeLine()
{
    var timeSlide = $('#slider-value').html();
    var timeSlide = parseFloat(parseFloat(timeSlide).toFixed(1));
    var time = timeSlide;
    var timeStop = time.toFixed(1) * 10;
    var nubmerPage = checkNumberPage();
    var list = listObject[nubmerPage];
    var _curPage=GetCurrentPage();
    var endTime;var percent;var _curTime;
    var _pageTime;var _bgAudioTime=0;var _bgAudioTimePrevious=0;
    var _bgAudio = document.getElementById('BGAudio');
    if (typeof _curPage != typeof undefined)
    {
        var endTime = list.time;
        var percent = Math.abs(((100 * timeStop) / (endTime * 10)) - 100);
        var _curTime= endTime - (percent * endTime/100);
        _curPage.find('video').each(function(){
            if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length >0 ) { 
                if ($(this).hasClass('VideoDemonstration')==false && $(this).hasClass('AudioDemonstration')==false)
                {
                    if (typeof $(this).attr('startTime') != typeof undefined && Math.round($(this).attr('startTime'),1) == _curTime) this.play();
                    if (typeof $(this).attr('startTime') != typeof undefined && Math.round($(this).attr('startTime'),1) > _curTime) this.pause();
                    if (typeof $(this).attr('startTime') != typeof undefined && Math.round($(this).attr('startTime'),1) < _curTime)
                    {
                        if (this.paused && playingGlobal==true)
                        {
                            if (this.currentTime >= this.duration) {this.pause();return;}
                            if (this.currentTime < this.duration) {this.currentTime=_curTime - parseFloat($(this).attr('startTime')); this.play();}
                            if (_curTime > (this.duration + parseFloat($(this).attr('startTime')))) {this.pause();return;}
                        }
                        if(playingGlobal==false) this.pause();
                    };
                }
                else
                {

                    var _vidDemon = document.getElementById('mainRightTopBotLeft_Video');

                    if (typeof $(this).attr('startTimeDemontration') != typeof undefined && Math.round($(this).attr('startTimeDemontration'),1) == _curTime)
                        _vidDemon.play();
                    if (typeof $(this).attr('startTimeDemontration') != typeof undefined && Math.round($(this).attr('startTimeDemontration'),1) > _curTime)
                        _vidDemon.pause();
                    if (typeof $(this).attr('startTimeDemontration') != typeof undefined && Math.round($(this).attr('startTimeDemontration'),1) < _curTime)
                    {
                        if (_vidDemon.paused && playingGlobal==true)
                        {
                            if (_vidDemon.currentTime >= _vidDemon.duration) {_vidDemon.pause();return;}
                            if (_vidDemon.currentTime < _vidDemon.duration) {_vidDemon.currentTime=_curTime - parseFloat($(this).attr('startTimeDemontration')); _vidDemon.play();}
                            if (_curTime > (_vidDemon.duration + parseFloat($(this).attr('startTimeDemontration')))) {_vidDemon.pause();return;}
                        }
                        if(playingGlobal==false) _vidDemon.pause();
                    };
                }
            }
        });
        _curPage.find('audio').each(function(){
            if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length >0 ) {
             if ($(this).hasClass('VideoDemonstration')==false && $(this).hasClass('AudioDemonstration')==false)
             {
                if (typeof $(this).attr('startTime') != typeof undefined && Math.round($(this).attr('startTime'),1) == _curTime) this.play();
                if (typeof $(this).attr('startTime') != typeof undefined && Math.round($(this).attr('startTime'),1) > _curTime) this.pause();
                if (typeof $(this).attr('startTime') != typeof undefined && Math.round($(this).attr('startTime'),1) < _curTime)
                {
                    if (this.paused && playingGlobal==true)
                    {
                        if (this.currentTime >= this.duration) {this.pause();return;}
                        if (this.currentTime < this.duration) {this.currentTime=_curTime - parseFloat($(this).attr('startTime')); this.play();}
                        if (_curTime > (this.duration + parseFloat($(this).attr('startTime')))) {this.pause();return;}
                    }
                        if(playingGlobal==false) this.pause();
                };
            }
            else
            {
                if (typeof $(this).attr('startTimeDemontration') != typeof undefined && Math.round($(this).attr('startTimeDemontration'),1) == _curTime)
                    this.play();
                if (typeof $(this).attr('startTimeDemontration') != typeof undefined && Math.round($(this).attr('startTimeDemontration'),1) > _curTime)
                    this.pause();
                if (typeof $(this).attr('startTimeDemontration') != typeof undefined && Math.round($(this).attr('startTimeDemontration'),1) < _curTime)
                {
                    if (this.paused && playingGlobal==true)
                    {
                        if (this.currentTime >= this.duration) {this.pause();return;}
                        if (this.currentTime < this.duration) {this.currentTime=_curTime - parseFloat($(this).attr('startTimeDemontration')); this.play();}
                        if (_curTime > (this.duration + parseFloat($(this).attr('startTimeDemontration')))) {this.pause();return;}
                    }
                        if(playingGlobal==false) this.pause();
                };
            }
        }
    });
        
        if (typeof window['listBackGroundAudio'] != typeof undefined)
        {
            // Tổng time từ đầu đến trang hiện tại
            _pageTime=0.0;
            for (i=0;i<nubmerPage;i++){_pageTime += listObject[i].time;}
            _pageTime+=_curTime; // Thời gian hiện tại
            // Tìm đối tượng BackGround Audio phù hợp - duration + startTime
            _bgAudioTime=0.0;_bgIndex=0;
            for (i=0;i<listBackGroundAudio.length;i++)
            {
                _bgAudioTime += listBackGroundAudio[i].Duration;_bgAudioTime += listBackGroundAudio[i].StartTime;
                if (i>0){_bgAudioTimePrevious += listBackGroundAudio[i-1].Duration;_bgAudioTimePrevious += listBackGroundAudio[i-1].StartTime;}
                if (_bgAudioTime>_pageTime){_bgIndex=i;i=listBackGroundAudio.length;}
            }
            if (_pageTime>_bgAudioTime && _bgAudio.paused==false){$('#BGAudio').attr('src','');_bgAudio.pause();}
            if (_pageTime<_bgAudioTime)
            {
                if (typeof $('#BGAudio').attr('src') != typeof undefined && $('#BGAudio').attr('src') != listBackGroundAudio[_bgIndex].SRC) $('#BGAudio').attr('src',listBackGroundAudio[_bgIndex].SRC);
                if (typeof $('#BGAudio').attr('src') == typeof undefined) $('#BGAudio').attr('src',listBackGroundAudio[_bgIndex].SRC);
                if (_bgAudio.paused)
                {
                    var time = _pageTime-listBackGroundAudio[_bgIndex].StartTime-_bgAudioTimePrevious;
                    if (time>0){_bgAudio.currentTime = time;_bgAudio.play();}
                }else{
                    if (typeof window['listSilent_' + listBackGroundAudio[_bgIndex].Name] != typeof undefined)
                    {
                        var _silentList=window['listSilent_' + listBackGroundAudio[_bgIndex].Name];var _bgCurtime=_bgAudio.currentTime;var _mute=false;
                        for (i=0;i<_silentList.length;i++){if (_bgCurtime>=_silentList[i].StartTime && _bgCurtime <= (_silentList[i].StartTime + _silentList[i].Duration ) ){_mute=true;i=_silentList.length;}}
                            _bgAudio.muted=_mute;
                    }
                }
            }
        }
    }
    $('#leftMainContent').find('video').each(function(){if (typeof $(this).attr('maxVol')!=typeof undefined){var _maxVol=parseFloat($(this).attr('maxVol')/100);if (this.volume > _maxVol)this.volume = _maxVol;}});
    $('#leftMainContent').find('audio').each(function(){if (typeof $(this).attr('maxVol')!=typeof undefined){var _maxVol=parseFloat($(this).attr('maxVol')/100);if (this.volume > _maxVol)this.volume = _maxVol;}});
}
function SetDemonstrationTime()
{
    var timeSlide = $('#slider-value').html();
    var timeSlide = parseFloat(parseFloat(timeSlide).toFixed(1));
    var time = timeSlide;
    var timeStop = time.toFixed(1) * 10;
    nubmerPage = checkNumberPage();
    var list = listObject[nubmerPage];
    var endTime;var percent;var _curTime;
    var _pageTime;var _bgAudioTime=0;var _bgAudioTimePrevious=0;var _bgAudio = document.getElementById('BGAudio');
    if (typeof list == typeof undefined) return false;
    var listPage = list.listPage;
    if (listPage != null) {
            var endTime = list.time;
            var percent = Math.abs(((100 * timeStop) / (endTime * 10)) - 100);
            var _demonstrationTime= endTime - (percent * endTime/100);
            var _curPage=GetCurrentPage();
            _curPage.find('audio').each(function(){
                    if ($(this).hasClass('AudioDemonstration') && typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0)
                    {
                        if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0)
                            var _start=parseFloat($(this).attr('startTimeDemontration'));
                        if (typeof _start==typeof undefined) _start=0;
                        if (_demonstrationTime<(this.duration + _start)){this.currentTime=_demonstrationTime-_start;
                         if (playingGlobal==true) this.play(); else this.pause();}
                    }
            })
            _curPage.find('video').each(function(){
                if (typeof $(this).attr('src') != typeof undefined && typeof $(this).attr('startTime')!=typeof undefined)
                {
                    var _startTime=parseFloat($(this).attr('startTime'));
                    if (_demonstrationTime-_startTime < this.duration) this.currentTime=_demonstrationTime-_startTime;
                }
            });
            _curPage.find('audio').each(function(){
                if (typeof $(this).attr('src') != typeof undefined && typeof $(this).attr('startTime')!=typeof undefined)
                {
                    var _startTime=parseFloat($(this).attr('startTime'));
                    if (_demonstrationTime-_startTime < this.duration) this.currentTime=_demonstrationTime-_startTime;
                }
            });
            _curPage.find('audio').each(function(){
                if (typeof $(this).attr('src') != typeof undefined && typeof $(this).attr('startTime')!=typeof undefined)
                {
                    var _startTime=parseFloat($(this).attr('startTime'));
                    if (_demonstrationTime-_startTime < this.duration) this.currentTime=_demonstrationTime-_startTime;
                }
            });
        $('#mainRightTopBotLeft').find('video').each(function(){if (typeof $(this).attr('src') != typeof undefined && $(this).attr('src').length>0){this.currentTime=_demonstrationTime;}});
        if (typeof window['listBackGroundAudio'] != typeof undefined){_pageTime=0.0;for (i=0;i<nubmerPage;i++){_pageTime += listObject[i].time;}_pageTime+=_demonstrationTime;_bgAudioTime=0.0;_bgIndex=0;for (i=0;i<listBackGroundAudio.length;i++){_bgAudioTime += listBackGroundAudio[i].Duration;_bgAudioTime += listBackGroundAudio[i].StartTime;if (i>0){_bgAudioTimePrevious += listBackGroundAudio[i-1].Duration;_bgAudioTimePrevious += listBackGroundAudio[i-1].StartTime;}if (_bgAudioTime>_pageTime){_bgIndex=i;i=listBackGroundAudio.length;}}if (_pageTime>_bgAudioTime && _bgAudio.paused==false){$('#BGAudio').attr('src','');_bgAudio.pause(); }if (_pageTime<_bgAudioTime){if (typeof $('#BGAudio').attr('src') != typeof undefined && $('#BGAudio').attr('src') != listBackGroundAudio[_bgIndex].SRC) $('#BGAudio').attr('src',listBackGroundAudio[_bgIndex].SRC); if (typeof $('#BGAudio').attr('src') == typeof undefined) $('#BGAudio').attr('src',listBackGroundAudio[_bgIndex].SRC);{var time = _pageTime-listBackGroundAudio[_bgIndex].StartTime-_bgAudioTimePrevious;if (time>0) {_bgAudio.currentTime = time;if (playingGlobal==true) _bgAudio.play();else _bgAudio.pause();}}}}}
}

function MediaDemonstationPage(play)
{
   // play = 0 - load src only" + Line(1) +
   // play = 1 - load src and play" + Line(1) +
   // play = 2 - load src and pause" + Line(1) +
   var _page=GetCurrentPage();
   if (typeof _page==typeof undefined) return;
   $('#mainRightTopBotLeft').find('video').each(function(){ if ($(this).attr('src').length>0) { $(this).attr('src',''); } });
   $('#' + _page.attr('id') + '_Demonstration').children().each(function(){
       if ($(this).hasClass('VideoDemonstration')) // Video thuyết minh" + Line(1) +
       {
           if ($(this).attr('src').length>0)
           {
               var src=$(this).attr('src');
               $('#mainRightTopBotLeft').find('video').each(function(){
               $(this).css('visibility','visible');
               $(this).attr('src',src);
               if (play=='1') this.play();
               if (play=='2') this.pause();
           });
           }
           else
           {
               $('#mainRightTopBotLeft').find('video').each(function(){
                   $(this).css('visibility','hidden');
                   this.pause();
                   if (this.canplay) this.currentTime=0;
               });
           }
       }
       if ($(this).hasClass('AudioDemonstration')) // Audio thuyết minh
       {
           if ($(this).attr('src').length>0)
           {
                $(this).parent().find('audio').each(function(){
                    if (play=='1') this.play();
                    if (play=='2') this.pause();
                });
           }
       }
   });
}
//15-9-2016