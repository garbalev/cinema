$(".firstPageSessionPlaceSelect").click(function() {
    if (!$(this).hasClass("wasSelected")) {
        $(".firstPageSessionTimeSelect span").html('12:00');
    }
    $(".firstPageSessionPlaceSelect svg").toggleClass('rotateSvgOpen rotateSvgClose');
    $(this).addClass("wasSelected");
    $("#placeSelectToggler").toggle('1000');
    let oneCall = false;
    if (!oneCall) {
        $('html, body').animate({scrollTop: '400'}, 1500);
        oneCall = true;
    };
});



$(".firstPageSessionTimeSelect").click(function() {
    if ($(".firstPageSessionPlaceSelect").hasClass("wasSelected")) {
        $(".firstPageSessionTimeSelect svg").toggleClass('rotateSvgOpen rotateSvgClose')
        $("#timeSelectToggler").toggle('1000');
        let oneCall = false;
        if (!oneCall) {
            $('html, body').animate({scrollTop: '400'}, 1500);
            oneCall = true}
    } else {
        alert("Сперва выберите Кинотеатр");
    }
   
});


$(".firstPageSessionTimeSelectDown p, .firstPageSessionPlaceSelectDown p").click(function() {
    const topBlock = $(this).parent().parent().siblings().children().eq(0);
    topBlock.html($(this).text());
    $(this).parent().parent().hide('1000');
    
    
});

