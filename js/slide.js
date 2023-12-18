$(function(){
    console.log("load");
    var slideCount=$(".slide").length;
    var showslider=0;
    var slidePosition;
    setInterval(function(){
    if(showslider<slideCount-1){
        showslider++;
    }else{
        showslider=0;
    }
    slidePosition=showslider*(-1200)+"px";
    $(".sliders").animate({ left: slidePosition},400);
    },3000);
})