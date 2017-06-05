// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
  var windowHei = $(window).height();
  $("#slider").height(windowHei-30);
  $(".newsletter").css("margin-top", ($("#slider").height() - $(".newsletter").height())/2);

  $('a[href*=#]:not([href=#])').click(function() {
    locat = $(this).attr('href');

    $('html,body').stop(true, false).animate({
      scrollTop: ($(locat).offset().top - 10 - $(".navbar").height())
    }, 1000);
    return false;
  });

  $('.collapse').collapse({
    toggle: false
  });

  $(".autoOpen").modal('show');

  $("a[data-toggle='collapse']").click(function(){
    $(".each-faq").find('div').collapse('hide');
    $(this).parent().find('div').collapse('show');
    $(this).blur();
  });

  $("#btnNewsletter").click(function(){
    var valEmail = $("#txtNewsletterEmail").val();
    if(IsEmail(valEmail)){
      $.post( "/newsletter/", { email:  valEmail}).done(function( data ) {
        switch (data) {
          case 1:
            alert("Muito obrigado pelo cadastro, a partir de agora lhe manteremos atualizado sobre o projeto!");
            $("#txtNewsletterEmail").val("");
            break;
          case 2:
            alert("Você ja está cadastrado em nosso sistema com esse email.");
            break;
          default:
            alert("Ops! Houve algum erro. Por favor nos comunique através dos links na área de contato.");
        }

      });
    }else{
      alert("Email Inválido! Por favor, verifique.");
    }
  });

  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

});