$(".firstPageSessionPlaceSelect").click(function() {
    $(".firstPageSessionPlaceSelect svg").toggleClass('rotateSvgOpen rotateSvgClose');
    $("#placeSelectToggler").toggle('1000');
});



$(".firstPageSessionTimeSelect").click(function() {
    $(".firstPageSessionTimeSelect svg").toggleClass('rotateSvgOpen rotateSvgClose')
    $("#timeSelectToggler").toggle('1000')
});


$(".firstPageSessionTimeSelectDown p, .firstPageSessionPlaceSelectDown p").click(function() {
    const topBlock = $(this).parent().parent().siblings().children().eq(0);
    topBlock.html($(this).text());
    $(this).parent().parent().hide('1000');
});