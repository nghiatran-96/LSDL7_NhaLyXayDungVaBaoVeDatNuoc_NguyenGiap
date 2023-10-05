
//tinh thơi gian và left page (tong hop cua page)
function PercentPage(value, check) {
    var time = value;
    var timeStop = time.toFixed(1) * 10;
    nubmerPage = checkNumberPage();
    var list = listObject[nubmerPage];
    if (typeof list == typeof undefined) return false;
    var listPage = list.listPage;
    if (listPage != null) {
        if (listPage[0].type == 0) {
            var fnName = listPage[0].NameFunction;
			if(fnName !=""){
				var endTime = listPage[0].EndTime;
				var percent = 100 - ((100 * timeStop) / (endTime * 10));
				if (fnName.split('(')[0] == "PushFromLeft") {
					if (check)
						PushFromLeft_LeftPage(percent);
					else
						PushFormLeft_play();
				}
				if (fnName.split('(')[0] == "PushFromRight") {
					if (check)
						PushFromRight_RightPage(percent);
					else
						PushFormRight_play();
				}
				if (fnName.split('(')[0] == "PushFromBottom") {
					if (check)
						PushFromBottom_BottomPage(percent)
					else
						PushFromBottom_play();
				}
				if (fnName.split('(')[0] == "PushFromTop") {
					if (check)
						PushFromTop_TopPage(percent)
					else
						PushFromTop_play();
				}
				if (fnName.split('(')[0] == "UncoverFormRight")
					if (check)
						UncoverFormRight_TopPage(percent);
					else
						UncoverFormRight_play();
				if (fnName.split('(')[0] == "UncoverFormBottomRight")
					if (check)
						UncoverFormBottomRight_TopPage(percent);
					else
						UncoverFormBottomRight_play();
				if (fnName.split('(')[0] == "UncoverFormTopRight")
					if (check)
						UncoverFormTopRight_TopPage(percent);
					else
						UncoverFormTopRight_play();
				if (fnName.split('(')[0] == "UncoverFromLeft")
					if (check)
						UncoverFromLeft_LeftPage(percent);
					else
						UncoverFromLeft_play();
				if (fnName.split('(')[0] == "UncoverFormBottomLeft")
					if (check)
						UncoverFormBottomLeft_TopPage(percent);
					else
						UncoverFormBottomLeft_play();
				if (fnName.split('(')[0] == "UncoverFormTopLeft")
					if (check)
						UncoverFormTopLeft_TopPage(percent);
					else
						UncoverFormTopLeft_play();
				if (fnName.split('(')[0] == "UncoverFormTop")
					if (check)
						UncoverFormTop_TopPage(percent);
					else
						UncoverFormTop_play();
				if (fnName.split('(')[0] == "UncoverFormBottom")
					if (check)
						UncoverFormBottom_TopPage(percent);
					else
						UncoverFormBottom_play();
				if (fnName.split('(')[0] == "CoverFromLeft")
					if (check)
						CoverFromLeft_LeftPage(percent);
					else
						CoverFromLeft_play();
				if (fnName.split('(')[0] == "CoverFormTopLeft")
					if (check)
						CoverFormTopLeft_TopPage(percent);
					else
						CoverFormTopLeft_play();
				if (fnName.split('(')[0] == "CoverFormBottomLeft")
					if (check)
						CoverFormBottomLeft_TopPage(percent);
					else
						CoverFormBottomLeft_play();
				if (fnName.split('(')[0] == "CoverFromRight")
					if (check)
						CoverFromRight_LeftPage(percent);
					else
						CoverFromRight_play();
				if (fnName.split('(')[0] == "CoverFromBottomRight")
					if (check)
						CoverFromBottomRight_LeftPage(percent);
					else
						CoverFromBottomRight_play();
				if (fnName.split('(')[0] == "CoverFromTopRight")
					if (check)
						CoverFromTopRight_LeftPage(percent);
					else
						CoverFromTopRight_play();
				if (fnName.split('(')[0] == "CoverFromBottom")
					if (check)
						CoverFromBottom_LeftPage(percent);
					else
						CoverFromBottom_play();
				if (fnName.split('(')[0] == "CoverFromTop")
					if (check)
						CoverFromTop_LeftPage(percent);
					else
						CoverFromTop_play();
				if (fnName.split('(')[0] == "WipefromLeft")
					if (check)
						WipefromLeft_LeftPage(percent);
					else
						WipefromLeft_play();
				if (fnName.split('(')[0] == "WipefromRight")
					if (check)
						WipefromRight_LeftPage(percent);
					else
						WipefromRight_play();
				if (fnName.split('(')[0] == "WipefromBottom")
					if (check)
						WipefromBottom_LeftPage(percent);
					else
						WipefromBottom_play();
				if (fnName.split('(')[0] == "WipefromTop") {
					if (check)
						WipefromTop_LeftPage(percent);
					else
						WipefromTop_play();
				}
				if (fnName.split('(')[0] == "WipeFormBottomLeft") {
					if (check)
						WipeFormBottomLeft_AutoPlay(percent);
					else
						WipeFormBottomLeft_play();
				}
				if (fnName.split('(')[0] == "WipeFormBottomRight") {
					if (check)
						WipeFormBottomRight_AutoPlay(percent);
					else
						WipeFormBottomRight_play();
				}
				if (fnName.split('(')[0] == "WipeFormTopRight") {
					if (check)
						WipeFormTopRight_AutoPlay(percent);
					else
						WipeFormTopRight_play();
				}
				if (fnName.split('(')[0] == "WipeFormTopLeft") {
					if (check)
						WipeFormTopLeft_AutoPlay(percent);
					else
						WipeFormTopLeft_play();
				}
				
				if (fnName.split('(')[0] == "SplitHorizontalOut") {
					if (check)
						SplitHorizontalOut_AutoPlay(percent);
					else
						SplitHorizontalOut_play();
				}
				if (fnName.split('(')[0] == "SplitVerticalOut") {
					if (check)
						SplitVerticalOut_AutoPlay(percent);
					else
						SplitVerticalOut_play();
				}
				if (fnName.split('(')[0] == "SplitHorizontalIn") {
					if (check)
						SplitHorizontalIn_AutoPlay(percent);
					else
						SplitHorizontalIn_play();
				}
				if (fnName.split('(')[0] == "SplitVerticalIn") {
					if (check)
						SplitVerticalIn_AutoPlay(percent);
					else
						SplitVerticalIn_play();
				}
				if (fnName.split('(')[0] == "CricleAnimate") {
					if (check)
						CricleAnimate_AutoPlay(percent);
					else
						CricleAnimate_play();
				}
				if (fnName.split('(')[0] == "DiamondAnimate") {
					if (check)
						DiamondAnimate_AutoPlay(percent);
					else
						DiamondAnimate_play();
				}
				if (fnName.split('(')[0] == "ZoomOutAnimate") {
					if (check)
						ZoomOutAnimate_AutoPlay(percent);
					else
						ZoomOutAnimate_play();
				}
				if (fnName.split('(')[0] == "ZoomInAnimate") {
					if (check)
						ZoomInAnimate_AutoPlay(percent);
					else
						ZoomInAnimate_play();
				}
				if (fnName.split('(')[0] == "GrowInRotate")
					if (check)
						GrowInRotate_AutoPlay(percent);
					else
						GrowInRotate_play();
				if (fnName.split('(')[0] == "ClockWiseAnimiate") {
					if (check)
						ClockWiseAnimiate_RollPlay(percent);
					else
						ClockWiseAnimiate_play();
				}
				if (fnName.split('(')[0] == "CounterClockWiseAnimiate") {
					if (check)
						CounterClockWiseAnimiate_RollPlay(percent);
					else
						ClockWiseAnimiate_play();
				}
				if (fnName.split('(')[0] == "WedgeAnimate") {
					if (check)
						WedgeAnimate_RollPlay(percent);
					else
						WedgeAnimate_play();
				}
				//new 
				if (fnName.split('(')[0] == "DossolveAnimate") {
					if (check)
						DossolveAnimate_RollPlay(percent);
					else
						DossolveAnimate_play();
				}

				if (fnName.split('(')[0] == "HoneycombAnimate") {
					if (check)
						HoneycombAnimate_RollPlay(percent);
					else
						HoneycombAnimate_play();
				}
				
			}else{
				if (!check){
					stopTime();
					timer = null;
					timer = setInterval(playTime, step);
				}
				
			}
        }
		//hiêu ứng đối tượng (hudt)
		//var page=list.page;
        AnimateObject(listPage,nubmerPage);
    }
}



//main của các hiệu ứng wipe form 
function mainAnimate(value) {
    var timeStop = value.toFixed(1) * 10;
    nubmerPage = checkNumberPage();
    var list = listObject[nubmerPage];
    var listPage;
    if (typeof list != typeof undefined)
        listPage=list.listPage;
    if (listPage != null) {
        if (listPage[0].type == 0) {
            var fnName = listPage[0].NameFunction;
			if(fnName!=""){
				var endTime = listPage[0].EndTime;
				var percent = 100 - ((100 * timeStop) / (endTime * 10));
				if (fnName.split('(')[0] == "WipeFormBottomLeft") {
					WipeFormBottomLeft_AutoPlay(percent);
				}
				if (fnName.split('(')[0] == "WipeFormTopLeft") {
					WipeFormTopLeft_AutoPlay(percent);
				}
				if (fnName.split('(')[0] == "WipeFormBottomRight") {
					WipeFormBottomRight_AutoPlay(percent);
				}
				if (fnName.split('(')[0] == "WipeFormTopRight") {
					WipeFormTopRight_AutoPlay(percent);
				}
				if (fnName.split('(')[0] == "SplitHorizontalOut") {
					SplitHorizontalOut_AutoPlay(percent);
				}
				if (fnName.split('(')[0] == "SplitVerticalOut") {
					SplitVerticalOut_AutoPlay(percent);
				}
				if (fnName.split('(')[0] == "SplitHorizontalIn") {
					SplitHorizontalIn_AutoPlay(percent);
				}
				if (fnName.split('(')[0] == "SplitVerticalIn") {
					SplitVerticalIn_AutoPlay(percent);
				}
				if (fnName.split('(')[0] == "CricleAnimate") {
					CricleAnimate_AutoPlay(percent);
				}
				if (fnName.split('(')[0] == "DiamondAnimate") {
					DiamondAnimate_AutoPlay(percent);
				}
				if (fnName.split('(')[0] == "ClockWiseAnimiate") {
					ClockWiseAnimiate_AutoPlay(percent);
				}
				if (fnName.split('(')[0] == "CounterClockWiseAnimiate") {
					CounterClockWiseAnimiate_AutoPlay(percent);
				}
				if (fnName.split('(')[0] == "WedgeAnimate") {
					WedgeAnimate_AutoPlay(percent);
				}
				//new 
				if (fnName.split('(')[0] == "DossolveAnimate") {
					DossolveAnimate_AutoPlay(percent);
				}
				if (fnName.split('(')[0] == "HoneycombAnimate") {
					HoneycombAnimate_AutoPlay(percent);
				}
			}else{
				stopTime();stop();
				timer = null;
				timer = setInterval(playTime, step);
			}
			
            
			//hiêu ứng đối tượng (hudt)
			//var page=list.page;
            AnimateObject(listPage,nubmerPage);
        }
    }
}
//set transparent for page balck
function setTransparentPageBalck() {
    var checkPage = $("#leftMainContent").children('div > #PageBlack');
    if (checkPage.length > 0) {
        $("#PageBlack").css("background", "");
        $("#PageBlack").empty();
    }
}

//add div color black
function AddDivBlack() {
    var check = $("#PageBlack").attr("id");
    if (check == "PageBlack") {
        $("#PageBlack").css({ "height": "100%", "width": "100%", "left": "", "top": "", "right": "", "bottom": "","transform":"" });
    }
    else
        $("#leftMainContent").append("<div id='PageBlack' class='PageBlack' style=\"height:100%; width:100%; position:absolute; z-index:100; Background:black; \"></div>"); //background: linear-gradient(-90deg, black 85%, transparent);
}

//stop page (dung general *)
function stop() {

    stopTime();
    timer = null;
    var id = getPage2();
    //new 13/06/2016
    nubmerPage = checkNumberPage();
    var list = listObject[nubmerPage];
    if (typeof list == typeof undefined) return false;
    var listPage = list.listPage;
    if (listPage != null) {
        if (listPage[0].type == 0) {
            var fnName = listPage[0].NameFunction;
            if (fnName.split('(')[0] == "PushFromLeft") {
                //$("#" + id).stop();
                //var page = $("#leftMainContent").children("div > .CELPage").not(".hidden");
                //for (var i = 0; i < page.length; i++) {
                //    $(page[i]).stop();
                //}
                stopTwoDivPage();
            }
            if (fnName.split('(')[0] == "PushFromRight") {
                //$("#" + id).stop();
                //var page = $("#leftMainContent").children("div > .CELPage").not(".hidden");
                //for (var i = 0; i < page.length; i++) {
                //    $(page[i]).stop();
                //}
                stopTwoDivPage();
            }
            if (fnName.split('(')[0] == "PushFromBottom") {
                //$("#" + id).stop();
                //var page = $("#leftMainContent").children("div > .CELPage").not(".hidden");
                //for (var i = 0; i < page.length; i++) {
                //    $(page[i]).stop();
                //}
                stopTwoDivPage();
            }
            if (fnName.split('(')[0] == "PushFromTop") {
                //$("#" + id).stop();
                //var page = $("#leftMainContent").children("div > .CELPage").not(".hidden");
                //for (var i = 0; i < page.length; i++) {
                //    $(page[i]).stop();
                //}
                stopTwoDivPage();
            }
            if (fnName.split('(')[0] == "UncoverFormRight")
                stopTwoDivPage();
            //$('#PageBlack').stop();
            if (fnName.split('(')[0] == "UncoverFormBottomRight")
                stopTwoDivPage();
            //$('#PageBlack').stop();
            if (fnName.split('(')[0] == "UncoverFormTopRight")
                stopTwoDivPage();
            //$('#PageBlack').stop();
            if (fnName.split('(')[0] == "UncoverFromLeft")
                stopTwoDivPage();
            //$('#PageBlack').stop();
            if (fnName.split('(')[0] == "UncoverFormBottomLeft")
                stopTwoDivPage();
            //$('#PageBlack').stop();
            if (fnName.split('(')[0] == "UncoverFormTopLeft")
                stopTwoDivPage();
            //$('#PageBlack').stop();
            if (fnName.split('(')[0] == "UncoverFormTop")
                stopTwoDivPage();
            //$('#PageBlack').stop();
            if (fnName.split('(')[0] == "UncoverFormBottom")
                stopTwoDivPage();
            //$('#PageBlack').stop();
            if (fnName.split('(')[0] == "CoverFromLeft")
                stopTwoDivPage();
            //$("#" + id).stop();
            if (fnName.split('(')[0] == "CoverFormTopLeft")
                stopTwoDivPage();
            //$("#"+id).stop();
            if (fnName.split('(')[0] == "CoverFormBottomLeft")
                stopTwoDivPage();
            //$("#"+id).stop();
            if (fnName.split('(')[0] == "CoverFromRight")
                stopTwoDivPage();
            //$("#"+id).stop();
            if (fnName.split('(')[0] == "CoverFromBottomRight")
                stopTwoDivPage();
            //$("#"+id).stop();
            if (fnName.split('(')[0] == "CoverFromTopRight")
                stopTwoDivPage();
            //$("#"+id).stop();
            if (fnName.split('(')[0] == "CoverFromBottom")
                stopTwoDivPage();
            //$("#"+id).stop();
            if (fnName.split('(')[0] == "CoverFromTop")
                stopTwoDivPage();
            //$("#" + id).stop();
            if (fnName.split('(')[0] == "WipefromTop" || fnName.split('(')[0] == "WipefromLeft" || fnName.split('(')[0] == "WipefromRight" || fnName.split('(')[0] == "WipefromBottom")
                stopTwoDivPage();
            if (fnName.split('(')[0] == "ZoomInAnimate" || fnName.split('(')[0] == "ZoomOutAnimate" || fnName.split('(')[0] == "GrowInRotate")
                stopTwoDivPage();
        }
    }
    //end 13/06/2016
    $('.stop').hide();
    $('.play').show();
}



//function time tru thời gian duration (dung general *)
function getDuration() {
    var timeSlide = $("#slider-value").html();
    var timeSlide = parseFloat(parseFloat(timeSlide).toFixed(1));
    var list = listObject[nubmerPage];
    if (typeof list == typeof undefined) return 0;
    var listPage = list.listPage;
    if (listPage != null) {
        if (listPage[0].type == 0) {
            if (parseInt(listPage[0].EndTime) > timeSlide) {
                var endTime = listPage[0].EndTime;
                timeSlide = endTime - timeSlide.toFixed(1);
                return timeSlide;
            }
        }
    }
    return 0;
}

//get id page (dung general *)
function getPage() {
    var page = $("#leftMainContent").children('div > .CELPage');
    var count = 0;
    var value = 0;
    for (var i = 0; i < page.length; i++) {
        if (!$(page[i]).hasClass("hidden")) {
            count = count + 1;
            if (count == 1)
                value = i;
        }
    }
    if (count > 1) {
        var id = $(page[value]).attr('id');
        return id;
    } else
        return "";
}
//get id page (dung general *)
function getPage2() {
    //var page = $("#leftMainContent").children('div');
    var page = $("#leftMainContent").children('div > .CELPage');
    for (var i = 0; i < page.length; i++) {
        if (!$(page[i]).hasClass("hidden")) {
            if (!$(page[i + 1]).hasClass("hidden")) {
                var id = $(page[i + 1]).attr('id');
                return id;
            } else {
                var id = $(page[i]).attr('id');
                return id;
            }

        }
    }
}
//get id page (dung general *)
function getPagePush() {
    var page = $("#leftMainContent").children('div > .CELPage');
    var count = 0;
    var value = 0;
    for (var i = 0; i < page.length; i++) {
        if (!$(page[i]).hasClass("hidden")) {
            count = count + 1;
            if (count == 2) {
                var id = $(page[i]).attr('id');
                return id;
            }
            if (count == 1)
                value = i;
        }
    }
    if (count == 1) {
        var id = $(page[value]).attr('id');
        return id;
    }
    return "";
}

//set stop 
function stopTwoDivPage() {
    var page = $("#leftMainContent").children("div > .CELPage").not(".hidden");
    if (page.length > 0)
        $(page[0]).stop();
    if (page.length > 1)
        $(page[1]).stop();
    var pageBlack = $("#leftMainContent").children("#PageBlack");
    if (pageBlack.length > 0)
        $(pageBlack[0]).stop();
}

//1)pushformleft**************************
// chay hiệu ứng pushformleft
function PushFromLeft($IdPage, StartleftPage, EndLeftPage, duration) {
	
    duration = setDuration();
    $IdPage.css("left", StartleftPage);
    $IdPage.animate({
        left: EndLeftPage
    }, duration);
    var id = getPage();
    if (id != "") {
        $("#" + id).css({ "left": "", "top": "", "bottom": "" });
        $("#" + id).css("right", EndLeftPage);
        $("#" + id).animate({
            right: StartleftPage
        }, duration);
    }
}
//set value page pushformleft
function PushFromLeft_LeftPage(percent) {
    var id = getPage();
    var idPush = getPagePush();
    if (percent < 110 && percent >= 0) {
        $("#" + idPush).css('left', "-" + percent + "%");
        var percentPush = 100 - percent;
        $("#" + id).css('right', "-" + percentPush + "%");
    }
    else {
        $("#" + idPush).css('left', "0%");
        var percentPush = 100 - percent;
        $("#" + id).css('right', "-100%");
    }
}
//play hieu ứng pushformleft
function PushFormLeft_play() {

    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);

    $("#" + getPagePush()).animate({
        left: "0%"
    }, duration);
    $("#" + getPage()).animate({
        right: "-100%"
    }, duration);

    $('.stop').show();
    $('.play').hide();
}
//end 1)*****************************

//2)pushFormRight********************

function PushFromRight($IdPage, StartleftPage, EndLeftPage, duration) {
    duration=setDuration();
    $IdPage.css("left", StartleftPage);
    $IdPage.animate({
        left: EndLeftPage
    }, duration);

    var id = getPage();
    if (id != "") {
        $("#" + id).css({ "left": "", "top": "", "bottom": "" });
        $("#" + id).css("right", EndLeftPage);
        $("#" + id).animate({
            right: StartleftPage
        }, duration);
    }
}

function PushFromRight_RightPage(percent) {
    var id = getPage();
    var idPush = getPagePush();
    if (percent < 110 && percent >= 0) {
        $("#" + idPush).css('left', percent + "%");
        var percentPush = 100 - percent;
        $("#" + id).css('right', percentPush + "%");
    }
    else {
        $("#" + idPush).css('left',"0%");
        var percentPush = 100 - percent;
        $("#" + id).css('right',"100%");
    }
    
}

function PushFormRight_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    $("#" + getPagePush()).animate({
        left: "0%"
    }, duration);
    $("#" + getPage()).animate({
        right: "100%"
    }, duration);

    $('.stop').show();
    $('.play').hide();
}

//end 2)*****************************

//3) PushFromBottom******************
function PushFromBottom($IdPage, StartleftPage, EndLeftPage, duration) {
	duration= setDuration();
    $IdPage.css("top", StartleftPage);
    $IdPage.animate({
        top: EndLeftPage
    }, duration);

    var id = getPage();
    if (id != "") {
        $("#" + id).css({ "top": "", "left": "", "right": "" });
        $("#" + id).css("bottom", EndLeftPage);
        $("#" + id).animate({
            bottom: StartleftPage
        }, duration);
    }
}

function PushFromBottom_BottomPage(percent) {
    var id = getPage();
    var idPush = getPagePush();
    if (percent < 110 && percent >= 0) {
        $("#" + idPush).css('top', percent + "%");
        var percentPush = 100 - percent;
        $("#" + id).css('bottom', percentPush + "%");
    }
    else {
        $("#" + idPush).css('top', "0%");
        var percentPush = 100 - percent;
        $("#" + id).css('bottom', "100%");
    }
}

function PushFromBottom_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    $("#" + getPagePush()).animate({
        top: "0%"
    }, duration);
    $("#" + getPage()).animate({
        bottom: "100%"
    }, duration);


    $('.stop').show();
    $('.play').hide();
}
//end 3)*****************************

//4) PushFormTop*********************

function PushFromTop($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
    $IdPage.css("top", StartleftPage);
    $IdPage.animate({
        top: EndLeftPage
    }, duration);

    var id = getPage();
    if (id != "") {
        $("#" + id).css({ "top": "", "left": "", "right": "" });
        $("#" + id).css("bottom", EndLeftPage);
        $("#" + id).animate({
            bottom: StartleftPage
        }, duration);
    }
}

function PushFromTop_TopPage(percent) {
    var id = getPage();
    var idPush = getPagePush();
    if (percent < 110 && percent >= 0) {
        $("#" + idPush).css('top', "-" + percent + "%");
        var percentPush = 100 - percent;
        $("#" + id).css('bottom', "-" + percentPush + "%");
    } else {
        $("#" + idPush).css('top', "-%");
        var percentPush = 100 - percent;
        $("#" + id).css('bottom', "-100%");
    }
}

function PushFromTop_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    $("#" + getPagePush()).animate({
        top: "0%"
    }, duration);
    $("#" + getPage()).animate({
        bottom: "-100%"
    }, duration);

    $('.stop').show();
    $('.play').hide();
}

//end 4)*****************************

//19)UncoverFormRight****************
function UncoverFormRight($IdPage, StartleftPage, EndLeftPage, duration) {
	duration=setDuration();
	
    var id = getPage();
    if (id == "") {
        AddDivBlack();
        id = "PageBlack";
    }
    $("#" + id).css("left", StartleftPage);
    $("#" + id).animate({
        left: EndLeftPage
    }, duration);

}

function UncoverFormRight_TopPage(percent) {
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    var percentRight = (100 - percent);
    if (percentRight <= 100) {
        $("#" + id).css('left', "-" + percentRight + "%");
    }
    else {
        $("#" + id).css('left', "-100%");
    }
        
    
}

function UncoverFormRight_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    $("#" + id).animate({
        left: "-100%"
    }, duration);

    $('.stop').show();
    $('.play').hide();
}
//end 19)****************************

//20)UncoverFormBottomRight**********
function UncoverFormBottomRight($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
    var id = getPage();
    if (id == "") {
        AddDivBlack();
        id = "PageBlack";
    }
    $("#" + id).css("left", StartleftPage);
    $("#" + id).css("top", StartleftPage);
    $("#" + id).animate({
        left: EndLeftPage,
        top: EndLeftPage
    }, duration);
}
function UncoverFormBottomRight_TopPage(percent) {
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    var percentRight = (100 - percent);
    if (percentRight <=100) {
        $("#" + id).css('left', "-" + percentRight + "%");
        $("#" + id).css('top', "-" + percentRight + "%");
    } else {
        $("#" + id).css('left', "-100%");
        $("#" + id).css('top', "-100%");
    }
    
}
function UncoverFormBottomRight_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    $("#" + id).animate({
        left: "-100%",
        top: "-100%"
    }, duration);

    $('.stop').show();
    $('.play').hide();
}

//end 20)****************************

//21)UncoverFromTopRight*************
function UncoverFormTopRight($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
    var id = getPage();
    if (id == "") {
        AddDivBlack();
        id = "PageBlack";
    }
    $("#" + id).css("left", StartleftPage);
    $("#" + id).css("bottom", StartleftPage);
    $("#" + id).animate({
        left: EndLeftPage,
        bottom: EndLeftPage
    }, duration);
}
function UncoverFormTopRight_TopPage(percent) {
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    var percentRight = (100 - percent);
    if (percentRight <= 100) {
        $("#" + id).css('left', "-" + percentRight + "%");
        $("#" + id).css('bottom', "-" + percentRight + "%");
    } else {
        $("#" + id).css('left', "-100%");
        $("#" + id).css('bottom', "-100%");
    }
    
}
function UncoverFormTopRight_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    $("#" + id).animate({
        left: "-100%",
        bottom: "-100%"
    }, duration);

    $('.stop').show();
    $('.play').hide();
}
//end 21)****************************

//22)UncoverFormLeft***************** (làm chưa xong)

function UncoverFromLeft($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
    var id = getPage();
    if (id == "") {
        AddDivBlack();
        id = "PageBlack";
    }
    $("#" + id).css("right", StartleftPage);
    $("#" + id).animate({
        right: EndLeftPage
    }, duration);
}
function UncoverFromLeft_LeftPage(percent) {
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    var percentRight = (100 - percent);
    if (percentRight < 110) {
        $("#" + id).css('right', "-" + percentRight + "%");
    } else {
        $("#" + id).css('right', "-100%");
    }

}
function UncoverFromLeft_play() {

    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    $("#" + id).animate({
        right: "-100%"
    }, duration);
    $('.stop').show();
    $('.play').hide();
}

//end 22)****************************

//23)UncoverFormBottomLeft**********
function UncoverFormBottomLeft($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
    var id = getPage();
    if (id == "") {
        AddDivBlack();
        id = "PageBlack";
    }
    $("#" + id).css("right", StartleftPage);
    $("#" + id).css("top", StartleftPage);
    $("#" + id).animate({
        right: EndLeftPage,
        top: EndLeftPage
    }, duration);
}
function UncoverFormBottomLeft_TopPage(percent) {
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    var percentRight = (100 - percent);
    if (percentRight < 110) {
        $("#" + id).css('right', "-" + percentRight + "%");
        $("#" + id).css('top', "-" + percentRight + "%");
    } else {
        $("#" + id).css('right', "-100%");
        $("#" + id).css('top', "-100%");
    }
}
function UncoverFormBottomLeft_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    $("#" + id).animate({
        right: "-100%",
        top: "-100%"
    }, duration);

    $('.stop').show();
    $('.play').hide();
}

//end 23)****************************

//24)UncoverFormTopLeft**********
function UncoverFormTopLeft($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
    var id = getPage();
    if (id == "") {
        AddDivBlack();
        id = "PageBlack";
    }
    $("#" + id).css("right", StartleftPage);
    $("#" + id).css("bottom", StartleftPage);
    $("#" + id).animate({
        right: EndLeftPage,
        bottom: EndLeftPage
    }, duration);
}
function UncoverFormTopLeft_TopPage(percent) {
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    var percentRight = (100 - percent);
    if (percentRight < 110) {
        $("#" + id).css('right', "-" + percentRight + "%");
        $("#" + id).css('bottom', "-" + percentRight + "%");
    } else {
        $("#" + id).css('right', "-100%");
        $("#" + id).css('bottom', "-100%");
    }
}
function UncoverFormTopLeft_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    $("#" + id).animate({
        right: "-100%",
        bottom: "-100%"
    }, duration);

    $('.stop').show();
    $('.play').hide();
}

//end 24)****************************

//25) UncoverFormTop*************
function UncoverFormTop($IdPage, StartleftPage, EndLeftPage, duration) {
	duration=setDuration();
    var id = getPage();
    if (id == "") {
        AddDivBlack();
        id = "PageBlack";
    }
    $("#" + id).css("bottom", StartleftPage);
    $("#" + id).animate({
        bottom: EndLeftPage
    }, duration);
}
function UncoverFormTop_TopPage(percent) {
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    var percentRight = (100 - percent);
    if (percentRight < 110) {
        $("#" + id).css('bottom', "-" + percentRight + "%");
    } else {
        $("#" + id).css('bottom', "-100%");
    }
}
function UncoverFormTop_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    $("#" + id).animate({
        bottom: "-100%"
    }, duration);

    $('.stop').show();
    $('.play').hide();
}
//end 25)****************************

//26)UncoverFromBottom***************
function UncoverFormBottom($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
    var id = getPage();
    if (id == "") {
        AddDivBlack();
        id = "PageBlack";
    }
    $("#" + id).css("top", StartleftPage);
    $("#" + id).animate({
        top: EndLeftPage
    }, duration);
}
function UncoverFormBottom_TopPage(percent) {
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    var percentRight = (100 - percent);
    if (percentRight < 110) {
        $("#" + id).css('top', "-" + percentRight + "%");
    } else {
        $("#" + id).css('top', "-100%");
    }
}
function UncoverFormBottom_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    $("#" + id).animate({
        top: "-100%"
    }, duration);

    $('.stop').show();
    $('.play').hide();
}
//end 26)****************************

//27)CoverFormLeft*******************
function CoverFromLeft($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
    $IdPage.css("left", StartleftPage);
    $IdPage.animate({
        left: EndLeftPage
    }, duration);
}
function CoverFromLeft_LeftPage(percent) {
    var id = getPage2();
    if (percent <= 100 && percent>=0) {
        $("#" + id).css('left', "-" + percent + "%");
    } else {
        $("#" + id).css('left', "0%");
    }
}
function CoverFromLeft_play() {

    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage2();
    $("#" + id).animate({
        left: "0%"
    }, duration);
    $('.stop').show();
    $('.play').hide();
}
//end 27)****************************

//28)CoverFormTopLeft****************
function CoverFormTopLeft($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
    $IdPage.css("left", StartleftPage);
    $IdPage.css("top", StartleftPage);
    $IdPage.animate({
        left: EndLeftPage,
        top: EndLeftPage
    }, duration);
}

function CoverFormTopLeft_TopPage(percent) {
    var id = getPage2();
    if (percent <= 100 && percent>=0) {
        $("#" + id).css("left", "-" + percent + "%");
        $("#" + id).css('top', "-" + percent + "%");
    } else {
        $("#" + id).css("left", "0%");
        $("#" + id).css('top', "0%");
    }
}
function CoverFormTopLeft_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage2();
    $("#" + id).animate({
        left: "0%",
        top: "0%"
    }, duration);

    $('.stop').show();
    $('.play').hide();
}
//End 28)****************************

//29)CoverFormBottomLeft****************
function CoverFormBottomLeft($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
	
    $IdPage.css("left", StartleftPage);
    $IdPage.css("bottom", StartleftPage);
    $IdPage.animate({
        left: EndLeftPage,
        bottom: EndLeftPage
    }, duration);
}

function CoverFormBottomLeft_TopPage(percent) {
    var id = getPage2();
    if (percent <= 100 && percent>=0) {
        $("#" + id).css("left", "-" + percent + "%");
        $("#" + id).css('bottom', "-" + percent + "%");
    } else {
        $("#" + id).css("left", "0%");
        $("#" + id).css('bottom', "0%");
    }
}
function CoverFormBottomLeft_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage2();
    $("#" + id).animate({
        left: "0%",
        bottom: "0%"
    }, duration);

    $('.stop').show();
    $('.play').hide();
}
//End 29)****************************

//30)CoverFromRight******************
function CoverFromRight($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
    $IdPage.css("right", StartleftPage);
    $IdPage.animate({
        right: EndLeftPage
    }, duration);
}
function CoverFromRight_LeftPage(percent) {
    var id = getPage2();
    if (percent <= 100 && percent>=0) {
        $("#" + id).css('right', "-" + percent + "%");
    } else {
        $("#" + id).css('right', "0%");
    }
}
function CoverFromRight_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage2();
    $("#" + id).animate({
        right: "0%"
    }, duration);
    $('.stop').show();
    $('.play').hide();
}
//End 30)****************************

//31)CoverFromBottomRight******************
function CoverFromBottomRight($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
    $IdPage.css("right", StartleftPage);
    $IdPage.css("bottom", StartleftPage);
    $IdPage.animate({
        right: EndLeftPage,
        bottom: EndLeftPage
    }, duration);
}
function CoverFromBottomRight_LeftPage(percent) {
    var id = getPage2();
    if (percent <= 100 && percent>=0) {
        $("#" + id).css('right', "-" + percent + "%");
        $("#" + id).css('bottom', "-" + percent + "%");
    } else {
        $("#" + id).css('right', "0%");
        $("#" + id).css('bottom', "0%");
    }
}
function CoverFromBottomRight_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage2();
    $("#" + id).animate({
        right: "0%",
        bottom: "0%"
    }, duration);
    $('.stop').show();
    $('.play').hide();
}
//End 31)****************************

//32)CoverFromTopRight******************
function CoverFromTopRight($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
    $IdPage.css("right", StartleftPage);
    $IdPage.css("top", StartleftPage);
    $IdPage.animate({
        right: EndLeftPage,
        top: EndLeftPage
    }, duration);
}
function CoverFromTopRight_LeftPage(percent) {
    var id = getPage2();
    if (percent <= 100 && percent>=0) {
        $("#" + id).css('right', "-" + percent + "%");
        $("#" + id).css('top', "-" + percent + "%");
    } else {
        $("#" + id).css('right', "0%");
        $("#" + id).css('top', "0%");
    }
}
function CoverFromTopRight_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage2();
    $("#" + id).animate({
        right: "0%",
        top: "0%"
    }, duration);
    $('.stop').show();
    $('.play').hide();
}
//End 32)****************************

//33)CoverFromBottom******************
function CoverFromBottom($IdPage, StartleftPage, EndLeftPage, duration) {
	duration=setDuration();
	$IdPage.css("top","100%");
    $IdPage.css("bottom", StartleftPage);
    $IdPage.animate({
        bottom: EndLeftPage,
		top:"0%"
    }, duration);
}
function CoverFromBottom_LeftPage(percent) {
    var id = getPage2();
    if (percent <= 100 && percent>=0) {
        $("#" + id).css('bottom', "-" + percent + "%");
		$("#" + id).css('top',percent + "%");
    } else {
        $("#" + id).css('bottom', "0%");
		$("#" + id).css('top',"0%");
    }
}
function CoverFromBottom_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage2();
    $("#" + id).animate({
        bottom: "0%",
		top:"0%"
    }, duration);
    $('.stop').show();
    $('.play').hide();
}
//End 33)****************************

//34)CoverFromTop******************
function CoverFromTop($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
    $IdPage.css("top", StartleftPage);
    $IdPage.animate({
        top: EndLeftPage
    }, duration);
}
function CoverFromTop_LeftPage(percent) {
    var id = getPage2();
    if (percent <= 100 && percent>=0) {
        $("#" + id).css('top', "-" + percent + "%");
    } else {
        $("#" + id).css('top', "0%");
    }
}
function CoverFromTop_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage2();
    $("#" + id).animate({
        top: "0%"
    }, duration);
    $('.stop').show();
    $('.play').hide();
}
//End 34)****************************

//5)WipFormLeft**********************
function WipefromLeft($IdPage, StartleftPage, EndLeftPage, duration) {
	duration=setDuration();
    var id = getPage();
    if (id == "") {
        AddDivBlack();
        id = "PageBlack";
    }
    $("#" + id).css("left", "0%");
    $("#" + id).css("background", "linear-gradient(-90deg, black 75%, transparent)");
    $("#" + id).animate({
        left: EndLeftPage
    }, duration);
}

function WipefromLeft_LeftPage(percent) {
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    var percentRight = (100 - percent);
    if (percentRight < 100) {
        $("#" + id).css('left', percentRight + "%");
        //    $("#" + id).css("background", "linear-gradient(-90deg, black " + percentRight + "%, transparent)");
        //} else {
        //    $("#" + id).css("background", "linear-gradient(-90deg, transparent, transparent)");
    } else {
        $("#" + id).css('left',"100%");
    }
}

function WipefromLeft_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    $("#" + id).animate({
        left: "100%"
    }, duration);
    $('.stop').show();
    $('.play').hide();
}
//End 5)****************************

//8)WipFormRight********************
function WipefromRight($IdPage, StartleftPage, EndLeftPage, duration) {
	duration=setDuration();
    var id = getPage();
    if (id == "") {
        AddDivBlack();
        id = "PageBlack";
    }
    $("#" + id).css("right", StartleftPage);
    $("#" + id).css("background", "linear-gradient(90deg, black 75%, transparent)");
    $("#" + id).animate({
        right: EndLeftPage
    }, duration);
}

function WipefromRight_LeftPage(percent) {
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    var percentRight = (100 - percent);
    if (percentRight < 110) {
        $("#" + id).css('right', percentRight + "%");
        //    $("#" + id).css("background", "linear-gradient(-90deg, black " + percentRight + "%, transparent)");
        //} else {
        //    $("#" + id).css("background", "linear-gradient(-90deg, transparent, transparent)");
    }
    else {
        $("#" + id).css('right',"100%");
    }
}

function WipefromRight_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    $("#" + id).animate({
        right: "100%"
    }, duration);
    $('.stop').show();
    $('.play').hide();
}
//End 8)****************************

//11)WipFormBottom******************
function WipefromBottom($IdPage, StartleftPage, EndLeftPage, duration) {
	duration=setDuration();
    var id = getPage();
    if (id == "") {
        AddDivBlack();
        id = "PageBlack";
    }
    $("#" + id).css("bottom", StartleftPage);
    $("#" + id).css("background", "linear-gradient(180deg, black 75%, transparent)");
    $("#" + id).animate({
        bottom: EndLeftPage
    }, duration);
}

function WipefromBottom_LeftPage(percent) {
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    var percentRight = (100 - percent);
    if (percentRight < 110) {
        $("#" + id).css('bottom', percentRight + "%");
    } else {
        $("#" + id).css('bottom', "100%");
    }
}

function WipefromBottom_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    $("#" + id).animate({
        bottom: "100%"
    }, duration);
    $('.stop').show();
    $('.play').hide();
}
//End 11)***************************

//12)WipFormTop*********************
function WipefromTop($IdPage, StartleftPage, EndLeftPage, duration) {
	duration=setDuration();
    var id = getPage();
    if (id == "") {
        AddDivBlack();
        id = "PageBlack";
    }
    $("#" + id).css("top", StartleftPage);
    $("#" + id).css("background", "linear-gradient(0deg, black 75%, transparent)");
    $("#" + id).animate({
        top: EndLeftPage
    }, duration);
}

function WipefromTop_LeftPage(percent) {
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    var percentRight = (100 - percent);
    if (percentRight < 110) {
        $("#" + id).css('top', percentRight + "%");
    }else
    {
        $("#" + id).css('top', "100%");
    }
}

function WipefromTop_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPage();
    if (id == "") {
        id = "PageBlack";
    }
    $("#" + id).animate({
        top: "100%"
    }, duration);
    $('.stop').show();
    $('.play').hide();
}

//End 12)***************************

//6)WipeFormBottomLeft***************
function WipeFormBottomLeft() {
    AddDivBlack();
    $("#PageBlack").css("background", "-webkit-linear-gradient(35deg,transparent 1%,black 10% , black)"); /* For Safari 5.1 to 6.0 */
    $("#PageBlack").css("background", "-o-linear-gradient(35deg,transparent 1%,black 10% , black)"); /* For Opera 11.1 to 12.0 */
    $("#PageBlack").css("background", "-moz-linear-gradient(35deg,transparent 1%,black 10% , black)"); /* For Firefox 3.6 to 15 */
    $("#PageBlack").css("background", "linear-gradient(35deg,transparent 1%,black 10% , black)"); /* Standard syntax (must be last) */
}
function WipeFormBottomLeft_AutoPlay(percent) {
    var percentRight = (100 - percent);
	if(percentRight<=100){
		$("#PageBlack").css("z-index",100);
		$("#PageBlack").css("background", "-webkit-linear-gradient(35deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)"); /* For Safari 5.1 to 6.0 */
		$("#PageBlack").css("background", "-o-linear-gradient(35deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)"); /* For Opera 11.1 to 12.0 */
		$("#PageBlack").css("background", "-moz-linear-gradient(35deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)"); /* For Firefox 3.6 to 15 */
		$("#PageBlack").css("background", "linear-gradient(35deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)");
	}else{
		$("#PageBlack").css("background","");
		$("#PageBlack").css("z-index",-1);
	}
}
function WipeFormBottomLeft_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}
//End 6)****************************
//7)WipeFromTopLeft*****************
function WipeFormTopLeft() {
    AddDivBlack();
	$("#PageBlack").css({"background": "-webkit-linear-gradient(125deg,transparent 1%,black 10% , black)",
	"background": "-o-linear-gradient(125deg,transparent 1%,black 10% , black)",
	"background": "-moz-linear-gradient(125deg,transparent 1%,black 10% , black)",
	"background":"linear-gradient(125deg,transparent 1%,black 10% , black)"});
}
function WipeFormTopLeft_AutoPlay(percent) {
    var percentRight = (100 - percent);
	if(percentRight<=100){
		$("#PageBlack").css("z-index",100);
	$("#PageBlack").css({"background":"-webkit-linear-gradient(125deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
	"background":"-o-linear-gradient(125deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
	"background":"-moz-linear-gradient(125deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
	"background":"linear-gradient(125deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)"});
	}else{
		$("#PageBlack").css("background","");
		$("#PageBlack").css("z-index",-1);
	}
    
}
function WipeFormTopLeft_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}
//End 7)****************************

//9)WipeFormBottomRight*************
function WipeFormBottomRight() {
    AddDivBlack();
    //$("#PageBlack").css("background", "-webkit-linear-gradient(-35deg,transparent 1%,black 10% , black)"); /* For Safari 5.1 to 6.0 */
    //$("#PageBlack").css("background", "-o-linear-gradient(-35deg,transparent 1%,black 10% , black)"); /* For Opera 11.1 to 12.0 */
    //$("#PageBlack").css("background", "-moz-linear-gradient(-35deg,transparent 1%,black 10% , black)"); /* For Firefox 3.6 to 15 */
    //$("#PageBlack").css("background", "linear-gradient(-35deg,transparent 1%,black 10% , black)"); /* Standard syntax (must be last) */
	
	$("#PageBlack").css({"background": "-webkit-linear-gradient(-35deg,transparent 1%,black 10% , black)",
	"background":"-o-linear-gradient(-35deg,transparent 1%,black 10% , black)",
    "background":"-moz-linear-gradient(-35deg,transparent 1%,black 10% , black)",
    "background":"linear-gradient(-35deg,transparent 1%,black 10% , black)"});
}
function WipeFormBottomRight_AutoPlay(percent) {
    var percentRight = (100 - percent);
	if(percentRight<=100){
		$("#PageBlack").css("z-index",100);
			$("#PageBlack").css({"background": "-webkit-linear-gradient(-35deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "-o-linear-gradient(-35deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "-moz-linear-gradient(-35deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "linear-gradient(-35deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)"});
	}else{
		$("#PageBlack").css("background","");
		$("#PageBlack").css("z-index",-1);
	}
}
function WipeFormBottomRight_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}
//End 9)****************************

//10)WipeFormTopRight***************
function WipeFormTopRight() {
    AddDivBlack();
    $("#PageBlack").css("background", "-webkit-linear-gradient(-125deg,transparent 1%,black 10% , black)"); /* For Safari 5.1 to 6.0 */
    $("#PageBlack").css("background", "-o-linear-gradient(-125deg,transparent 1%,black 10% , black)"); /* For Opera 11.1 to 12.0 */
    $("#PageBlack").css("background", "-moz-linear-gradient(-125deg,transparent 1%,black 10% , black)"); /* For Firefox 3.6 to 15 */
    $("#PageBlack").css("background", "linear-gradient(-125deg,transparent 1%,black 10% , black)"); /* Standard syntax (must be last) */
}
function WipeFormTopRight_AutoPlay(percent) {
    var percentRight = (100 - percent);
	if(percentRight<=100){
		$("#PageBlack").css("z-index",100);
		$("#PageBlack").css("background", "-webkit-linear-gradient(-125deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)"); 
		$("#PageBlack").css("background", "-o-linear-gradient(-125deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)"); /* For Opera 11.1 to 12.0 */
		$("#PageBlack").css("background", "-moz-linear-gradient(-125deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)"); /* For Firefox 3.6 to 15 */
		$("#PageBlack").css("background", "linear-gradient(-125deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)"); 
	}else{
		$("#PageBlack").css("background","");
		$("#PageBlack").css("z-index",-1);
	}
}
function WipeFormTopRight_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}
//End 10)***************************

//13)SplitHorizontalOut*************
function SplitHorizontalOut() {
    AddDivBlack();
    $("#PageBlack").css("background", "-webkit-linear-gradient(90deg ,black 40%,transparent 50%,transparent ,transparent 50%, black 60%)"); /* For Safari 5.1 to 6.0 */
    $("#PageBlack").css("background", "-o-linear-gradient(90deg ,black 40%,transparent 50%,transparent ,transparent 50%, black 60%)"); /* For Opera 11.1 to 12.0 */
    $("#PageBlack").css("background", "-moz-linear-gradient(90deg ,black 40%,transparent 50%,transparent ,transparent 50%, black 60%)"); /* For Firefox 3.6 to 15 */
    $("#PageBlack").css("background", "linear-gradient(90deg ,black 40%,transparent 50%,transparent ,transparent 50%, black 60%)"); /* Standard syntax (must be last) */
}
function SplitHorizontalOut_AutoPlay(percent) {
    var percentPage = (100 - percent) / 2;
	if(percentPage <=50){
		var percentLeft = 50 - percentPage;
		var percentRight = 50 + percentPage;
		$("#PageBlack").css("z-index",100);
		$("#PageBlack").css("background", "-webkit-linear-gradient(90deg ,black " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, black " + (percentRight + 10) + "%)"); /* For Safari 5.1 to 6.0 */
		$("#PageBlack").css("background", "-o-linear-gradient(90deg ,black " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, black " + (percentRight + 10) + "%)"); /* For Opera 11.1 to 12.0 */
		$("#PageBlack").css("background", "-moz-linear-gradient(90deg ,black " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, black " + (percentRight + 10) + "%)"); /* For Firefox 3.6 to 15 */
		$("#PageBlack").css("background", "linear-gradient(90deg ,black " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, black " + (percentRight + 10) + "%)"); /* Standard syntax (must be last) */
	}else{
		$("#PageBlack").css("background","");
		$("#PageBlack").css("z-index",-1);
	}
    
}
function SplitHorizontalOut_play() {
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}
//End 13)***************************
//14)SplitVerticalOut***************
function SplitVerticalOut() {
    AddDivBlack();
    $("#PageBlack").css("background", "-webkit-linear-gradient(180deg ,black 40%,transparent 50%,transparent ,transparent 50%, black 60%)"); /* For Safari 5.1 to 6.0 */
    $("#PageBlack").css("background", "-o-linear-gradient(180deg ,black 40%,transparent 50%,transparent ,transparent 50%, black 60%)"); /* For Opera 11.1 to 12.0 */
    $("#PageBlack").css("background", "-moz-linear-gradient(180deg ,black 40%,transparent 50%,transparent ,transparent 50%, black 60%)"); /* For Firefox 3.6 to 15 */
    $("#PageBlack").css("background", "linear-gradient(180deg ,black 40%,transparent 50%,transparent ,transparent 50%, black 60%)"); /* Standard syntax (must be last) */
}
function SplitVerticalOut_AutoPlay(percent) {
    var percentPage = (100 - percent) / 2;
	if(percentPage <=50){
	
		var percentLeft = 50 - percentPage;
		var percentRight = 50 + percentPage;
		$("#PageBlack").css("z-index",100);
		$("#PageBlack").css("background", "-webkit-linear-gradient(180deg ,black " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, black " + (percentRight + 10) + "%)"); /* For Safari 5.1 to 6.0 */
		$("#PageBlack").css("background", "-o-linear-gradient(180deg ,black " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, black " + (percentRight + 10) + "%)"); /* For Opera 11.1 to 12.0 */
		$("#PageBlack").css("background", "-moz-linear-gradient(180deg ,black " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, black " + (percentRight + 10) + "%)"); /* For Firefox 3.6 to 15 */
		$("#PageBlack").css("background", "linear-gradient(180deg ,black " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, black " + (percentRight + 10) + "%)"); /* Standard syntax (must be last) */
	}else{
		$("#PageBlack").css("background","");
		$("#PageBlack").css("z-index",-1);
	}
}
function SplitVerticalOut_play() {
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}
//End 14)****************************

//15)SplitHorizontalIn***************
function SplitHorizontalIn() {
    AddDivBlack();
    $("#PageBlack").css("background", "-webkit-linear-gradient(90deg ,transparent 1%,black 10%, black 90%,transparent 100%)"); /* For Safari 5.1 to 6.0 */
    $("#PageBlack").css("background", "-o-linear-gradient(90deg ,transparent 1%,black 10%, black 90%,transparent 100%)"); /* For Opera 11.1 to 12.0 */
    $("#PageBlack").css("background", "-moz-linear-gradient(90deg ,transparent 1%,black 10%, black 90%,transparent 100%)"); /* For Firefox 3.6 to 15 */
    $("#PageBlack").css("background", "linear-gradient(90deg ,transparent 1%,black 10%, black 90%,transparent 100%)"); /* Standard syntax (must be last) */
}
function SplitHorizontalIn_AutoPlay(percent) {
    var percentPage = (100 - percent) / 2;
	
	if(percentPage <=50){
		var percentLeft = percentPage;
		var percentRight = 100 - percentPage;
		var percentLeftBlack = 0;
		var percentRightBlack = 0;
		if ((percentLeft + 10) > 50 || (percentRight - 10) < 50) {
			percentLeftBlack = 50;
			percentRightBlack = 50;
		}
		else {
			percentLeftBlack = percentLeft + 10;
			percentRightBlack = percentRight - 10;
		}
		$("#PageBlack").css("z-index",100);
		//transparent " + percentLeft + "%,black " + (percentLeft + 10) + "%, black " + (percentRight-10) + "%,transparent " + percentRight + "%
		$("#PageBlack").css("background", "-webkit-linear-gradient(90deg ,transparent " + percentLeft + "%,black " + percentLeftBlack + "%, black " + percentRightBlack + "%,transparent " + percentRight + "%)"); /* For Safari 5.1 to 6.0 */
		$("#PageBlack").css("background", "-o-linear-gradient(90deg ,transparent " + percentLeft + "%,black " + percentLeftBlack + "%, black " + percentRightBlack + "%,transparent " + percentRight + "%)"); /* For Opera 11.1 to 12.0 */
		$("#PageBlack").css("background", "-moz-linear-gradient(90deg transparent " + percentLeft + "%,black " + percentLeftBlack + "%, black " + percentRightBlack + "%,transparent " + percentRight + "%)"); /* For Firefox 3.6 to 15 */
		$("#PageBlack").css("background", "linear-gradient(90deg ,transparent " + percentLeft + "%,black " + percentLeftBlack + "%, black " + percentRightBlack + "%,transparent " + percentRight + "%)"); /* Standard syntax (must be last) */
	}else{
		$("#PageBlack").css("background","");
		$("#PageBlack").css("z-index",-1);
	}
}
function SplitHorizontalIn_play() {
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}
//End 15)****************************

//16)SplitVerticalIn*****************
function SplitVerticalIn() {
    AddDivBlack();
    $("#PageBlack").css("background", "-webkit-linear-gradient(180deg ,transparent 1%,black 10%, black 90%,transparent 100%)"); /* For Safari 5.1 to 6.0 */
    $("#PageBlack").css("background", "-o-linear-gradient(180deg ,transparent 1%,black 10%, black 90%,transparent 100%)"); /* For Opera 11.1 to 12.0 */
    $("#PageBlack").css("background", "-moz-linear-gradient(180deg ,transparent 1%,black 10%, black 90%,transparent 100%)"); /* For Firefox 3.6 to 15 */
    $("#PageBlack").css("background", "linear-gradient(180deg ,transparent 1%,black 10%, black 90%,transparent 100%)"); /* Standard syntax (must be last) */
}
function SplitVerticalIn_AutoPlay(percent) {
    var percentPage = (100 - percent) / 2;
	if(percentPage <=50){
	
		var percentLeft = percentPage;
		var percentRight = 100 - percentPage;
		var percentLeftBlack = 0;
		var percentRightBlack = 0;
		if ((percentLeft + 10) > 50 || (percentRight - 10) < 50) {
			percentLeftBlack = 50;
			percentRightBlack = 50;
		}
		else {
			percentLeftBlack = percentLeft + 10;
			percentRightBlack = percentRight - 10;
		}
		$("#PageBlack").css("z-index",100);
		$("#PageBlack").css("background", "-webkit-linear-gradient(180deg ,transparent " + percentLeft + "%,black " + percentLeftBlack + "%, black " + percentRightBlack + "%,transparent " + percentRight + "%)"); /* For Safari 5.1 to 6.0 */
		$("#PageBlack").css("background", "-o-linear-gradient(180deg ,transparent " + percentLeft + "%,black " + percentLeftBlack + "%, black " + percentRightBlack + "%,transparent " + percentRight + "%)"); /* For Opera 11.1 to 12.0 */
		$("#PageBlack").css("background", "-moz-linear-gradient(180deg ,transparent " + percentLeft + "%,black " + percentLeftBlack + "%, black " + percentRightBlack + "%,transparent " + percentRight + "%)"); /* For Firefox 3.6 to 15 */
		$("#PageBlack").css("background", "linear-gradient(180deg ,transparent " + percentLeft + "%,black " + percentLeftBlack + "%, black " + percentRightBlack + "%,transparent " + percentRight + "%)"); /* Standard syntax (must be last) */
	}else{
		$("#PageBlack").css("background","");
		$("#PageBlack").css("z-index",-1);
	}
}
function SplitVerticalIn_play() {
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}
//16)********************************

//17)Circle**************************
function CricleAnimate() {
    AddDivBlack();
    $("#PageBlack").css("background", "-webkit-radial-gradient(circle, transparent 1% , black 10%)"); /* For Safari 5.1 to 6.0 */
    $("#PageBlack").css("background", "-o-radial-gradient(circle, transparent 1% , black 10%)"); /* For Opera 11.1 to 12.0 */
    $("#PageBlack").css("background", "-moz-radial-gradient(circle, transparent 1% , black 10%)"); /* For Firefox 3.6 to 15 */
    $("#PageBlack").css("background", "radial-gradient(circle, transparent 1% , black 10%)"); /* Standard syntax (must be last) */
}
function CricleAnimate_AutoPlay(percent) {
    var percentRight = (100 - percent);
	if(percentRight <=100){
		$("#PageBlack").css("z-index",100);
		$("#PageBlack").css("background", "-webkit-radial-gradient(circle, transparent " + percentRight + "% , black " + (percentRight + 10) + "%)");
		$("#PageBlack").css("background", "-o-radial-gradient(circle, transparent " + percentRight + "% , black " + (percentRight + 10) + "%)");
		$("#PageBlack").css("background", "-moz-radial-gradient(circle, transparent " + percentRight + "% , black " + (percentRight + 10) + "%)");
		$("#PageBlack").css("background", "radial-gradient(circle, transparent " + percentRight + "% , black " + (percentRight + 10) + "%)");
	}else{
		$("#PageBlack").css("background","");
		$("#PageBlack").css("z-index",-1);
	}
}
function CricleAnimate_play() {
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}
//End 17)****************************

//18)DiamondAnimate****************** 
function DiamondAnimate() {
    AddDivBlack();
    $("#PageBlack").css("background", "");
    $("#PageBlack").append("<div id=\"PageBlack1\" style=\"height: 50%;width: 50%;background: black; float:left\"></div>" +
        "<div id=\"PageBlack2\" style=\"height: 50%;width: 50%;background: black; float:left\"></div>" +
        "<div id=\"PageBlack3\" style=\"height: 50%;width: 50%;background: black; float:left\"></div>" +
        "<div id=\"PageBlack4\" style=\"height: 50%;width: 50%;background: black; float:left\"></div>");
    //bottom right
    $("#PageBlack1").css({"background":"-webkit-linear-gradient(-25deg,transparent 1%,black 10% , black)",
    "background": "-o-linear-gradient(-25deg,transparent 1%,black 10% , black)",
    "background": "-moz-linear-gradient(-25deg,transparent 1%,black 10% , black)",
    "background": "linear-gradient(-25deg,transparent 1%,black 10% , black)"}); 
    //bottom left
    $("#PageBlack2").css({"background": "-webkit-linear-gradient(25deg,transparent 1%,black 10% , black)",
    "background": "-o-linear-gradient(25deg,transparent 1%,black 10% , black)",
    "background": "-moz-linear-gradient(25deg,transparent 1%,black 10% , black)",
    "background": "linear-gradient(25deg,transparent 1%,black 10% , black)"}); 
    //top right
    $("#PageBlack3").css({"background": "-webkit-linear-gradient(-155deg,transparent 1%,black 10% , black)",
    "background": "-o-linear-gradient(-155deg,transparent 1%,black 10% , black)",
    "background": "-moz-linear-gradient(-155deg,transparent 1%,black 10% , black)",
    "background": "linear-gradient(-155deg,transparent 1%,black 10% , black)"}); 
    //top left
    $("#PageBlack4").css({"background": "-webkit-linear-gradient(155deg,transparent 1%,black 10% , black)",
    "background": "-o-linear-gradient(155deg,transparent 1%,black 10% , black)",
    "background": "-moz-linear-gradient(155deg,transparent 1%,black 10% , black)",
    "background": "linear-gradient(155deg,transparent 1%,black 10% , black)"}); 

}
function DiamondAnimate_AutoPlay(percent) {
    var percentRight = ((100 - percent) < 100) ? (100 - percent) : 100;
	if(percent >0){
		$("#PageBlack").css("z-index",100);

    //bottom right
    $("#PageBlack1").css({"background": "-webkit-linear-gradient(-25deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "-o-linear-gradient(-25deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "-moz-linear-gradient(-25deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "linear-gradient(-25deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)"});
    //bottom left
    $("#PageBlack2").css({"background": "-webkit-linear-gradient(25deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "-o-linear-gradient(25deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "-moz-linear-gradient(25deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "linear-gradient(25deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)"});
    //top right
    $("#PageBlack3").css({"background": "-webkit-linear-gradient(-155deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "-o-linear-gradient(-155deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "-moz-linear-gradient(-155deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "linear-gradient(-155deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)"}); 
    //top left
    $("#PageBlack4").css({"background": "-webkit-linear-gradient(155deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "-o-linear-gradient(155deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "-moz-linear-gradient(155deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)",
    "background": "linear-gradient(155deg,transparent " + percentRight + "%,black " + (percentRight + 10) + "% , black)"}); 

	}else{
		$("#PageBlack1").css("background","");
		$("#PageBlack2").css("background","");
		$("#PageBlack3").css("background","");
		$("#PageBlack4").css("background","");
		$("#PageBlack").css("z-index",-1);
	}
}
function DiamondAnimate_play() {
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}
//End 18)****************************

//39)ZoomOut*************************
function ZoomOutAnimate($IdPage, StartleftPage, EndLeftPage, duration) {
	//AddDivBlack();
	duration=setDuration();
	var check = $("#PageBlack").attr("id");
    if (check == "PageBlack") {
        $("#PageBlack").remove();
		$("#leftMainContent").append("<div id='PageBlack' class='PageBlack' style=\"height:100%; width:100%; position:absolute; z-index:100; Background:black; \"></div>");
    }
    else
        $("#leftMainContent").append("<div id='PageBlack' class='PageBlack' style=\"height:100%; width:100%; position:absolute; z-index:100; Background:black; \"></div>");
	
	$("#PageBlack").css({"z-index":"100","background":"balck","opacity":"1"});
	//{ "z-index": dataZindex, "left": "", "top": "", "right": "", "bottom": "" }
	$("#PageBlack").css("background","balck");
	$("#PageBlack").css("opacity","1");
    $IdPage.css("left", "-50%");
    $IdPage.css("top", "-50%");
    $IdPage.css("height", StartleftPage);
    $IdPage.css("width", StartleftPage);

    $IdPage.animate({
        height: EndLeftPage,
        width: EndLeftPage,
        left: "0%",
        top: "0%"
    }, duration);
	$("#PageBlack").animate({
		 height: "40%",
		 width: "40%",
		 left:"30%",
		 top:"30%",
		 opacity: "0"
	}, duration)
	 .queue(function() {
      $( this ).css("z-index",-1);
    });
}

function ZoomOutAnimate_AutoPlay(percent) {
    var id = getPagePush();
    if (percent > 0) {
        var percentHW = 100 + percent;
        $("#" + id).css("height", percentHW + "%");
        $("#" + id).css("width", percentHW + "%");
        $("#" + id).css("left", "-" + (percent) / 2 + "%");
        $("#" + id).css("top", "-" + (percent) / 2 + "%");
		if(percent >= 40){
			$("#PageBlack").css("z-index",100);
			$("#PageBlack").css("height",percent+"%");
			$("#PageBlack").css("width",percent+"%");
			$("#PageBlack").css("left",(30-((percent-40)/2))+"%");
			$("#PageBlack").css("top",(30-((percent-40)/2))+"%");
			var opacity=percent/100;
			$("#PageBlack").css("opacity",(percent/100));
		}
    } else {
        $("#" + id).css("height","100%");
        $("#" + id).css("width", "100%");
        $("#" + id).css("left", "0%");
        $("#" + id).css("top", "0%");
    }
}
function ZoomOutAnimate_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);

    $("#" + getPagePush()).animate({
        height: "100%",
        width: "100%",
        left: "0%",
        top: "0%"
    }, duration);
	$("#PageBlack").animate({
		 height: "40%",
		 width: "40%",
		 left:"30%",
		 top:"30%",
		 opacity: "0"
	}, duration)
	 .queue(function() {
      $( this ).css("z-index",-1);
    });
    $('.stop').show();
    $('.play').hide();
}
//End 39)****************************

//40)ZoomIn**************************
function ZoomInAnimate($IdPage, StartleftPage, EndLeftPage, duration) {
	
	duration=setDuration();
    $IdPage.css("left", "50%");
    $IdPage.css("top", "50%");
    $IdPage.css("height", StartleftPage);
    $IdPage.css("width", StartleftPage);

    $IdPage.animate({
        height: EndLeftPage,
        width: EndLeftPage,
        left: "0%",
        top: "0%"
    }, duration);
}

function ZoomInAnimate_AutoPlay(percent) {
    var id = getPagePush();
    if (percent <= 100) {
        var percentHW = (percent > 0) ? (100 - percent) : 100;
        var percentLT = (percent > 0) ? (percent / 2) : 0;
        $("#" + id).css("height", percentHW + "%");
        $("#" + id).css("width", percentHW + "%");
        $("#" + id).css("left", percentLT + "%");
        $("#" + id).css("top", percentLT + "%");
    }else{
        $("#" + id).css("height", "100%");
        $("#" + id).css("width", "100%");
        $("#" + id).css("left", "0%");
        $("#" + id).css("top", "0%");
    }
    
}

function ZoomInAnimate_play() {
    var duration = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);

    $("#" + getPagePush()).animate({
        height: "100%",
        width: "100%",
        left: "0%",
        top: "0%"
    }, duration);
    $('.stop').show();
    $('.play').hide();
}
//End 40)****************************

//41)GrowInRotate********************
function GrowInRotate($IdPage, StartleftPage, EndLeftPage, durationVaule) {
	durationVaule=setDuration();
    $IdPage.css("left", "50%");
    $IdPage.css("top", "50%");
    $IdPage.css("height", StartleftPage);
    $IdPage.css("width", StartleftPage);
    $IdPage.css("opacity", "0");

    $IdPage.animate({
        height: "100%",
        width: "100%",
        left: "0%",
        top: "0%",
        opacity: "1"
    }, durationVaule);
    $({ deg: 0 }).animate({ deg: 360, }, {
        duration: durationVaule,
        step: function (now) {
            $IdPage.css({
                transform: 'rotate(' + now + 'deg)',

            });
        }
    });
}

function GrowInRotate_AutoPlay(percent) {
    var id = getPagePush();
    if (percent <= 100 && percent >= 0) {
        var percentHW = (percent > 0) ? (100 - percent) : 100;
        var percentLT = (percent > 0) ? (percent / 2) : 0;
        $("#" + id).css("height", percentHW + "%");
        $("#" + id).css("width", percentHW + "%");
        $("#" + id).css("left", percentLT + "%");
        $("#" + id).css("top", percentLT + "%");
        var percentRotate = (percent > 0) ? percent : 100;
        $("#" + id).css("transform", 'rotate(' + (percentRotate * 3.6) + 'deg)');
        var percentOpacity = (percent > 30) ? (percent / 100) : 0.3;
        $("#" + id).css("opacity", percentOpacity);
    } else {
        $("#" + id).css("height","100%");
        $("#" + id).css("width", "100%");
        $("#" + id).css("left","0%");
        $("#" + id).css("top", "0%");
        $("#" + id).css("transform", 'rotate(0deg)');
        $("#" + id).css("opacity", 1);
    }
    

}

function GrowInRotate_play() {
    var durationVaule = getDuration() * 1000;
    timer = null;
    timer = setInterval(playTime, step);
    var id = getPagePush();
    $("#" + id).animate({
        height: "100%",
        width: "100%",
        left: "0%",
        top: "0%",
        opacity: "1"
    }, durationVaule);
    $({ deg: 0 }).animate({ deg: 360, }, {
        duration: durationVaule,
        step: function (now) {
            $("#" + id).css({
                transform: 'rotate(' + now + 'deg)',
            });
        }
    });
}
//End 41)****************************

//35)ClockWise***********************(làm chưa xong mai làm tiếp)
function ClockWiseAnimiate($IdPage, StartleftPage, EndLeftPage, duration) {
    AddDivBlack();
    $("#PageBlack").css("background", "");
    $("#PageBlack").css({ "height": "200%", "width": "150%", "left": "-25%", "top": "-50%" });
    $("#PageBlack").append("<div id=\"PageBlack1\" style=\"height: 50%;width: 50%; float:left;overflow: hidden \"><div id=\"ChildPageBlack1\" style=\"height: 100%;width: 100%;background: black;\"></div></div>" +
       "<div id=\"PageBlack2\" style=\"height: 50%;width: 50%; float:left; overflow: hidden \"><div id=\"ChildPageBlack2\" style=\"height: 100%;width: 100%;background: black;\"></div></div>" +
       "<div id=\"PageBlack3\" style=\"height: 50%;width: 50%; float:left; overflow: hidden \"><div id=\"ChildPageBlack3\" style=\"height: 100%;width: 100%;background: black;\"></div></div>" +
       "<div id=\"PageBlack4\" style=\"height: 50%;width: 50%; float:left; overflow: hidden \"><div id=\"ChildPageBlack4\" style=\"height: 100%;width: 100%;background: black;\"></div></div>");
}

function ClockWiseAnimiate_AutoPlay(percent) {
	if(percent >=0){
		$("#PageBlack").css("z-index",100);
    var percentPage = 100 - percent;
    if (percentPage > 1) {
        var percent1 = (percentPage < 25) ? percentPage : 26;
        $("#ChildPageBlack2").css("transform", "rotate(" + percent1 * 3.6 + "deg)");
        $("#ChildPageBlack2").css("transform-origin", "bottom left");
        if (percentPage >= 25) {
            var percent2 = (percentPage < 50) ? percentPage : 51;
            $("#ChildPageBlack4").css("transform", "rotate(" + ((percent2 - 25) * 3.6) + "deg)");
            $("#ChildPageBlack4").css("transform-origin", "top left");
        }
        if (percentPage >= 50) {
            var percent3 = (percentPage < 75) ? percentPage : 76;
            $("#ChildPageBlack3").css("transform", "rotate(" + ((percent3 - 50) * 3.6) + "deg)");
            $("#ChildPageBlack3").css("transform-origin", "top right");
        }
        if (percentPage >= 75) {
            var percent4 = (percentPage < 100) ? percentPage : 101;
            $("#ChildPageBlack1").css("transform", "rotate(" + ((percent4 - 75) * 3.6) + "deg)");
            $("#ChildPageBlack1").css("transform-origin", "bottom right");
        }
    }
	}else{
		$("#PageBlack").css("z-index",-1);
	}
}

function ClockWiseAnimiate_RollPlay(percent) {
	$("#PageBlack").css("z-index",100);
    var percentPage = 100 - percent;
    if (percentPage >= 75) {
        var percent4 = (percentPage < 100) ? percentPage : 101;
        $("#ChildPageBlack1").css("transform", "rotate(" + ((percent4 - 75) * 3.6) + "deg)");
        $("#ChildPageBlack1").css("transform-origin", "bottom right");
    } else {
        $("#ChildPageBlack1").css("transform", "rotate( 0deg)");
        $("#ChildPageBlack1").css("transform-origin", "bottom right");
    }
    if (percentPage >= 50) {
        var percent3 = (percentPage < 75) ? percentPage : 76;
        $("#ChildPageBlack3").css("transform", "rotate(" + ((percent3 - 50) * 3.6) + "deg)");
        $("#ChildPageBlack3").css("transform-origin", "top right");
    } else {
        $("#ChildPageBlack3").css("transform", "rotate(0deg)");
        $("#ChildPageBlack3").css("transform-origin", "top right");
    }
    if (percentPage >= 25) {
        var percent2 = (percentPage < 50) ? percentPage : 51;
        $("#ChildPageBlack4").css("transform", "rotate(" + ((percent2 - 25) * 3.6) + "deg)");
        $("#ChildPageBlack4").css("transform-origin", "top left");
    } else {
        $("#ChildPageBlack4").css("transform", "rotate(0deg)");
        $("#ChildPageBlack4").css("transform-origin", "top left");
    }
    if (percentPage > 0) {
        var percent1 = (percentPage < 25) ? percentPage : 26;
        $("#ChildPageBlack2").css("transform", "rotate(" + percent1 * 3.6 + "deg)");
        $("#ChildPageBlack2").css("transform-origin", "bottom left");
    } else {
        $("#ChildPageBlack2").css("transform", "rotate(0deg)");
        $("#ChildPageBlack2").css("transform-origin", "bottom left");
    }
}
function ClockWiseAnimiate_play() {
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}
//End 35)****************************

//36)CounterClockWise****************
function CounterClockWiseAnimiate($IdPage, StartleftPage, EndLeftPage, duration) {
    AddDivBlack();
    $("#PageBlack").css("background", "");
    $("#PageBlack").css({ "height": "200%", "width": "150%", "left": "-25%", "top": "-50%" });
    $("#PageBlack").append("<div id=\"PageBlack1\" style=\"height: 50%;width: 50%; float:left;overflow: hidden \"><div id=\"ChildPageBlack1\" style=\"height: 100%;width: 100%;background: black;\"></div></div>" +
       "<div id=\"PageBlack2\" style=\"height: 50%;width: 50%; float:left; overflow: hidden \"><div id=\"ChildPageBlack2\" style=\"height: 100%;width: 100%;background: black;\"></div></div>" +
       "<div id=\"PageBlack3\" style=\"height: 50%;width: 50%; float:left; overflow: hidden \"><div id=\"ChildPageBlack3\" style=\"height: 100%;width: 100%;background: black;\"></div></div>" +
       "<div id=\"PageBlack4\" style=\"height: 50%;width: 50%; float:left; overflow: hidden \"><div id=\"ChildPageBlack4\" style=\"height: 100%;width: 100%;background: black;\"></div></div>");
}
function CounterClockWiseAnimiate_AutoPlay(percent) {
	if(percent >=0){
		$("#PageBlack").css("z-index",100);
		var percentPage = 100 - percent;
		if (percentPage > 1) {
			var percent1 = (percentPage < 25) ? percentPage : 26;
			$("#ChildPageBlack1").css("transform", "rotate(-" + (percent1 * 3.6) + "deg)");
			$("#ChildPageBlack1").css("transform-origin", "bottom right");

			if (percentPage >= 25) {
				var percent2 = (percentPage < 50) ? percentPage : 51;
				$("#ChildPageBlack3").css("transform", "rotate(-" + ((percent2 - 25) * 3.6) + "deg)");
				$("#ChildPageBlack3").css("transform-origin", "top right");
			}
			if (percentPage >= 50) {
				var percent3 = (percentPage < 75) ? percentPage : 76;
				$("#ChildPageBlack4").css("transform", "rotate(-" + ((percent3 - 50) * 3.6) + "deg)");
				$("#ChildPageBlack4").css("transform-origin", "top left");
			}
			if (percentPage >= 75) {
				var percent4 = (percentPage < 100) ? percentPage : 101;
				$("#ChildPageBlack2").css("transform", "rotate(-" + ((percent4 - 75) * 3.6) + "deg)");
				$("#ChildPageBlack2").css("transform-origin", "bottom left");
			}
		}
	}else{
		$("#PageBlack").css("z-index",-1);
	}
}
function CounterClockWiseAnimiate_RollPlay(percent) {
	$("#PageBlack").css("z-index",100);
    var percentPage = 100 - percent;
    if (percentPage >= 75) {
        var percent4 = (percentPage < 100) ? percentPage : 101;
        $("#ChildPageBlack2").css("transform", "rotate(-" + ((percent4 - 75) * 3.6) + "deg)");
        $("#ChildPageBlack2").css("transform-origin", "bottom left");
    } else {
        $("#ChildPageBlack2").css("transform", "rotate(0deg)");
        $("#ChildPageBlack2").css("transform-origin", "bottom left");
    }
    if (percentPage >= 50) {
        var percent3 = (percentPage < 75) ? percentPage : 76;
        $("#ChildPageBlack4").css("transform", "rotate(-" + ((percent3 - 50) * 3.6) + "deg)");
        $("#ChildPageBlack4").css("transform-origin", "top left");
    } else {
        $("#ChildPageBlack4").css("transform", "rotate(0deg)");
        $("#ChildPageBlack4").css("transform-origin", "top left");
    }
    if (percentPage >= 25) {
        var percent2 = (percentPage < 50) ? percentPage : 51;
        $("#ChildPageBlack3").css("transform", "rotate(-" + ((percent2 - 25) * 3.6) + "deg)");
        $("#ChildPageBlack3").css("transform-origin", "top right");
    } else {
        $("#ChildPageBlack3").css("transform", "rotate(0deg)");
        $("#ChildPageBlack3").css("transform-origin", "top right");
    }
    if (percentPage > 0) {
        var percent1 = (percentPage < 25) ? percentPage : 26;
        $("#ChildPageBlack1").css("transform", "rotate(-" + percent1 * 3.6 + "deg)");
        $("#ChildPageBlack1").css("transform-origin", "bottom right");
    } else {
        $("#ChildPageBlack1").css("transform", "rotate( 0deg)");
        $("#ChildPageBlack1").css("transform-origin", "bottom right");
    }
}
function ClockWiseAnimiate_play() {
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}
//End 36)****************************

//37)WedgeAnimate********************
function WedgeAnimate($IdPage, StartleftPage, EndLeftPage, duration) {
    AddDivBlack();
    $("#PageBlack").css("background", "");
    $("#PageBlack").css({ "height": "200%", "width": "150%", "left": "-25%", "top": "-50%" });
    $("#PageBlack").append("<div id=\"PageBlack1\" style=\"height: 50%;width: 50%; float:left;overflow: hidden \"><div id=\"ChildPageBlack1\" style=\"height: 100%;width: 100%;background: black;\"></div></div>" +
       "<div id=\"PageBlack2\" style=\"height: 50%;width: 50%; float:left; overflow: hidden \"><div id=\"ChildPageBlack2\" style=\"height: 100%;width: 100%;background: black;\"></div></div>" +
       "<div id=\"PageBlack3\" style=\"height: 50%;width: 50%; float:left; overflow: hidden \"><div id=\"ChildPageBlack3\" style=\"height: 100%;width: 100%;background: black;\"></div></div>" +
       "<div id=\"PageBlack4\" style=\"height: 50%;width: 50%; float:left; overflow: hidden \"><div id=\"ChildPageBlack4\" style=\"height: 100%;width: 100%;background: black;\"></div></div>");
}
function WedgeAnimate_AutoPlay(percent) {
    if (percent >= 0) {
		$("#PageBlack").css("z-index",100);
        var percentPage = 100 - percent;
        if (percentPage > 0) {
            var percent1 = (percentPage < 50) ? percentPage : 51;
            $("#ChildPageBlack1").css("transform", "rotate(-" + (percent1 * 1.8) + "deg)");
            $("#ChildPageBlack1").css("transform-origin", "bottom right");
        }
        if (percentPage > 50) {
            var percent2 = (percentPage < 100) ? percentPage : 101;
            $("#ChildPageBlack3").css("transform", "rotate(-" + ((percent2 - 50) * 1.8) + "deg)");
            $("#ChildPageBlack3").css("transform-origin", "top right");
        }
        if (percentPage > 0) {
            var percent4 = (percentPage < 50) ? percentPage : 51;
            $("#ChildPageBlack2").css("transform", "rotate(" + (percent4 * 1.8) + "deg)");
            $("#ChildPageBlack2").css("transform-origin", "bottom left");
        }
        if (percentPage > 50) {
            var percent3 = (percentPage < 100) ? percentPage : 101;
            $("#ChildPageBlack4").css("transform", "rotate(" + ((percent3 - 50) * 1.8) + "deg)");
            $("#ChildPageBlack4").css("transform-origin", "top left");
        }
    }
    else {
        $("#ChildPageBlack3").css("transform", "rotate(-91deg)");
        $("#ChildPageBlack3").css("transform-origin", "top right");
        $("#ChildPageBlack4").css("transform", "rotate(91deg)");
        $("#ChildPageBlack4").css("transform-origin", "top left");
		$("#PageBlack").css("z-index",-1);
    }
}

function WedgeAnimate_RollPlay(percent) {
    if (percent >= 0) {
		$("#PageBlack").css("z-index",100);
        var percentPage = 100 - percent;
        if (percentPage > 50) {
            var percent2 = (percentPage < 100) ? percentPage : 101;
            $("#ChildPageBlack3").css("transform", "rotate(-" + ((percent2 - 50) * 1.8) + "deg)");
            $("#ChildPageBlack3").css("transform-origin", "top right");
        }
        else {
            $("#ChildPageBlack3").css("transform", "rotate(0deg)");
            $("#ChildPageBlack3").css("transform-origin", "top right");
        }
        if (percentPage > 0) {
            var percent1 = (percentPage < 50) ? percentPage : 51;
            $("#ChildPageBlack1").css("transform", "rotate(-" + (percent1 * 1.8) + "deg)");
            $("#ChildPageBlack1").css("transform-origin", "bottom right");
        } else {
            $("#ChildPageBlack1").css("transform", "rotate(0deg)");
            $("#ChildPageBlack1").css("transform-origin", "bottom right");
        }
        if (percentPage > 50) {
            var percent3 = (percentPage < 100) ? percentPage : 101;
            $("#ChildPageBlack4").css("transform", "rotate(" + ((percent3 - 50) * 1.8) + "deg)");
            $("#ChildPageBlack4").css("transform-origin", "top left");
        } else {
            $("#ChildPageBlack4").css("transform", "rotate(0deg)");
            $("#ChildPageBlack4").css("transform-origin", "top left");
        }
        if (percentPage > 0) {
            var percent4 = (percentPage < 50) ? percentPage : 51;
            $("#ChildPageBlack2").css("transform", "rotate(" + (percent4 * 1.8) + "deg)");
            $("#ChildPageBlack2").css("transform-origin", "bottom left");
        } else {
            $("#ChildPageBlack2").css("transform", "rotate(0deg)");
            $("#ChildPageBlack2").css("transform-origin", "bottom left");
        }
    }
	else{
		$("#ChildPageBlack3").css("transform", "rotate(-90deg)");
		$("#ChildPageBlack3").css("transform-origin", "top right");
		$("#ChildPageBlack1").css("transform", "rotate(-90deg)");
		$("#ChildPageBlack1").css("transform-origin", "bottom right");
		$("#ChildPageBlack4").css("transform", "rotate(-90deg)");
        $("#ChildPageBlack4").css("transform-origin", "top left");
        $("#ChildPageBlack2").css("transform", "rotate(-90deg)");
        $("#ChildPageBlack2").css("transform-origin", "bottom left");
	}
}
function WedgeAnimate_play() {
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}
//End 37)****************************

//42) Dossolve***********************
function DossolveAnimate($IdPage, StartleftPage, EndLeftPage, duration) {
    AddDivBlack();
    $("#PageBlack").css("background", "");
    var str = "";
    var left = 0;
    var top = 0;
    for (var i = 0; i < 200; i++) {
        if (i == 0 || i % 10 == 0) {
            left = 0;
            if (i != 0)
                top += 5;
        }
        else {
            left += 10;
        }
        str += "<div class=\"pageDossolve\" style=\"height: 5%;width: 10%;left:" + left + "%; top:" + top + "%;background: black;position: absolute;\"></div>";
    }
    $("#PageBlack").append(str);
}
function DossolveAnimate_AutoPlay(percent) {
    if (percent >= 0) {
        $("#PageBlack").css("z-index", 100);
        var percentPage = 100 - percent;
        var listpageDossolve = $("#PageBlack").children(".pageDossolve");
        var deleteNumber = (listpageDossolve.length / 2) - (percent);
        var number = 0;
        for (var i = 1; i <= deleteNumber; i++) {
            if (i % 2 == 0) {
                number = Math.floor(Math.random() * (100) + 0);
                $(listpageDossolve[number]).css("background", "transparent");
            }
            else {
                number = Math.floor(Math.random() * (200) + 100);
                $(listpageDossolve[number]).css("background", "transparent");
            }
        }
    } else {
        $("#PageBlack").css("z-index", -1);
    }
}
function DossolveAnimate_RollPlay(percent) {
    if (percent >= 0 && percent <= 90) {
        $("#PageBlack").css("z-index", 100);
        var percentPage = 100 - percent;
        var listpageDossolve = $("#PageBlack").children(".pageDossolve");
        var deleteNumber = (listpageDossolve.length / 2) - (percent);
        var number = 0;
        for (var i = 1; i <= deleteNumber; i++) {
            if (i % 2 == 0) {
                number = Math.floor(Math.random() * (100) + 0);
                $(listpageDossolve[number]).css("background", "black");
            }
            else {
                number = Math.floor(Math.random() * (200) + 100);
                $(listpageDossolve[number]).css("background", "black");
            }
        }
    } else {
        if (percent >= 0 && percent > 90) {
            $("#PageBlack").children(".pageDossolve").css("background", "black");
        }
    }
}

function DossolveAnimate_play() {
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}

//End -------------------------
//new 
//38)HoneycombAnimate****************
function HoneycombAnimate() {
    AddDivBlack();
    $("#PageBlack").css("background", "");
    var str = "";
    var left = 0;
    var top = 0;
    var j = 0;
    for (var i = 0; i < 35; i++) {
        if (i == 0 || i % 7 == 0) {
            j = j + 1;
            left = 0;
            if (i != 0)
                top += 20.5;
            if (j % 2 == 0)
                left = -7.5;
        }
        else {
            left += 15;
        }
        str += "<div class=\"pageHoney\" style=\"height: 26%;width: 15%;left:" + left + "%; top:" + top + "%;position: absolute;\"><img src=\"Images/toOng.png\" style=\"width:95%; height:100%;\" /></div>";//background:url(../../Content/Images/toOng.png) no-repeat;
    }
    $("#PageBlack").append(str);
}

function HoneycombAnimate_AutoPlay(percent) {
    if (percent >= 0) {
        $("#PageBlack").css("z-index", 100);
        var percentPage = 100 - percent;
        var listpageDossolve = $("#PageBlack").children(".pageHoney");
        var number = Math.floor(Math.random() * 35);
        $(listpageDossolve[number]).hide();

        $("#PageBlack").css("transform", "rotate(" + ((percent / 4) * 1.8) + "deg)");
        $("#PageBlack").css("width", (percent / 4 + 120) + "%");
        $("#PageBlack").css("height", (percent / 4 + 120) + "%");
    } else {
        $("#PageBlack").css("z-index", -1);
    }
}

function HoneycombAnimate_RollPlay(percent) {
    if (percent >= 0 && percent <= 90) {
        $("#PageBlack").css("z-index", 100);
        var percentPage = 100 - percent;
        var listpageDossolve = $("#PageBlack").children(".pageHoney");
        var number = 0;
        number = Math.floor(Math.random() * 35);
        $(listpageDossolve[number]).show();

        $("#PageBlack").css("transform", "rotate(" + ((percent / 4) * 1.8) + "deg)");
        $("#PageBlack").css("width", (120 - percent / 4) + "%");
        $("#PageBlack").css("height", (120 - percent / 4) + "%");
    } else {
        if (percent >= 0 && percent > 90) {
            $("#PageBlack").children(".pageHoney").show();
            $("#PageBlack").css("transform", "rotate(0deg)");
            $("#PageBlack").css("width", "100%");
            $("#PageBlack").css("height", "100%");
        }else {
			$("#PageBlack").css("z-index", -1);
		}
    }
}

function HoneycombAnimate_play() {
    timer = null;
    timer = setInterval(playTime, step);
    $('.stop').show();
    $('.play').hide();
}

//End 38)****************************

function setDuration(){
	var duration=2000;
	var list = listObject[nubmerPage];
    if (typeof list == typeof undefined) return 0;
    var listPage = list.listPage;
	 if (listPage != null) {
        if (listPage[0].type == 0) {
			duration = (listPage[0].EndTime) * 1000;
		}
	 }
	return duration;
}
//16-09-2016
