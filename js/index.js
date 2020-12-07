$(document).ready(function() {

    $(".navbar-nav").css("top", "0px");
    $(".navbar-nav").css("right", "0px");

    var borderWidth = $(".service .card a").css("width");
    $(".white-border").css("width", borderWidth);

    var verticalMidleText = $(".history .row .text-center").css("height");
    $(".history .row .text-center").css("line-height", verticalMidleText);

    $(".service .card").mouseover(function() {
        $("img", this).css("transform", "scale(1.2)");
        $("a", this).css("border-color", "white white transparent white").css("color", "white");
    })
    $(".service .card").mouseleave(function() {
        $("img", this).css("transform", "scale(1)");
        $("a", this).css("border-color", "black black transparent black").css("color", "black");

    })

    $(".team .col-4").mouseover(function() {
        $(".ceo", this).css("top", "50%").css("transform", "translate(-50%, -50%)");
        $(".black", this).css("opacity", "0");
    })
    $(".team .col-4").mouseleave(function() {
        $(".ceo", this).css("top", "0").css("transform", "translate(-50%, 0)");
        $(".black", this).css("opacity", "1");
    })

    myFunction();

    function myFunction() {
        start();
        setInterval(start, 4000);
    }

    function start() {
        var imgWidth = $(".slider img").width();
        var firstWidth = $(".slider img").width();
        setTimeout(carousel, 1000, imgWidth);
        imgWidth += firstWidth;
        setTimeout(carousel, 2000, imgWidth);
        setTimeout(carousel, 3000, firstWidth);
        setTimeout(carousel, 4000, 0);
    }

    function carousel(w) {
        var x = $(".slider");
        x.css("transform", "translateX(" + -w + "px)");

    }

})