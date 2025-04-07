let crsr = document.querySelector(".cursor"); // .cursor class wale element ko select karna.
let crsrBlur = document.querySelector(".cursorBlur");
let menu = document.querySelector(".menu");
let cancel = document.querySelector(".cancel");
let h4all = document.querySelectorAll(".nav h4");
let h4nav = document.querySelectorAll(".navoverlay h4");
let navoverlay = document.querySelector(".navoverlay");
let nav = document.querySelector(".nav")

document.addEventListener("mousemove", function (dets) {
  //Jab bhi mouse move karega, tab yeh function chalega.
  //dets (short for details) ek object hai jo mouse ki X aur Y position ko store karega. 👉 Matlab jab mouse hilega, tab hume uski exact position (x, y) mil jayegi.

  crsr.style.left = dets.x + 30 +"px"; //it means keh agar mouse left postion pr jaye tou uske saath cursor bhi left pr jaye.
  //Example: agar mouse left postion pr 500px pr gaya tou hamara cursor bhi ussi ke saath 500px pr jayga
  crsr.style.top = dets.y + "px";

  crsrBlur.style.left = dets.x - 250 + "px"; //Yeh blur effect wale cursor ko mouse ke X position se 250px peeche rakhta hai.
  // Example: Agar mouse x = 500px par hai, tou blur wala cursor 250px pehle (250px left) aayega.

  crsrBlur.style.top = dets.y - 250 + "px";
});


h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
    crsr.style.transition = "all ease 0.2s"
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
     crsr.style.transition = "all ease 0.2s"
  });
});

menu.addEventListener("click" , function() {
  navoverlay.style.display = "flex";
  navoverlay.style.position = "fixed";
  navoverlay.style.top= "12%"
  // navoverlay.style.filter= "blur(20px)"
  menu.style.display = "none";
  cancel.style.display = "block";
  navoverlay.style.zIndex  = "999";
  h4nav.forEach(h4 => h4.style.zIndex = "999");
  navoverlay.style.transition = "all ease-in 0.3s"
  nav.style.backdropFilter = "blur(10px)"
})

cancel.addEventListener("click" , function() {
  navoverlay.style.display = "none";
  cancel.style.display = "none";
  menu.style.display = "block";
  navoverlay.style.transition = "all ease-in 0.3s"
nav.style.backdropFilter = "blur(0)"
})

gsap.to(".nav", {
  //GSAP animation ko .nav class wale element pe apply kar raha hai.
  backgroundColor: "#000", // Scroll hone par navbar black ho jayega

  duration: 0.5, // Animation 0.5 seconds me complete hogi

  height: "110px", // Navbar ki height change ho jayegi

  scrollTrigger: {
    // Yeh scroll-based animation ko control karega(ScrollTrigger ek GSAP (GreenSock Animation Platform) ka feature hai jo scroll-based animations banane ke liye use hota hai. Iska matlab yeh hai ke jab user page scroll karega, tab kuch animations trigger hongi.)

    trigger: ".nav", // Yeh animation tab start hogi jab ".nav" element scroll pe aaye(Yeh specify karta hai kaunsa element scroll hone par animation trigger karega.)

    scroller: "body", // Pure page ka scroll track kiya jayega (Yeh batata hai ke kis scroll area ko track kiya jaye)

    start: "top -10%", // Jab ".nav" viewport ke top se 10% upar chali jaye, tab animation start hogi

    end: "top -11%", // Jab ".nav" viewport ke top se 11% upar chali jaye, tab animation end hogi

    scrub: 1, // Scroll ke speed ke mutabiq smooth animation chalegi
  },
});

gsap.to(".main", {
  // GSAP animation ko .main class wale element pe apply kar raha hai.
  backgroundColor: "#000", /// Scroll hone par main ka bg color black ho jayega
  scrollTrigger: {
    trigger: ".main", // ye main ko trigger karega means keh ye animation tab start hogi jab .main scroll hoga
    scroller: "body", // it means keh ye body element ke scroll behaviour ko track karega
    // markers:2,
    start: "top -35%", // jab .main element 35% uper chalajaye ga tou animation shuru hogi
    end: "top -70%", // jab .main element 70% uper chalajayega tou animtion end hojayegi
    scrub: 2, // ye scroll ki speed ke mutabiq smooth animation chalegi
  },
});


gsap.from(" .about-us img, .aboutus-in",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".about-us",
    scroller:"body",
    // markers:"true",
    start:"top 60%",
    end:"top 55%",
    scrub: 1,
  }

});

gsap.from(" .cards",{
  scale:0.8,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".cards",
    scroller:"body",
    // markers:"true",
    start:"top 70%",
    end:"top 65%",
    scrub: 1,
  }
});

gsap.from(" #colon1",{
  scale:0.8,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".cards",
    scroller:"body",
    // markers:"true",
    start:"top 70%",
    end:"top 65%",
    scrub: 1,
  }
});

gsap.from("#colon1", {
y:-70,
x:-70,
scrollTrigger: {
  trigger:"#colon1",
  scroller:"body",
 // markers:"true",
  start:"top 50%",
  end:"top 47%",
  scrub:4,
}
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  }

});

gsap.from(".page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});