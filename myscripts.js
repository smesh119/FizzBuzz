$(document).ready(function() {

	/* 1. INPUT SECTION on keydown*/
	$(".query").keydown(function(e){
		if(e.which == 13){
			var i = $("input[name=inputvalue]").val();
			console.log(i)
			$("ul").append("<li>" + i + "</li>");
		
}	
	});

	/* 2. when user types into input, remove prompt text*/
	$(".query").on("focus", function(e){
        $(".query").val("")
    });

	/* 3. When user puts new text in input and hits enter, on keyup remove their input*/
    $(".query").keyup(function(e){
        if (e.which == 13) {
        	$(".query").val("")
        };
    });

    /* 4. When user types in a number 1-100 not divisable by 3 or 5 output number they typed*/
   

});