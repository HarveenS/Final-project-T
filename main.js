$("a").click(function(evt){
	evt.stopPropagation();
    evt.preventDefault();
    
    $(".lightUp").toggle();
});