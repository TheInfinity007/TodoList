$("ul").on("click", "li",  function(){
	$(this).toggleClass("completed");
});

//click on x to delete Todo
$("ul").on("click", "span",  function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		if(todoText !== ''){
			var txt = "<li> <span> <i class='fas fa-trash'></i> </span>" + todoText + "</li>";
			$("ul").append(txt); 
			$(this).val("");	
		}
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});

$("button[data-dismiss='modal']").on("click", function(){
	$("#modal").fadeToggle();
});
$(".fa-info-circle").on("click", function(){
	$("#modal").fadeToggle();
});