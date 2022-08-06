$(window).on('load', function () {
  $('html').css({ 'overflow-y': 'scroll' });
  $('#loader').css({ 'right': '-150%' });
  $('#loader-extra-1').css({ 'right': '-150%' });
  $('#loader-extra-2').css({ 'right': '-150%' });

  setTimeout(function() {
    new Typed('#typed',{
      strings : ['A Web Developer','An Engineering Student', 'An Open Source Enthusiast'],
      typeSpeed : 100,
      backSpeed: 50,
      delaySpeed : 90,
      loop : true
    });
  }, 1000)
});

$(document).ready(function(){
  $(this).scrollTop(0);
});

/* AOS */
AOS.init({
  once: true
});

/* Hero type effect */

/* Navbar hamburger menu open */
$('.hamburger').on('click', function() {
  $('.hamburger').toggleClass('active');
  $('.menu-wrapper').toggleClass('visible');
  $('.menu').toggleClass('menu-active');
});

$(".menu li a").on('click', function() {
  $('.hamburger').removeClass('active');
  $('.menu-wrapper').removeClass('visible');
  $('.menu').removeClass('menu-active');
})

/* Navbar scrolled */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-wrapper .menu-wrapper ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id"); 
    }
  });
  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current + "-nav")) {
      li.classList.add("active");
    }
  });
};

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}


/* Hero Particles */
particlesJS("particles-js",{particles:{number:{value:100,density:{enable:!0,value_area:1e3}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_image:"../images/hero-bg.jpg",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}});

/* Profile socials */
// $('#profile-img').on('mouseenter', function() {
//   $("#profile-socials").addClass('active');
// })
// $('#profile-img').on('mouseleave', function() {
//   $("#profile-socials").removeClass('active');
// })

/* Progress */
// Detect scroll to div
let isSetOnce = false;
$(window).on('load', function() {
  if (!isSetOnce && $(window).scrollTop() > $('#skillset').offset().top - 600) {
    isSetOnce = true;
    $('#skillset .skill-bars').addClass('active');

    $('.counting').each(function() {
      var $this = $(this), countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      }, {
        duration: 2700,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum) + "%");
        },
        complete: function() {
          $this.text(this.countNum + "%");
        }
      });  
    });  
  }
});

$(window).on('scroll', function() {
  if (!isSetOnce && $(window).scrollTop() > $('#skillset').offset().top - 600) {
    isSetOnce = true;
    $('#skillset .skill-bars').addClass('active');

    $('.counting').each(function() {
      var $this = $(this), countTo = $this.attr('data-count');
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      }, {
        duration: 2700,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum) + "%");
        },
        complete: function() {
          $this.text(this.countNum + "%");
        }
      });  
    });  
  }
});

/* Projects */
$(function() {
	$(' #project-list > li ').each( function() { $(this).hoverdir(); } );
});

/* Footer */
function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return false;
  }
  return true;
}

$(".alert-danger button").click(function() {
  $(".alert-danger").hide();
});
$(".alert-warning button").click(function() {
  $(".alert-warning").hide();
});
$(".alert-success button").click(function() {
  $(".alert-success").hide();
});

function sendEmail() {
  let name = $("#name").val();
  let email = $("#email").val();
  let subject = $("#subject").val();
  let message = $("#message").val();

  if (name == "" || email == "" || subject == "" || message == "") {
    $(".alert-danger").show();
    $(".alert-success").hide();
    $(".alert-warning").hide();
  } else if (validateEmail(email)) {
    $(".alert-danger").show();
    $(".alert-success").hide();
    $(".alert-warning").hide();
  } else {
    let body = "Name: " + name + "<br>Email: " + email + "<br>Subject: " + subject + "<br>Message: " + message;

    Email.send({
    SecureToken:"c0d2eae6-34e2-4787-86f5-a6a0d78861e9",
  
    To : "sushantpatial18@gmail.com",
    From : "patial.sushant12345@gmail.com",
    Subject : "Portfolio - new message from " + name,
    Body : body,
    }).then(
      message =>{
        if(message=='OK'){
          $(".alert-success").show();
          $(".alert-danger").hide();
          $(".alert-warning").hide();
        }
        else{
          console.error (message);
          $(".alert-warning").show();
          $(".alert-danger").hide();
          $(".alert-success").hide();
        }
      }
    );
  }
}

/* Getting year for footer */
document.getElementById("year").innerHTML = new Date().getFullYear();

/* Back to top button */
let backtotop = select('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}