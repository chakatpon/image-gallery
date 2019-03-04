
// Check off specific todos by clicking.
$(".todoUL").on("click",".todoLI",function(){
    $(this).toggleClass("completed");
});

// click on x to remove a tode.
$(".todoUL").on("click",".listIcon",function(event){

    console.log($(this).parent());
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
    
    
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $(".todoUL").append("<li class='todoLI'><span class='listIcon'><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();

});