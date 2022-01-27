/* AOS */
AOS.init({
  once: true
})

/* Hero type effect */
 new Typed('#typed',{
  strings : ['A Web Developer','An Engineering Student', 'An Open Source Enthusiast'],
  typeSpeed : 100,
  backSpeed: 50,
  delaySpeed : 90,
  loop : true
});

/* Navbar scrolled */
$(window).scroll(function() {
  if ($(window).width() > 992) {
    if ($(window).scrollTop() > 200) {
      $(".navbar").addClass("navbar-scrolled");
    }
    else {
      $(".navbar").removeClass("navbar-scrolled");
    }
  }
});


/* Navbar links active state on scroll */
const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

let navbarlinks = select('#navbar .nav-link', true)
const navbarlinksActive = () => {
  let position = window.scrollY + 60
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return
    let section = select(navbarlink.hash)
    if (!section) return
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('current')
    } else {
      navbarlink.classList.remove('current')
    }
  })
}

window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)

/* Hero Particles */
particlesJS("particles-js",{particles:{number:{value:100,density:{enable:!0,value_area:1e3}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_image:"../images/hero-bg.jpg",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}});

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