'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Yes, it is indeed working");
     $('.jumbotron p').text("I am changing with h1 sista");
    $('.jumbotron p').addClass("active");
    // $('.jumbotron p').toggleClass("active");

    $("#testjs").text("Please wait...")
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

  $("a.thumbnail").click(projectClick)
}

function projectClick(e){
    e.preventDefault();
    $(this).css("background-color","pink")

   var containingProject = $(this).closest(".project");
   var description =$(containingProject).find(".project-description");
   if(description.length == 0){
    $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
   }else{
    // description.html("<p>You clicked me at " + (new Date()) + " I'm gonna call the police</p>");
    description.fadeOut();
   }
  }


