$(".dark-btn").click(function(){
    $("body").toggleClass("dark");
    $(".box").toggleClass("dark");
});

$(".spin-btn").click(function(){
    $("body").toggleClass("spin");
});
$(".reveal-btn").click(function(){
    $(".chair").addClass("reveal");
    $(".reveal-btn").css("display","none")
});