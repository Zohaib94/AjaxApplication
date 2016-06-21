$(document).ready ->
  $("#CoffeeBtn").click -> 
    name = $("#task_title").val()
    desc =  $("#task_description").val()
    $.ajax 
      method: "POST"
      url: "/tasks.js"
      data: { task: { title: name , description: desc } }
