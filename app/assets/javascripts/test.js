$(document).ready(function(){
	//Synchronous AJAX REQUEST to create a new task
	// var request = $("#SyncAJAX").click(function()
	// {
	// 	$.ajax({
 //  		method: "POST",
 //  		url: "/tasks",
 //  		data: { task: { title: "Zohaib" , description: "Ahmed"} },
 //  		async: false
	// 	});
	// });

	$(document).on("click" , "#DynamicBtn" , function(){
		alert("Dynamic Button has been clicked");
	});

	$("#DynamicBtn").click(function(){ alert("ABCD");});

	//To bind event with a dynamic HTML Element
	$("body").append("<button id='DynamicBtn'>Click Dynamic Button</button>");
	
	//Prevent form submission
	$("#task-form").on('submit' , 'form' , function(event){
		alert( "Handler for .submit() called." );
  		return false;
	});


});