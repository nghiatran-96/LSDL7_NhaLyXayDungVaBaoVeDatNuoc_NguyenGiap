/*//new 13_08 stopFlash
function stopObjectFlash(id){
		var flash=document.getElementById(id);
		flash.StopPlay();
}

function playObjectFlash(id){
		var flash=document.getElementById(id);
		flash.Play();
}
//end new 13_08 
*/

//-------------hiểu ứng đối tượng---------------------------------------------

//call animate object
function AnimateObject(listPage,page) {
	
	var pageDiv = $("#leftMainContent").children('div > .CELPage');
	var idPage=$(pageDiv[(parseInt(page))]).attr("id");
	
	/*
	//new 13_08 check flash
	  if($("#"+idPage).find("EMBED").parent().parent().hasClass("hidden") ==true){
		   var idFlash=$("#"+idPage).find("EMBED").attr('id');
		   stopObjectFlash(idFlash);
		   $("#"+idFlash).addClass('checkFlash');
	  }else{
		  
		   var idFlash=$("#"+idPage).find("EMBED").attr('id');
		   if($("#"+idFlash).hasClass('checkFlash')==true){
			   playObjectFlash(idFlash);
			   $("#"+idFlash).removeClass('checkFlash');
		   }
	  }
	//end new 13_08
	*/
	
	var value = $("#slider_Cpage_0").slider("option", "value");
	if (typeof MediaTimeLine !== 'undefined' && $.isFunction(MediaTimeLine)) MediaTimeLine();

	for (var i = 1; i < listPage.length; i++) {
		var ObjectName = listPage[i].NameFunction;
		var startTime = listPage[i].StarTime;
		var endTime = listPage[i].EndTime;
		var ObjectNamCheck=ObjectName.split('(')[0];
		
		var splitObject = ObjectName.split('#')[1];
		if (typeof splitObject!=typeof undefined){
			var idObject = splitObject.split('\'')[0];
			if (idObject.length==0) return; //16-09-16
			if (startTime <= value && value <= endTime) {
				if($("#" + idPage).find("#" + idObject).hasClass('hidden')==true)
					$("#" + idPage).find("#" + idObject).removeClass('hidden');
				var TimeObject = (endTime - startTime)
				var timeLine = value - startTime;
				if (ObjectName.split('(')[0] == "AppearAnimateObject") {
					AppearAnimateObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FadeAnimateObject") {
					FadeAnimateObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyInFormBottom") {
					FlyInFormBottom(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyInFormBottomLeft") {
					FlyInFormBottomLeft(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyInFormLeft") {
					FlyInFormLeft(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyInFormTopLeft") {
					FlyInFormTopLeft(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyInFormTop") {
					FlyInFormTop(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyInFormTopRight") {
					FlyInFormTopRight(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyInFormRight") {
					FlyInFormRight(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyInFromBottomRight") {
					FlyInFromBottomRight(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FloatInDown") {
					FloatInDown(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FloatInUp") {
					FloatInUp(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "SplitVerticalInObject") {
					SplitVerticalInObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "SplitHorizontalInObject") {
					
					SplitHorizontalInObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "SplitVerticalOutObject") {
					SplitVerticalOutObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "SplitHoriZontalOutObject") {
					SplitHoriZontalOutObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "WipeFromLeftObject") {
					WipeFromLeftObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "WipeFromBottomObject") {
					WipeFromBottomObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "WipeFromTopObject") {
					WipeFromTopObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "WipeFromRightObject") {
					WipeFromRightObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "GrowTurnObject") {
					GrowTurnObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "ZoomObjectCenter") {
					ZoomObjectCenter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "ZoomPageCenterObject") {
					ZoomPageCenterObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "PulseObject") {
					PulseObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "ColorPulseObject") {
					ColorPulseObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "TeeterObject") {
					TeeterObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "SpinClockWiseObject") {
					SpinClockWiseObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "SpinCounterClockWiseObject") {
					SpinCounterClockWiseObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "QuarterSpinObject") {
					QuarterSpinObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "HalfSpinObject") {
					HalfSpinObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FullSpinObject") {
					FullSpinObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "TwoSpinObject") {
					TwoSpinObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "DisapperObject") {
					DisapperObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "TransparencyObject") {
					TransparencyObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FloatOutUpObject") {
					FloatOutUpObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FloatOutDownObject") {
					FloatOutDownObject(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "SplitVerticalOutObjectAfter") {
					SplitVerticalOutObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "SplitHorizontalOutObjectAfter") {
					SplitHorizontalOutObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "SplitVerticalInObjectAfter") {
					SplitVerticalInObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "SplitHorizontalInObjectAfter") {//
					SplitHorizontalInObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "ZoomObjectCenterObjectAfter") {
					ZoomObjectCenterObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyOutToTopObjectAfter") {
					FlyOutToTopObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyOutToTopRightObjectAfter") {
					FlyOutToTopRightObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyOutToRightObjectAfter") {
					FlyOutToRightObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyOutToBottomLeftObjectAfter") {
					FlyOutToBottomLeftObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyOutToBottomObjectAfter") {
					FlyOutToBottomObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyOutToBottomRightObjectAfter") {
					FlyOutToBottomRightObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyOutToLeftObjectAfter") {
					FlyOutToLeftObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "FlyOutToTopLeftObjectAfter") {
					FlyOutToTopLeftObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "ShrinkAndTurnObjectAfter") {
					ShrinkAndTurnObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
				if (ObjectName.split('(')[0] == "ZoomPageCenterObjectAfter") {
					ZoomPageCenterObjectAfter(timeLine, idObject, idPage, TimeObject);
				}
			}
			else {
				if (endTime < value) {
					var splitObject = ObjectName.split('#')[1];
					var idObject = splitObject.split('\'')[0];
					var id = $("#" + idPage).find("#" + idObject);
					var top = $(id).attr("data-top");
					$(id).css("top", top);
					var left = $(id).attr("data-left");
					$(id).css("left", left);
					var width = $(id).attr("data-width");
					$(id).css("width", width);

					var tempK=$("#" + idPage).find("#" + idObject).first().css("height");
					if (typeof tempK!= typeof undefined)
					{
						var checkHeight = parseFloat(tempK.split('p')[0]);
						var height = parseFloat($(id).attr("data-height").split('%')[0]);
						var heightSplit= (height > 0)? height+"%" : ((checkHeight > 0)?"":"auto");
						$(id).css("height", heightSplit);
						$(id).css("opacity", 1);
						//new 09-09-2016
						var t= $(id).attr("data-transform");
						if(typeof t !=typeof undefined){
							var values = t.split('(')[1];
							if (typeof values != typeof undefined) {//15-09-2016
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
						//$(id).css("transform", "rotate(0deg)");
						ClearDivObject(idObject);
						$(id).removeClass('hidden');
						var ObjectNamCheck=ObjectName.split('(')[0];
						if(ObjectNamCheck =="DisapperObject" || ObjectNamCheck =="TransparencyObject" || ObjectNamCheck =="FloatOutUpObject" || ObjectNamCheck =="FloatOutDownObject" || ObjectNamCheck =="SplitVerticalOutObjectAfter" || ObjectNamCheck =="SplitHorizontalOutObjectAfter" || ObjectNamCheck =="FloatOutUpObject"
							|| ObjectNamCheck =="SplitHorizontalInObjectAfter" || ObjectNamCheck =="ZoomObjectCenterObjectAfter" || ObjectNamCheck =="FlyOutToTopObjectAfter" || ObjectNamCheck =="FlyOutToTopRightObjectAfter" || ObjectNamCheck =="FlyOutToRightObjectAfter" || ObjectNamCheck =="FlyOutToBottomLeftObjectAfter"
							|| ObjectNamCheck =="FlyOutToBottomObjectAfter" || ObjectNamCheck =="FlyOutToBottomRightObjectAfter" || ObjectNamCheck =="FlyOutToLeftObjectAfter" || ObjectNamCheck =="FlyOutToTopLeftObjectAfter" || ObjectNamCheck =="ShrinkAndTurnObjectAfter" || ObjectNamCheck =="ZoomPageCenterObjectAfter"
							|| ObjectNamCheck =="SplitVerticalInObjectAfter")
						{
							$(id).addClass('hidden');
						}
					}
					//check flash
					
				} else {
					if(startTime>value){
						if(checkMulityAnimateObiect(idObject,listPage) == true){
							var splitObject = ObjectName.split('#')[1];
							var idObject = splitObject.split('\'')[0];
							var id = $("#" + idPage).find("#" + idObject);
							var top = $(id).attr("data-top");
							$(id).css("top", top);
							var left = $(id).attr("data-left");
							$(id).css("left", left);
							var width = $(id).attr("data-width");
							$(id).css("width", width);

							var tempK=$("#" + idPage).find("#" + idObject).first().css("height");
							if (typeof tempK!=typeof undefined)
							{
								var checkHeight = parseFloat(tempK.split('p')[0]);
								var height = parseFloat($(id).attr("data-height").split('%')[0]);
								var heightSplit= (height > 0)? height+"%" : ((checkHeight > 0)?"":"auto");
								$(id).css("height", heightSplit);
								$(id).css("opacity", 1);
								//new 09-09-2016
								var t= $(id).attr("data-transform");
								if(typeof t !=typeof undefined){
									var values = t.split('(')[1];
						if (typeof values != typeof undefined) {//19-09-2016
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
								//$(id).css("transform", "rotate(0deg)");
								
								ClearDivObject(idObject);
								var ObjectNamCheck=ObjectName.split('(')[0];
								if(ObjectNamCheck =="DisapperObject" || ObjectNamCheck =="TransparencyObject" || ObjectNamCheck =="FloatOutUpObject" || ObjectNamCheck =="FloatOutDownObject" || ObjectNamCheck =="SplitVerticalOutObjectAfter" || ObjectNamCheck =="SplitHorizontalOutObjectAfter" || ObjectNamCheck =="FloatOutUpObject"
									|| ObjectNamCheck =="SplitHorizontalInObjectAfter" || ObjectNamCheck =="ZoomObjectCenterObjectAfter" || ObjectNamCheck =="FlyOutToTopObjectAfter" || ObjectNamCheck =="FlyOutToTopRightObjectAfter" || ObjectNamCheck =="FlyOutToRightObjectAfter" || ObjectNamCheck =="FlyOutToBottomLeftObjectAfter"
									|| ObjectNamCheck =="FlyOutToBottomObjectAfter" || ObjectNamCheck =="FlyOutToBottomRightObjectAfter" || ObjectNamCheck =="FlyOutToLeftObjectAfter" || ObjectNamCheck =="FlyOutToTopLeftObjectAfter" || ObjectNamCheck =="ShrinkAndTurnObjectAfter" || ObjectNamCheck =="ZoomPageCenterObjectAfter"
									|| ObjectNamCheck =="SplitVerticalInObjectAfter")
								{
									$("#" + idPage).find("#" + idObject).removeClass('hidden');
								}else{
									$("#" + idPage).find("#" + idObject).addClass('hidden');
								}
							}
						}else{
							var checkIDObject=idMulityAnimateObiect(idObject,listPage,value);
							if(checkIDObject !="" && checkIDObject == ObjectName){
								var splitObject = ObjectName.split('#')[1];
								var idObject = splitObject.split('\'')[0];
								var id = $("#" + idPage).find("#" + idObject);
								var top = $(id).attr("data-top");
								$(id).css("top", top);
								var left = $(id).attr("data-left");
								$(id).css("left", left);
								var width = $(id).attr("data-width");
								$(id).css("width", width);
								var checkHeight = parseFloat($("#" + idPage).find("#" + idObject).css("height").split('p')[0]);
								var height = parseFloat($(id).attr("data-height").split('%')[0]);
								var heightSplit= (height > 0)? height+"%" : ((checkHeight > 0)?"":"auto");
								$(id).css("height", heightSplit);
								$(id).css("opacity", 1);
								//new 09-09-2016
								var t= $(id).attr("data-transform");
								if(typeof t !=typeof undefined){
									var values = t.split('(')[1];
						if (typeof values != typeof undefined) {//19-09-2016
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
								//$(id).css("transform", "rotate(0deg)");
								
								ClearDivObject(idObject);
								var ObjectNamCheck=ObjectName.split('(')[0];
								if(ObjectNamCheck =="DisapperObject" || ObjectNamCheck =="TransparencyObject" || ObjectNamCheck =="FloatOutUpObject" || ObjectNamCheck =="FloatOutDownObject" || ObjectNamCheck =="SplitVerticalOutObjectAfter" || ObjectNamCheck =="SplitHorizontalOutObjectAfter" || ObjectNamCheck =="FloatOutUpObject"
									|| ObjectNamCheck =="SplitHorizontalInObjectAfter" || ObjectNamCheck =="ZoomObjectCenterObjectAfter" || ObjectNamCheck =="FlyOutToTopObjectAfter" || ObjectNamCheck =="FlyOutToTopRightObjectAfter" || ObjectNamCheck =="FlyOutToRightObjectAfter" || ObjectNamCheck =="FlyOutToBottomLeftObjectAfter"
									|| ObjectNamCheck =="FlyOutToBottomObjectAfter" || ObjectNamCheck =="FlyOutToBottomRightObjectAfter" || ObjectNamCheck =="FlyOutToLeftObjectAfter" || ObjectNamCheck =="FlyOutToTopLeftObjectAfter" || ObjectNamCheck =="ShrinkAndTurnObjectAfter" || ObjectNamCheck =="ZoomPageCenterObjectAfter"
									|| ObjectNamCheck =="SplitVerticalInObjectAfter")
								{
									$("#" + idPage).find("#" + idObject).removeClass('hidden');
								}else{
									$("#" + idPage).find("#" + idObject).addClass('hidden');
								}
							}
							
						}
					}
					
				}
			}
		}
		

	}
}

function checkMulityAnimateObiect(idObject,listPage){
	var count=0;
	for (var i = 1; i < listPage.length; i++) 
	{
		var ObjectName = listPage[i].NameFunction;
		if(ObjectName.includes(idObject) == true){
			count=count+1;
		}
	}
	if(count>1)
		return false;
	return true;
}
function idMulityAnimateObiect(idObject,listPage,value){
	var id="";
	for (var i = 1; i < listPage.length; i++) 
	{
		var ObjectName = listPage[i].NameFunction;
		var startTime = listPage[i].StarTime;
		if(ObjectName.includes(idObject) == true  ){
			return ObjectName;
		}
	}
	return id;
}


//animate object Appear
function AppearAnimateObject(value, idObject, idPage, TimeObject) {
	var timeLine = value.toFixed(1);
	var percent = (timeLine * 100) / TimeObject;
	var percentOpacity = percent / 100;
	$("#" + idPage).find("#" + idObject).css("opacity", percentOpacity);
}

//animate object Fade
function FadeAnimateObject(value, idObject, idPage, TimeObject) {
	var timeLine = value.toFixed(1);
	var percent = (timeLine * 100) / TimeObject;
	var percentOpacity = percent / 100;
	$("#" + idPage).find("#" + idObject).css("opacity", percentOpacity);
}

//animate fly in form bottom
function FlyInFormBottom(value, idObject, idPage, TimeObject) {
	var timeLine = value.toFixed(1);
	var id = $("#" + idPage).find("#" + idObject);
	var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
	top = top > 0 ? top : 0;

	var percentTop = 100 - top;
	var percent = 100 - ((timeLine * percentTop) / (TimeObject));
	$(id).css("top", percent + "%");
}

//animate fly in form bottom left
function FlyInFormBottomLeft(value, idObject, idPage, TimeObject) {
	var timeLine = value.toFixed(1);
	var id = $("#" + idPage).find("#" + idObject);
	var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
	var left = parseFloat(($(id).attr("data-left")).split('%')[0]);
	var width = parseFloat(($(id).attr("data-width")).split('%')[0]);
	top = top > 0 ? top : 0;
	left = left > 0 ? left : 0;
	width = width > 0 ? width : 0;

	var percentTop = 100 - top;
	var percent1 = 100 - ((timeLine * percentTop) / (TimeObject));
	$(id).css("top", percent1 + "%");

	var percentLeft = 100 - left;
	var percent2 = ((timeLine * (left + width)) / (TimeObject)) - width;
	$(id).css("left", percent2 + "%");
}

//animate fly in form left
function FlyInFormLeft(value, idObject, idPage, TimeObject) {
	var timeLine = value.toFixed(1);
	var id = $("#" + idPage).find("#" + idObject);
	var left = parseFloat(($(id).attr("data-left")).split('%')[0]);
	var width = parseFloat(($(id).attr("data-width")).split('%')[0]);
	width = width > 0 ? width : 0;
	left = left > 0 ? left : 0;

	var percentLeft = 100 - left;
	var percent = ((timeLine * (left + width)) / (TimeObject)) - width;
	$(id).css("left", percent + "%");
}

//animate fly in form top left

function FlyInFormTopLeft(value, idObject, idPage, TimeObject) {
	var timeLine = value.toFixed(1);
	var id = $("#" + idPage).find("#" + idObject);
	var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
	var left = parseFloat(($(id).attr("data-left")).split('%')[0]);
	var width = parseFloat(($(id).attr("data-width")).split('%')[0]);
	var height = parseFloat(($(id).attr("data-height")).split('%')[0]);
	top = top > 0 ? top : 0;
	left = left > 0 ? left : 0;
	width = width > 0 ? width : 0;
	height = height > 0 ? height : 0;

	var percentLeft = 100 - left;
	var percent = ((timeLine * (left + width)) / (TimeObject)) - width;
	$(id).css("left", percent + "%");

	var percentTop = 100 - top;
	var percent1 = ((timeLine * (top + height)) / (TimeObject)) - height;
	$(id).css("top", percent1 + "%");

}

//animate fly in form top
function FlyInFormTop(value, idObject, idPage, TimeObject) {
	var timeLine = value.toFixed(1);
	var id = $("#" + idPage).find("#" + idObject);
	var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
	var height = parseFloat(($(id).attr("data-height")).split('%')[0]);
	top = top > 0 ? top : 0;
	height = height > 0 ? height : 0;

	var percentTop = 100 - top;
	var percent = ((timeLine * (top + height)) / (TimeObject)) - height;
	$(id).css("top", percent + "%");

}
//animate fly in form top right
function FlyInFormTopRight(value, idObject, idPage, TimeObject) {
	var timeLine = value.toFixed(1);
	var id = $("#" + idPage).find("#" + idObject);
	var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
	var left = parseFloat(($(id).attr("data-left")).split('%')[0]);
	var width = parseFloat(($(id).attr("data-width")).split('%')[0]);
	var height = parseFloat(($(id).attr("data-height")).split('%')[0]);
	top = top > 0 ? top : 0;
	left = left > 0 ? left : 0;
	width = width > 0 ? width : 0;
	height = height > 0 ? height : 0;

	var percentTop = 100 - top;
	var percent1 = ((timeLine * (top + height)) / (TimeObject)) - height;
	$(id).css("top", percent1 + "%");

	var percentLeft = 100 - left;
	var percent2 = 100 - ((timeLine * percentLeft) / (TimeObject));
	$(id).css("left", percent2 + "%");
}

//animate fly in form right
function FlyInFormRight(value, idObject, idPage, TimeObject) {
	var timeLine = value.toFixed(1);
	var id = $("#" + idPage).find("#" + idObject);
	var left = parseFloat(($(id).attr("data-left")).split('%')[0]);
	left = left > 0 ? left : 0;
    //var width = parseFloat(($(id).attr("data-width")).split('%')[0]);

    var percentLeft = 100 - left;
    var percent = 100 - ((timeLine * percentLeft) / (TimeObject));
    $(id).css("left", percent + "%");

}

//animate fly in form bottom right
function FlyInFromBottomRight(value, idObject, idPage, TimeObject) {
	var timeLine = value.toFixed(1);
	var id = $("#" + idPage).find("#" + idObject);

	var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
	var left = parseFloat(($(id).attr("data-left")).split('%')[0]);
	var width = parseFloat(($(id).attr("data-width")).split('%')[0]);
	var height = parseFloat(($(id).attr("data-height")).split('%')[0]);

	top = top > 0 ? top : 0;
	left = left > 0 ? left : 0;
	width = width > 0 ? width : 0;
	height = height > 0 ? height : 0;

	var percentTop = 100 - top;
	var percent1 = 100 - ((timeLine * percentTop) / (TimeObject));
	$(id).css("top", percent1 + "%");

	var percentLeft = 100 - left;
	var percent2 = 100 - ((timeLine * percentLeft) / (TimeObject));
	$(id).css("left", percent2 + "%");
}
	//-------------------new 29_06_2016------------------

	//animate float in down
	function FloatInDown(value, idObject, idPage, TimeObject) {
		var timeLine = value.toFixed(1);
		var id = $("#" + idPage).find("#" + idObject);
		var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
		var height = parseFloat(($(id).attr("data-height")).split('%')[0]);
		top = top > 0 ? top : 0;
		height = height > 0 ? height : 0;

		var percentTop = 100 - top;
		var percent = ((timeLine * (top + height)) / (TimeObject)) - height;
		$(id).css("top", percent + "%");

		timeLine = timeLine / TimeObject
		var percentOpacity = (timeLine > 0.3) ? timeLine : 0.3;
		$(id).css("opacity", percentOpacity);
	}
	//animate float in up
	function FloatInUp(value, idObject, idPage, TimeObject) {

		var timeLine = value.toFixed(1);
		var id = $("#" + idPage).find("#" + idObject);
		var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
		top = top > 0 ? top : 0;

		var percentTop = 100 - top;
		var percent = 100 - ((timeLine * percentTop) / (TimeObject));
		$(id).css("top", percent + "%");

		timeLine = timeLine / TimeObject
		var percentOpacity = (timeLine > 0.3) ? timeLine : 0.3;
		$(id).css("opacity", percentOpacity);
	}
	//animate split Vertical In
	function SplitVerticalInObject(value, idObject, idPage, TimeObject) {
		AddDivObject(idObject);
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent) / 2;
		var percentLeft = 50 - percentPage;
		var percentRight = 50 + percentPage;

		
		$("#" + idObject + " #PageObject").css("background", "-o-linear-gradient(90deg ,white " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, white " + (percentRight + 10) + "%)"); /* For Opera 11.1 to 12.0 */
		$("#" + idObject + " #PageObject").css("background", "-moz-linear-gradient(90deg ,white " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, white " + (percentRight + 10) + "%)"); /* For Firefox 3.6 to 15 */
		$("#" + idObject + " #PageObject").css("background", "linear-gradient(90deg ,white " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, white " + (percentRight + 10) + "%)"); /* Standard syntax (must be last) */
		//$("#" + idObject + " #PageObject").css("background", "-webkit-linear-gradient(90deg ,white " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, white " + (percentRight + 10) + "%)"); /* For Safari 5.1 to 6.0 */
	}

	//animate split horizontal in
	function SplitHorizontalInObject(value, idObject, idPage, TimeObject) {
		AddDivObject(idObject);
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent) / 2;
		var percentLeft = 50 - percentPage;
		var percentRight = 50 + percentPage;

		
		$("#" + idObject + " #PageObject").css("background", "-o-linear-gradient(180deg ,white " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, white " + (percentRight + 10) + "%)"); /* For Opera 11.1 to 12.0 */
		$("#" + idObject + " #PageObject").css("background", "-moz-linear-gradient(180deg ,white " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, white " + (percentRight + 10) + "%)"); /* For Firefox 3.6 to 15 */
		$("#" + idObject + " #PageObject").css("background", "linear-gradient(180deg ,white " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, white " + (percentRight + 10) + "%)"); /* Standard syntax (must be last) */
		//$("#" + idObject + " #PageObject").css("background", "-webkit-linear-gradient(180deg ,white " + (percentLeft - 10) + "%,transparent " + percentLeft + "%,transparent ,transparent " + percentRight + "%, white " + (percentRight + 10) + "%)"); /* For Safari 5.1 to 6.0 */
	}

	//animate split Vertical out
	function SplitVerticalOutObject(value, idObject, idPage, TimeObject) {
		AddDivObject(idObject);
		var percent = 100 - ((100 * value) / TimeObject);


		var percentPage = (100 - percent) / 2;
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

		$("#" + idObject + " #PageObject").css("background", "-o-linear-gradient(90deg ,transparent " + percentLeft + "%,white " + percentLeftBlack + "%, white " + percentRightBlack + "%,transparent " + percentRight + "%)"); 
		$("#" + idObject + " #PageObject").css("background", "-moz-linear-gradient(90deg, transparent " + percentLeft + "%,white " + percentLeftBlack + "%, white " + percentRightBlack + "%,transparent " + percentRight + "%)"); 
		$("#" + idObject + " #PageObject").css("background", "linear-gradient(90deg ,transparent " + percentLeft + "%,white " + percentLeftBlack + "%, white " + percentRightBlack + "%,transparent " + percentRight + "%)"); 
		//$("#" + idObject + " #PageObject").css("background", "-webkit-linear-gradient(90deg ,transparent " + percentLeft + "%,white " + percentLeftBlack + "%, white " + percentRightBlack + "%,transparent " + percentRight + "%)"); 
	}

	//animate split horizontal out
	function SplitHoriZontalOutObject(value, idObject, idPage, TimeObject) {
		AddDivObject(idObject);
		var percent = 100 - ((100 * value) / TimeObject);

		var percentPage = (100 - percent) / 2;
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

		
		$("#" + idObject + " #PageObject").css("background", "-o-linear-gradient(180deg ,transparent " + percentLeft + "%,white " + percentLeftBlack + "%, white " + percentRightBlack + "%,transparent " + percentRight + "%)"); /* For Opera 11.1 to 12.0 */
		$("#" + idObject + " #PageObject").css("background", "-moz-linear-gradient(180deg ,transparent " + percentLeft + "%,white " + percentLeftBlack + "%, white " + percentRightBlack + "%,transparent " + percentRight + "%)"); /* For Firefox 3.6 to 15 */
		$("#" + idObject + " #PageObject").css("background", "linear-gradient(180deg ,transparent " + percentLeft + "%,white " + percentLeftBlack + "%, white " + percentRightBlack + "%,transparent " + percentRight + "%)"); /* Standard syntax (must be last) */
		//$("#" + idObject + " #PageObject").css("background", "-webkit-linear-gradient(180deg ,transparent " + percentLeft + "%,white " + percentLeftBlack + "%, white " + percentRightBlack + "%,transparent " + percentRight + "%)"); /* For Safari 5.1 to 6.0 */
	}

	//animate wipe from left object
	function WipeFromLeftObject(value, idObject, idPage, TimeObject) {
		AddDivObject(idObject);
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);
		
		$("#" + idObject + " #PageObject").css("background", "-o-linear-gradient(90deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* For Opera 11.1 to 12.0 */
		$("#" + idObject + " #PageObject").css("background", "-moz-linear-gradient(90deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* For Firefox 3.6 to 15 */
		$("#" + idObject + " #PageObject").css("background", "linear-gradient(90deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* Standard syntax (must be last) */
		//$("#" + idObject + " #PageObject").css("background", "-webkit-linear-gradient(90deg,transparent " + percentPage + "%,white " + (percentPage+10) + "% , white)"); /* For Safari 5.1 to 6.0 */
	}
	
	//animate wipe from bottom object
	function WipeFromBottomObject(value, idObject, idPage, TimeObject) {
		AddDivObject(idObject);
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);

		
		$("#" + idObject + " #PageObject").css("background", "-o-linear-gradient(0deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* For Opera 11.1 to 12.0 */
		$("#" + idObject + " #PageObject").css("background", "-moz-linear-gradient(0deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* For Firefox 3.6 to 15 */
		$("#" + idObject + " #PageObject").css("background", "linear-gradient(0deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* Standard syntax (must be last) */
		//$("#" + idObject + " #PageObject").css("background", "-webkit-linear-gradient(0deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* For Safari 5.1 to 6.0 */
	}

	//animate wipe from top object
	function WipeFromTopObject(value, idObject, idPage, TimeObject) {
		AddDivObject(idObject);
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);

		
		$("#" + idObject + " #PageObject").css("background", "-o-linear-gradient(180deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* For Opera 11.1 to 12.0 */
		$("#" + idObject + " #PageObject").css("background", "-moz-linear-gradient(180deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* For Firefox 3.6 to 15 */
		$("#" + idObject + " #PageObject").css("background", "linear-gradient(180deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* Standard syntax (must be last) */
		//$("#" + idObject + " #PageObject").css("background", "-webkit-linear-gradient(180deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* For Safari 5.1 to 6.0 */
	}

	//animate wipe from right object
	function WipeFromRightObject(value, idObject, idPage, TimeObject) {
		AddDivObject(idObject);
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);

		
		$("#" + idObject + " #PageObject").css("background", "-o-linear-gradient(-90deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* For Opera 11.1 to 12.0 */
		$("#" + idObject + " #PageObject").css("background", "-moz-linear-gradient(-90deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* For Firefox 3.6 to 15 */
		$("#" + idObject + " #PageObject").css("background", "linear-gradient(-90deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* Standard syntax (must be last) */
		//$("#" + idObject + " #PageObject").css("background", "-webkit-linear-gradient(-90deg,transparent " + percentPage + "%,white " + (percentPage + 10) + "% , white)"); /* For Safari 5.1 to 6.0 */
	}

	//animate grow and turn object
	function GrowTurnObject(value, idObject, idPage, TimeObject) {
		//AddDivObject(idObject);
		//$("#" + idObject).css("transform", 'rotate(90deg)');
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent)/4;
		$("#" + idObject).css("transform", "rotate(" + (90 - (percentPage*3.6)) + "deg)");


		var percentPage1 = (100 - percent);
		var percentH = (percentPage1 * (parseFloat($("#" + idObject).attr("data-width").split("%")[0]))) / 100;
		var percentW = (percentPage1 * (parseFloat($("#" + idObject).attr("data-height").split("%")[0]))) / 100;
		var percentL = (((parseFloat($("#" + idObject).attr("data-width").split("%")[0]) / 2) * percent) / 100) + parseFloat($("#" + idObject).attr("data-left").split("%")[0]);
		var percentT = (((parseFloat($("#" + idObject).attr("data-height").split("%")[0]) / 2) * percent) / 100) + parseFloat($("#" + idObject).attr("data-top").split("%")[0]);

		$("#" + idObject).css("height", percentW + "%");
		$("#" + idObject).css("width", percentH + "%");
		$("#" + idObject).css("left", percentL + "%");
		$("#" + idObject).css("top", percentT + "%");
		
	}

	//animate Zoom object center
	function ZoomObjectCenter(value, idObject, idPage, TimeObject) {
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);
		var width=parseFloat($("#" + idObject).attr("data-width").split("%")[0]);
		var height=parseFloat($("#" + idObject).attr("data-height").split("%")[0]);
		var left=parseFloat(($("#"+idObject).attr("data-left")).split("%")[0]);
		var top = parseFloat(($("#" + idObject).attr("data-top")).split("%")[0]);
		width = (width >0) ? width : 0;
		height = (height>0) ? height : 0;
		left = (left>0)?left:0;
		top = (top > 0) ? top : 0;
		
		var percentH = (percentPage * (width)) / 100;
		var percentW = (percentPage * (height)) / 100;
		var percentL = 0;
		var percentT = 0;
		if (left < 50) {
			percentL = 50 - ((percentPage * (50 - left))/100);
			$("#" + idObject).css("left", percentL + "%");
		}
		if (top < 50) {
			percentT = 50 - ((percentPage * (50 - top)) / 100);
			$("#" + idObject).css("top", percentT + "%");
		}
		if (left >= 50) {
			percentL = 50 + ((percentPage * (left-50)) / 100);
			$("#" + idObject).css("left", percentL + "%");
		}
		if (top >= 50) {
			percentT = 50 + ((percentPage * (top-50)) / 100);
			$("#" + idObject).css("top", percentT + "%");
		}
		$("#" + idObject).css("height", percentW + "%");
		$("#" + idObject).css("width", percentH + "%");
	}

	//animate Zoom page center
	function ZoomPageCenterObject(value, idObject, idPage, TimeObject) {
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);

		var percentH = (percentPage * (parseFloat($("#" + idObject).attr("data-width").split("%")[0]))) / 100;
		var percentW = (percentPage * (parseFloat($("#" + idObject).attr("data-height").split("%")[0]))) / 100;
		var percentL = (((parseFloat($("#" + idObject).attr("data-width").split("%")[0]) / 2) * percent) / 100) + parseFloat($("#" + idObject).attr("data-left").split("%")[0]);
		var percentT = (((parseFloat($("#" + idObject).attr("data-height").split("%")[0]) / 2) * percent) / 100) + parseFloat($("#" + idObject).attr("data-top").split("%")[0]);

		$("#" + idObject).css("height", percentW + "%");
		$("#" + idObject).css("width", percentH + "%");
		$("#" + idObject).css("left", percentL + "%");
		$("#" + idObject).css("top", percentT + "%");
	}

	//animate pulse object

	function PulseObject(value, idObject, idPage, TimeObject) {
		var percent = 100 - ((100 * value) / TimeObject);

		var percentPage = (100 - percent) / 10;

		var percentH = (parseFloat($("#" + idObject).attr("data-width").split("%")[0])) + percentPage;
		var percentW = (parseFloat($("#" + idObject).attr("data-height").split("%")[0])) + percentPage;
		var percentL = (parseFloat($("#" + idObject).attr("data-left").split("%")[0])) - (percentPage/2);
		var percentT = (parseFloat($("#" + idObject).attr("data-top").split("%")[0])) - (percentPage/2);
		if (percent <= 20) {
			$("#" + idObject).css("height", $("#" + idObject).attr("data-height"));
			$("#" + idObject).css("width", $("#" + idObject).attr("data-width"));
			$("#" + idObject).css("left", $("#" + idObject).attr("data-left"));
			$("#" + idObject).css("top", $("#" + idObject).attr("data-top"));
			$("#" + idObject).css("opacity", 1);
		} else {
			$("#" + idObject).css("height", percentW + "%");
			$("#" + idObject).css("width", percentH + "%");
			$("#" + idObject).css("left", percentL + "%");
			$("#" + idObject).css("top", percentT + "%");

			var percentOpacity = ((percent / 100)>0.7)?(percent / 100) : 0.7;
			$("#" + idObject).css("opacity", percentOpacity);
		}
	}

	//animate color pulse object

	function ColorPulseObject(value, idObject, idPage, TimeObject) {
		var percent = 100 - ((100 * value) / TimeObject);
		//var percentPage = (100 - percent);
		var percentOpacity = ((percent / 100) > 0.2) ? (percent / 100) : 0.2;
		$("#" + idObject).css("opacity", percentOpacity);
		if (percent <= 10) {
			$("#" + idObject).css("opacity", 1);
		}
	}

	//animate teeter object
	function TeeterObject(value, idObject, idPage, TimeObject) {
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);
		if (percentPage <= 25) {
			$("#" + idObject).css("transform", "rotate(" + (percentPage/1.5) + "deg)");
		} else 
		if (percentPage <= 50) {
			$("#" + idObject).css("transform", "rotate(-" + ((percentPage-25) / 1.5) + "deg)");
		}else
		if (percentPage <= 75) {
			$("#" + idObject).css("transform", "rotate(" + ((percentPage - 50) / 2.5) + "deg)");
		} else
		if (percentPage <= 95) {
			$("#" + idObject).css("transform", "rotate(-" + ((percentPage - 75) / 2.5) + "deg)");
		}else
		{
			$("#" + idObject).css("transform", "rotate(0deg)");
		}
	}

	//animate spin clockwise object
	function SpinClockWiseObject(value, idObject, idPage, TimeObject) {
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);
		$("#" + idObject).css("transform", 'rotate(' + (percentPage * 3.6) + 'deg)');
	}

	//animate spin counter clock wise object
	function SpinCounterClockWiseObject(value, idObject, idPage, TimeObject) {
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);
		$("#" + idObject).css("transform", 'rotate(-' + (percentPage * 3.6) + 'deg)');
	}

	//animate quarter spin object
	function QuarterSpinObject(value, idObject, idPage, TimeObject) {
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);
		if (percentPage <=90)
			$("#" + idObject).css("transform", 'rotate(' + (percentPage * 1) + 'deg)');
		else
			$("#" + idObject).css("transform", 'rotate(0deg)');
	}

	//animate half spin object
	function HalfSpinObject(value, idObject, idPage, TimeObject) {
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);
		if (percentPage <= 90)
			$("#" + idObject).css("transform", 'rotate(' + (percentPage * 2) + 'deg)');
		else
			$("#" + idObject).css("transform", 'rotate(0deg)');
	}

	//animate full spin object
	function FullSpinObject(value, idObject, idPage, TimeObject) {
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);
		if (percentPage <= 90)
			$("#" + idObject).css("transform", 'rotate(' + (percentPage * 3) + 'deg)');
		else
			$("#" + idObject).css("transform", 'rotate(0deg)');
	}

	//animate two spin object
	function TwoSpinObject(value, idObject, idPage, TimeObject) {
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);
		if (percentPage <= 90)
			$("#" + idObject).css("transform", 'rotate(' + (percentPage * 4) + 'deg)');
		else
			$("#" + idObject).css("transform", 'rotate(0deg)');
	}

	//animater disapper object after
	function DisapperObject(value, idObject, idPage, TimeObject) {
		var timeLine = value.toFixed(1);
		var percent = 100 - (timeLine * 100) / TimeObject;
		var percentOpacity = percent / 100;
		$("#" + idPage).find("#" + idObject).css("opacity", percentOpacity);
	}

	//animate transparency object after
	function TransparencyObject(value, idObject, idPage, TimeObject) {
		var timeLine = value.toFixed(1);
		var percent = 100 - (timeLine * 100) / TimeObject;
		var percentOpacity = percent / 100;
		$("#" + idPage).find("#" + idObject).css("opacity", percentOpacity);
	}

	//animate Float out up after
	function FloatOutUpObject(value, idObject, idPage, TimeObject) {
		var timeLine = value.toFixed(1);
		var id = $("#" + idPage).find("#" + idObject);
		var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
		var height = parseFloat(($(id).attr("data-height")).split('%')[0]);
		top = top > 0 ? top : 0;
		height = height > 0 ? height : 0;

		var percentTop = 100 - top;
		//var percent = ((timeLine * (top + height)) / (TimeObject)) - height;
		var percent = ((timeLine * percentTop) / (TimeObject)) + parseFloat(($(id).attr("data-top")).split('%')[0]);
		$(id).css("top", percent + "%");

		timeLine = timeLine / TimeObject
		var percentOpacity = (timeLine > 0.3) ? timeLine : 0.3;
		$(id).css("opacity", percentOpacity);
	}

	//animate Float out Down after
	function FloatOutDownObject(value, idObject, idPage, TimeObject) {
		var timeLine = value.toFixed(1);
		var id = $("#" + idPage).find("#" + idObject);
		var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
		top = top > 0 ? top : 0;

		var percentTop = 100 - top;
		var percent = parseFloat(($(id).attr("data-top")).split('%')[0]) - ((timeLine * percentTop) / (TimeObject));

		$(id).css("top", percent + "%");

		timeLine = timeLine / TimeObject
		var percentOpacity = (timeLine > 0.3) ? timeLine : 0.3;
		$(id).css("opacity", percentOpacity);
	}

	//animate split vertical out object after
	function SplitVerticalOutObjectAfter(value, idObject, idPage, TimeObject) {
		AddDivObject(idObject);
		var percent = 100 - ((100 * value) / TimeObject);


		var percentPage = (100 - percent) / 2;
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

		//transparent " + percentLeft + "%,black " + (percentLeft + 10) + "%, black " + (percentRight-10) + "%,transparent " + percentRight + "%
		
		$("#" + idObject + " #PageObject").css("background", "-o-linear-gradient(90deg ,white " + percentLeft + "%,transparent " + percentLeftBlack + "%, transparent " + percentRightBlack + "%,white " + percentRight + "%)"); /* For Opera 11.1 to 12.0 */
		$("#" + idObject + " #PageObject").css("background", "-moz-linear-gradient(90deg white " + percentLeft + "%,transparent " + percentLeftBlack + "%, transparent " + percentRightBlack + "%,white " + percentRight + "%)"); /* For Firefox 3.6 to 15 */
		$("#" + idObject + " #PageObject").css("background", "linear-gradient(90deg ,white " + percentLeft + "%,transparent " + percentLeftBlack + "%, transparent " + percentRightBlack + "%,white " + percentRight + "%)"); /* Standard syntax (must be last) */
		//$("#" + idObject + " #PageObject").css("background", "-webkit-linear-gradient(90deg ,white " + percentLeft + "%,transparent " + percentLeftBlack + "%, transparent " + percentRightBlack + "%,white " + percentRight + "%)"); /* For Safari 5.1 to 6.0 */
	}

	//animate split horizontal in object after
	function SplitHorizontalOutObjectAfter(value, idObject, idPage, TimeObject) {
		AddDivObject(idObject);
		var percent = 100 - ((100 * value) / TimeObject);

		var percentPage = (100 - percent) / 2;
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

		
		$("#" + idObject + " #PageObject").css("background", "-o-linear-gradient(180deg ,white " + percentLeft + "%,transparent " + percentLeftBlack + "%, transparent " + percentRightBlack + "%,white " + percentRight + "%)");
		$("#" + idObject + " #PageObject").css("background", "-moz-linear-gradient(180deg ,white " + percentLeft + "%,transparent " + percentLeftBlack + "%, transparent " + percentRightBlack + "%,white " + percentRight + "%)");
		$("#" + idObject + " #PageObject").css("background", "linear-gradient(180deg ,white " + percentLeft + "%,transparent " + percentLeftBlack + "%, transparent " + percentRightBlack + "%,white " + percentRight + "%)");
		//$("#" + idObject + " #PageObject").css("background", "-webkit-linear-gradient(180deg ,white " + percentLeft + "%,transparent " + percentLeftBlack + "%, transparent " + percentRightBlack + "%,white " + percentRight + "%)");
	}

	//animate split vertical in object after
	function SplitVerticalInObjectAfter(value, idObject, idPage, TimeObject) {
		AddDivObject(idObject);
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent) / 2;
		var percentLeft = 50 - percentPage;
		var percentRight = 50 + percentPage;

		
		$("#" + idObject + " #PageObject").css("background", "-o-linear-gradient(90deg ,transparent " + (percentLeft - 10) + "%,white " + percentLeft + "%,white ,white " + percentRight + "%, transparent " + (percentRight + 10) + "%)");
		$("#" + idObject + " #PageObject").css("background", "-moz-linear-gradient(90deg ,transparent " + (percentLeft - 10) + "%,white " + percentLeft + "%,white ,white " + percentRight + "%, transparent " + (percentRight + 10) + "%)");
		$("#" + idObject + " #PageObject").css("background", "linear-gradient(90deg ,transparent " + (percentLeft - 10) + "%,white " + percentLeft + "%,white ,white " + percentRight + "%, transparent " + (percentRight + 10) + "%)");
		//$("#" + idObject + " #PageObject").css("background", "-webkit-linear-gradient(90deg ,transparent " + (percentLeft - 10) + "%,white " + percentLeft + "%,white ,white " + percentRight + "%, transparent " + (percentRight + 10) + "%)");
	}

	//animate split horizontal in object after
	function SplitHorizontalInObjectAfter(value, idObject, idPage, TimeObject) {
		AddDivObject(idObject);
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent) / 2;
		var percentLeft = 50 - percentPage;
		var percentRight = 50 + percentPage;

		
		$("#" + idObject + " #PageObject").css("background", "-o-linear-gradient(180deg ,transparent " + (percentLeft - 10) + "%,white " + percentLeft + "%,white ,white " + percentRight + "%, transparent " + (percentRight + 10) + "%)");
		$("#" + idObject + " #PageObject").css("background", "-moz-linear-gradient(180deg ,transparent " + (percentLeft - 10) + "%,white " + percentLeft + "%,white ,white " + percentRight + "%, transparent " + (percentRight + 10) + "%)");
		$("#" + idObject + " #PageObject").css("background", "linear-gradient(180deg ,transparent " + (percentLeft - 10) + "%,white " + percentLeft + "%,white ,white " + percentRight + "%, transparent " + (percentRight + 10) + "%)");
		//$("#" + idObject + " #PageObject").css("background", "-webkit-linear-gradient(180deg ,transparent " + (percentLeft - 10) + "%,white " + percentLeft + "%,white ,white " + percentRight + "%, transparent " + (percentRight + 10) + "%)");
	}

	//animate Zoom object center object after
	function ZoomObjectCenterObjectAfter(value, idObject, idPage, TimeObject) {
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);


		//var percentHW = (percent > 0) ? (100 - percent) : 100;
		//var percentLT = (percent > 0) ? (percent / 2) : 0;
		//$("#" + idObject).css("width", "10%");
		var percentH = (percent * (parseFloat($("#" + idObject).attr("data-width").split("%")[0]))) / 100;
		var percentW = (percent * (parseFloat($("#" + idObject).attr("data-height").split("%")[0]))) / 100;
		var percentL = (((parseFloat($("#" + idObject).attr("data-width").split("%")[0]) / 2) * percentPage) / 100) + parseFloat($("#" + idObject).attr("data-left").split("%")[0]);
		var percentT = (((parseFloat($("#" + idObject).attr("data-height").split("%")[0]) / 2) * percentPage) / 100) + parseFloat($("#" + idObject).attr("data-top").split("%")[0]);

		$("#" + idObject).css("height", percentW + "%");
		$("#" + idObject).css("width", percentH + "%");
		$("#" + idObject).css("left", percentL + "%");
		$("#" + idObject).css("top", percentT + "%");
	}

	//animate fly out to top object after
	function FlyOutToTopObjectAfter(value, idObject, idPage, TimeObject) {
		var timeLine = value.toFixed(1);
		var id = $("#" + idPage).find("#" + idObject);
		var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
		var height = parseFloat(($(id).attr("data-height")).split('%')[0]);
		height = height > 0 ? height : 0;
		top = top > 0 ? top : 0;

		var percentTop = 100 - top;
		var percent = parseFloat(($(id).attr("data-top")).split('%')[0]) - ((timeLine * (top + height)) / (TimeObject));
		$(id).css("top", percent + "%");
	}

	//animate fly out to top right object after
	function FlyOutToTopRightObjectAfter(value, idObject, idPage, TimeObject) {
		var timeLine = value.toFixed(1);
		var id = $("#" + idPage).find("#" + idObject);
		var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
		var left = parseFloat(($(id).attr("data-left")).split('%')[0]);
		var width = parseFloat(($(id).attr("data-width")).split('%')[0]);
		var height = parseFloat(($(id).attr("data-height")).split('%')[0]);
		height = height > 0 ? height : 0;
		top = top > 0 ? top : 0;
		left = left > 0 ? left : 0;
		width = width > 0 ? width : 0;

		var percentTop = 100 - top;
		var percent1 = parseFloat(($(id).attr("data-top")).split('%')[0]) - ((timeLine * (top + height)) / (TimeObject));
		$(id).css("top", percent1 + "%");

		var percentLeft = 100 - left;
		var percent2 = parseFloat(($(id).attr("data-left")).split('%')[0]) + ((timeLine * (left + width)) / (TimeObject));
		$(id).css("left", percent2 + "%");
	}

	//animate fly out to right object after
	function FlyOutToRightObjectAfter(value, idObject, idPage, TimeObject) {
		var timeLine = value.toFixed(1);
		var id = $("#" + idPage).find("#" + idObject);
		var left = parseFloat(($(id).attr("data-left")).split('%')[0]);
		var width = parseFloat(($(id).attr("data-width")).split('%')[0]);
		width = width > 0 ? width : 0;
		left = left > 0 ? left : 0;

		var percentLeft = 100 - left;
		//var percent = ((timeLine * (left + width)) / (TimeObject)) - width;
		var percent = ((timeLine * ((100 - left))) / TimeObject)+left;
		$(id).css("left", percent + "%");
	}

	//animate fly out to bottom left object after
	function FlyOutToBottomLeftObjectAfter(value, idObject, idPage, TimeObject) {
		var timeLine = value.toFixed(1);
		var id = $("#" + idPage).find("#" + idObject);
		var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
		var left = parseFloat(($(id).attr("data-left")).split('%')[0]);
		var width = parseFloat(($(id).attr("data-width")).split('%')[0]);
		var height = parseFloat(($(id).attr("data-height")).split('%')[0]);
		top = top > 0 ? top : 0;
		left = left > 0 ? left : 0;
		width = width > 0 ? width : 0;
		height = height > 0 ? height : 0;

		var percentTop = 100 - top;
		var percent1 = ((timeLine * (100 - top)) / (TimeObject)) + parseFloat(($(id).attr("data-top")).split('%')[0]);
		$(id).css("top", percent1 + "%");

		var percent2 = parseFloat(($(id).attr("data-left")).split('%')[0]) - ((timeLine * (left + width)) / (TimeObject));
		$(id).css("left", percent2 + "%");
	}

	//animate fly out to bottom object after
	function FlyOutToBottomObjectAfter(value, idObject, idPage, TimeObject) {
		var timeLine = value.toFixed(1);
		var id = $("#" + idPage).find("#" + idObject);
		var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
		top = top > 0 ? top : 0;

		var percentTop = 100 - top;
		var percent1 = ((timeLine * (100 - top)) / (TimeObject)) + parseFloat(($(id).attr("data-top")).split('%')[0]);
		$(id).css("top", percent1 + "%");
	}

	//animate fly out to bottom right object after
	function FlyOutToBottomRightObjectAfter(value, idObject, idPage, TimeObject) {
		var timeLine = value.toFixed(1);
		var id = $("#" + idPage).find("#" + idObject);
		var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
		var left = parseFloat(($(id).attr("data-left")).split('%')[0]);
		var width = parseFloat(($(id).attr("data-width")).split('%')[0]);
		var height = parseFloat(($(id).attr("data-height")).split('%')[0]);
		top = top > 0 ? top : 0;
		left = left > 0 ? left : 0;
		width = width > 0 ? width : 0;
		height = height > 0 ? height : 0;

		var percentLeft = 100 - left;
		var percent = ((timeLine * (left + width)) / (TimeObject)) + parseFloat(($(id).attr("data-left")).split('%')[0]);
		$(id).css("left", percent + "%");

		var percentTop = 100 - top;
		var percent1 = ((timeLine * (100 - top)) / (TimeObject)) + parseFloat(($(id).attr("data-top")).split('%')[0]);
		$(id).css("top", percent1 + "%");
	}

	//animate fly out to left object after
	function FlyOutToLeftObjectAfter(value, idObject, idPage, TimeObject) {
		var timeLine = value.toFixed(1);
		var id = $("#" + idPage).find("#" + idObject);
		var left = parseFloat(($(id).attr("data-left")).split('%')[0]);
		var width = parseFloat(($(id).attr("data-width")).split('%')[0]);
		left = left > 0 ? left : 0;
		width = width > 0 ? width : 0;

		var percent = parseFloat(($(id).attr("data-left")).split('%')[0]) - ((timeLine * (left + width)) / (TimeObject));
		$(id).css("left", percent + "%");
	}
	//animate fly out to top left object after
	function FlyOutToTopLeftObjectAfter(value, idObject, idPage, TimeObject) {
		var timeLine = value.toFixed(1);
		var id = $("#" + idPage).find("#" + idObject);
		var top = parseFloat(($(id).attr("data-top")).split('%')[0]);
		var left = parseFloat(($(id).attr("data-left")).split('%')[0]);
		var width = parseFloat(($(id).attr("data-width")).split('%')[0]);
		var height = parseFloat(($(id).attr("data-height")).split('%')[0]);
		top = top > 0 ? top : 0;
		left = left > 0 ? left : 0;
		width = width > 0 ? width : 0;
		height = height > 0 ? height : 0;

		var percent = parseFloat(($(id).attr("data-left")).split('%')[0]) - ((timeLine * (left + width)) / (TimeObject));
		$(id).css("left", percent + "%");

		var percent1 = parseFloat(($(id).attr("data-top")).split('%')[0]) - ((timeLine * (top + height)) / TimeObject);
		$(id).css("top", percent1 + "%");
	}

	//animate shrink and turn object after
	function ShrinkAndTurnObjectAfter(value, idObject, idPage, TimeObject) {
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent) / 4;
		$("#" + idObject).css("transform", "rotate(-" + (percentPage * 3.6) + "deg)");

		var width = parseFloat($("#" + idObject).attr("data-width").split("%")[0]);
		var height = parseFloat($("#" + idObject).attr("data-height").split("%")[0]);
		var left = parseFloat($("#" + idObject).attr("data-left").split('%')[0]);
		var top = parseFloat($("#" + idObject).attr("data-top").split("%")[0]);
		width = width>0?width:0;
		height = height > 0 ? height : 0;
		left = left > 0 ? left : 0;
		top = top > 0 ? top : 0;

		var percentPage1 = (100 - percent);
		if (percentPage1 <= 90) {
			var percentH = width - ((percentPage1 * (width)) / 100);
			var percentW = height - ((percentPage1 * (height)) / 100);
			var percentL = left + ((percentPage1 * (width / 2)) / 100);
			var percentT = top + ((percentPage1 * (height / 2)) / 100);
			$("#" + idObject).css("height", percentW + "%");
			$("#" + idObject).css("width", percentH + "%");
			$("#" + idObject).css("left", percentL + "%");
			$("#" + idObject).css("top", percentT + "%");
		} else {
			if (height <= 0) {
				$("#" + idObject).css("height", "");
			}
			else
				$("#" + idObject).css("height", height + "%");

			$("#" + idObject).css("width", width + "%");
			$("#" + idObject).css("left", left + "%");
			$("#" + idObject).css("top", top + "%");
			$("#" + idObject).css("transform", "rotate(0deg)");
		}
	}

	//animate zoom page center object after
	function ZoomPageCenterObjectAfter(value, idObject, idPage, TimeObject) {
		var percent = 100 - ((100 * value) / TimeObject);
		var percentPage = (100 - percent);
		var width = parseFloat($("#" + idObject).attr("data-width").split("%")[0]);
		var height = parseFloat($("#" + idObject).attr("data-height").split("%")[0]);
		var left = parseFloat(($("#" + idObject).attr("data-left")).split("%")[0]);
		var top = parseFloat(($("#" + idObject).attr("data-top")).split("%")[0]);
		width = (width > 0) ? width : 0;
		height = (height > 0) ? height : 0;
		left = (left > 0) ? left : 0;
		top = (top > 0) ? top : 0;

		var percentH = width - (percentPage * (width)) / 100;
		var percentW = height - (percentPage * (height)) / 100;
		var percentL = 0;
		var percentT = 0;
		if (left < 50) {
			percentL = 50 - ((percentPage * (50 - (left + (width / 2)))) / 100);
			$("#" + idObject).css("left", percentL + "%");
		}
		if (top < 50) {
			percentT = 50 - ((percentPage * (50 - (top + (height / 2)))) / 100);
			$("#" + idObject).css("top", percentT + "%");
		}
		if (left >= 50) {
			percentL = 50 + ((percentPage * ((left + (width / 2)) - 50)) / 100);
			$("#" + idObject).css("left", percentL + "%");
		}
		if (top >= 50) {
			percentT = 50 + ((percentPage * ((top + (height/2)) - 50)) / 100);
			$("#" + idObject).css("top", percentT + "%");
		}
		$("#" + idObject).css("height", percentW + "%");
		$("#" + idObject).css("width", percentH + "%");
	}

	//animate hide show object plus animate mind map

	function hideShowObject(value, idObject, idPage, TimeObject) {
		$("#" + idObject).removeClass('hidden');
	}

	//add div color white object
	function AddDivObject(idObject) {
		var check = $("#" + idObject).find("#PageObject").attr("id");
		if (check == "PageObject") {
			$("#PageObject").css({ "height": "100%", "width": "100%", "left": "", "right": "", "bottom": "" });
		}
		else
			$("#" + idObject).append("<div id='PageObject' class='PageObject' style=\" top:0 !important; height:100%; width:100%; z-index:100; background:white; position: absolute;  \"></div>"); //background: linear-gradient(-90deg, black 85%, transparent);
	}

	//clear div color white object
	function ClearDivObject(idObject) {
		var check = $("#" + idObject).find('.PageObject');
		if (check.length) {
			$("#" + idObject).children('.PageObject').css("background", "");
		}
	}

	//----end new 19-09-2016
	//-------------End hiê?u u´ng dô´i tuo?ng-----------------------------------------

