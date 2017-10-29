$(function(){

    function img (){
    $('.doors').attr('src','../images/door-open.jpg');
    }

    function arrow(){
        $('.arrow').fadeIn();
    }


    setInterval(img,3000);
    
});