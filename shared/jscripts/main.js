function menuOpen(){
	$("#scrollayer").animate({left:"0"},300);
}

function menuClose(){
	$("#scrollayer").animate({left:"-300px"});
}

function msgClose(){
	$("#msg-modal").hide();
}

function qlistOpen(){
	$(".qlistCont").animate({right:"0px"});
}

function qlistHide(){
	$(".qlistCont").animate({right:"-350px"});
}
function commentOpen(){
	$("span.testcomment").animate({top:"0px"});
}

function commentHide(){
	$("span.testcomment").animate({top:"-147px"});
}