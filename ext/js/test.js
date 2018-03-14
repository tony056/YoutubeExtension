$(document).ready(function(){
    $(document).mousemove((e) => {
        changePos(e.pageX, e.pageY);
    });


    var changePos = (x, y) => {
        $('#eye_tracker').css({
            'left': x,
            'top': y
        });
    };


});
