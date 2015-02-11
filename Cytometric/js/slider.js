var i = 0;
$(document).on("ready", main);


function main(){
	var control = setInterval(transitionSlider, 3000);
}

function transitionSlider(){
	i++;
	if(i == $(".content-slider img").size()){
		i = 0;
	}
	$(".content-slider img").hide();
	$(".content-slider img").eq(i).fadeIn("medium");
}