/*
	Name: Arshdeep Singh
	Student ID: 301118326
	Date: 2020-09-7
*/

$(document).ready(function(){

    $(".section-services .service .trigger").click(function(){
        $(this).parent().find(".service-content").stop().slideToggle();
    });

    $("#contact-form").submit(function(e) {
        e.preventDefault();
        var name=$("#cf-name").val();
        var email=$("#cf-name").val();
        var msg=$("#cf-name").val();

        console.log(name,email,msg);

        window.location.replace("/");
    });

});