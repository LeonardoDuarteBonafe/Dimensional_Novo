window.addEventListener("DOMContentLoaded", function () {

    $('.whatsapp').click(function(){
        console.log("whats");
        window.open("https://api.whatsapp.com/send?phone=5528999854807&text=Hello, I am interested in your product!", '_blank');
    });

    $('.email').click(function(){
        console.log("email");
        window.location.href = "mailto:vandersonliberatore@gmail.com?subject=I'm interested in your product&body=";
    });

});