//Spell #1

$("#metakight").click(function(){
 $("#smashball").hide();
 $("#arena").hide();
 
});

$("#button").click(function(){
     $("#smashball").show();
 $("#arena").show();
});
 
 

//Spell #2

$("#smashball").click(function(){
 $("body").css("background:url","data:image/jpeg;base64,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");
});



//Spell #3

$("      ").click(function(){
 
});



