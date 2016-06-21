$(document).ready(function(){
	//Synchronous AJAX REQUEST to create a new task
	var request = $("#SyncAJAX").click(function()
	{
		$.ajax({
  		method: "POST",
  		url: "/tasks",
  		data: { task: { title: "Zohaib" , description: "Ahmed"} },
  		async: false
		});
	});

});