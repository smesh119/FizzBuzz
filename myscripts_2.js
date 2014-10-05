$(document).ready(function() {

	/* 1. INPUT SECTION on keydown*/
	$(".query").keydown(function(e){
		if(e.which == 13){
			var i = $("input[name=inputvalue]").val();
		
		for(i=1; i<=100; i++) {
				if (i%15===0){
            	$(".listitemsadded").append("<li>FizzBuzz</li>");
            	}
    			else if (i%3===0){
            	$(".listitemsadded").append("<li>Fizz</li>");
        		} 
    			else if (i%5===0) {
            	$(".listitemsadded").append("<li>Buzz</li>");
       			}
      			else {
    			console.log(i);
       		 	}
       	}	 	
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
   

});