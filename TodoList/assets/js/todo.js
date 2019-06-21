// $("li").click(function(){
// 	// $(this).css("color","gray");
// 	// $(this).css("text-decoration","line-through");
// 	// console.log($(this).css("color"));
//  //    if($(this).css("color")==="rgb(128, 128, 128)"){
//  //        $(this).css({
// 	// 	color:"black",
// 	// 	textDecoration: "none"
// 	// });
//  //    }
//  //    else{
// 	// $(this).css({
// 	// 	color:"grey",
// 	// 	textDecoration: "line-through"
// 	// });
// 	$(this).toggleClass("completed");
// });

$("ul").on("click" , "li" ,function(){
	$(this).toggleClass("completed");
});

// $("span").click(function(event){
//    $(this).parent().fadeOut(500,function(){ // this refers to span!
//    	 $(this).remove(); //this refers to li not the span!
//    });
//    event.stopPropagation();
// });

$("ul").on("click", "span" ,function(event){
	 $(this).parent().fadeOut(500,function(){ 
   	 $(this).remove(); 
   });
   event.stopPropagation();
})

$("input").keypress(function(event){
	if (event.which===13) {
		// console.log("You Hitted ENTER!")
		// console.log($(this).val())
		$("ul").append("<li><span> <i class='fa fa-trash'></i></span>"+$(this).val()+"</li>")
		$(this).val("");
	}
});

$(".fa-pen").click(function(){
	$("input").fadeToggle();
});