$(document).ready -> $("#CoffeeBtn").click -> 
                                                                  $.ajax 
                                                                    method: "POST" 
                                                                    url: "/tasks.js" 
                                                                    data: { task: {title: "Zohaib" , description: "Ahmed"}}