$(document).ready(function() {

    $(".query").keydown(function(e) {
        if (e.which == 13) {
            var input = $("input[name=inputvalue]").val();
            $("li").remove();
            var i;

            if(isNaN(input)) {
			alert('Please supply a number!');
		}
		else if(input %1 != 0) {
			alert('Please supply an integer');
		}
		else { 
			for (i = 1; i <= input && i<=100; i++) {
                    if (i % 3 === 0 && i % 5 === 0) {
                        $(".listitemsadded").append("<li>FizzBuzz</li>");
                    } else if (i % 3 === 0) {
                        $(".listitemsadded").append("<li>Fizz</li>");
                    } else if (i % 5 === 0) {
                        $(".listitemsadded").append("<li>Buzz</li>");
                    } else {
                        $(".listitemsadded").append("<li>" + i + "</li>");
                    }    
                }
			
		}

             
            
        }
    });

    /* 2. when user types into input, remove prompt text*/
    $(".query").on("click", function(e) {
        $(".query").val("");
    });

    $("button").on("click", function(e) {
        $("li").remove();
    });


    /* 3. When user puts new text in input and hits enter, on keyup remove their input*/
    $(".query").keyup(function(e) {
        if (e.which == 13) {
            $(".query").val("")
        };
    });


});