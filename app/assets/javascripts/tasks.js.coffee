$(document).ready ->
  $("#CoffeeBtn").click ->
    
    name = $("#task_title").val()
    desc =  $("#task_description").val()
    $.ajax 
      method: "POST"
      url:  "/tasks.js"
      data: { task: { title: name , description: desc } }
      async: false
      success:  -> console.log("Alert generated in CoffeeBtn")
    console.log("Alert generated out side CoffeeBtn")