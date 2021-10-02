window.addEventListener("DOMContentLoaded", function () {

    $('.whatsapp').click(function(){
        console.log("whats");
    });

    $('.email').click(function(){
        console.log("email");
        window.location.href = "mailto:vandersonliberatore@gmail.com?subject=I'm interested in your product&body=";
    });

});