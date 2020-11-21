//Check of specific todos by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

// Click on X to delete to-do
$("ul").on("click",".X",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();//removes the todo after the fadeout
    });// removes the parent of span which is li
    event.stopPropagation(); //it stops the domino effect like span=>li=>ul=>container=>body
})

// New ToDo
$("#myinput").keypress(function(event){
    if(event.which===13){
        var todoText=$(this).val();
        $(this).val("");
        // Adding new elements to the list
        $("ul").append("<li><span class=\"X\"><i class=\"fa fa-trash\"></i></span> "+todoText+"</li>");
    }
});

$(".fa-edit").click(function(){
    $("#myinput").fadeToggle();
});