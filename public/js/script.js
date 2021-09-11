/*$( document ).ready(function() {

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".fixed-top").addClass("top-nav-collapse navbar-light");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse navbar-light");
        }
    });

   

});*/
//link integrar whatssap
// https://integrazap.com.br/painel/gerenciar-sites.php

        // --- Config --- //
var purecookieTitle = "Informe de Privacidade ."; // Title
var purecookieDesc = "Ao navegar no site do  LaRCom, você concorda com o uso de cookies e com nossa "; // Description
var purecookieLink = '<a href="../views/politica.html">Política de Privacidade</a>'; // Cookiepolicy link
var purecookieButton = "Aceitar"; // Button text
// ---        --- //


function pureFadeIn(elem, display){
  var el = document.getElementById(elem);
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .02) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};
function pureFadeOut(elem){
  var el = document.getElementById(elem);
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .02) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}

function cookieConsent() {
  if (!getCookie('purecookieDismiss')) {
    document.body.innerHTML 
    += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' 
    + purecookieTitle + '</a></div><div class="cookieDesc"><p>' 
    + purecookieDesc 
    + ' '
    + purecookieLink 
    + '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">'
    + purecookieButton 
    + '</a></div></div>';
	  pureFadeIn("cookieConsentContainer");
  }
}

function purecookieDismiss() {
  setCookie('purecookieDismiss','1',15);
  pureFadeOut("cookieConsentContainer");
}

window.onload = function() {
     cookieConsent(); 
};




//Start of Async Callbell Code -->
/*
  window.callbellSettings = {
    token: "PpGjuovxq6EjcLAziQWMcBjH"
  };

    (function(){
      var w=window;var ic=w.callbell;
      if(typeof ic==="function"){
        ic('reattach_activator');
        ic('update',callbellSettings);
      }else{
        var d=document;
        var i=function(){
          i.c(arguments)};i.q=[];
          i.c=function(args){
            i.q.push(args)};
          w.Callbell=i;var l=function(){
            var s=d.createElement('script');
            s.type='text/javascript';
            s.async=true;s.src='https://dash.callbell.eu/include/'
            +window.callbellSettings.token+'.js';
            var x=d.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s,x);
          };if(w.attachEvent){
            w.attachEvent('onload',l);
          }else{w.addEventListener('load',l,false);}}})()

// End of Async Callbell Code -->

*/
