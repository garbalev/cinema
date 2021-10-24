$(".firstPageSessionPlaceSelect").click(function() {
    $(".firstPageSessionPlaceSelect svg").toggleClass('rotateSvgOpen rotateSvgClose');
    // $(this).addClass("wasSelected");
    $("#placeSelectToggler").toggle('1000');
    let oneCall = false;
    if (!oneCall) {
        $('html, body').animate({scrollTop: '400'}, 1500);
        oneCall = true;
    };
});



$(".firstPageSessionTimeSelect").click(function() {

    $(".firstPageSessionTimeSelect svg").toggleClass('rotateSvgOpen rotateSvgClose')
    $("#timeSelectToggler").toggle('1000');
    let oneCall = false;
    if (!oneCall) {
        $('html, body').animate({scrollTop: '400'}, 1500);
        oneCall = true;
    }
});


$(".firstPageSessionTimeSelectDown p, .firstPageSessionPlaceSelectDown p").click(function() {
    const topBlock = $(this).parent().parent().siblings().children().eq(0);
    topBlock.html($(this).text());
    $(this).parent().parent().hide('1000');
    
    
});

