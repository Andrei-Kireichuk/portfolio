gsap.registerPlugin(ScrollTrigger);

window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };

gsap.to ("#ball", {
    y:-200, duration: 0.7, repeat:-1, yoyo: true, ease: "power1",
});
gsap.to ("#ball", {
    rotation:360, duration: 3.5, repeat:-1, ease: "linear",
});

gsap.from("#shadow", {
    scale:1, duration:0.7, repeat:-1, yoyo: true, ease:"power1", opacity: 1
});

let tl = gsap.timeline({
    delay: 0.5,
    repeat: -1, 
    repeatDelay: 1, // seconds between repeats
    repeatRefresh: true, // invalidates on each repeat
    smoothChildTiming: true,

    defaults: { // children inherit these defaults
      duration: 3,
      ease: "none" 
    },
      });
      tl.to("#attractive", {xPercent: -300, repeat:true, repeatRefresh: true, duration:2, ease: "bounce"},"+=0.5");
      tl.to(".wave", {opacity: 1, duration:0.3, repeat:5, yoyo:true},0);




gsap.to("#lake-3",{ scale:1.4, scrollTrigger:{
    trigger: "#lake-3",
    start:"bottom bottom",
    end: "+=1200",
    scrub: 1,
    id: "L-1",
    //markers: true,
}});

gsap.to("#lake-1",{ scaleY:1.4, y: 47, scrollTrigger:{
    trigger: "#lake-1",
    start:"top bottom",
    end: "bottom top",
    scrub: 0,
    id: "L-1",
    //markers: true,
}});

gsap.to(".title__parallax",{ y: -400, scrollTrigger:{
    trigger: "#lake-1",
    start:"top bottom",
    end: "bottom top",
    scrub: 0,
    id: "L-1",
    //markers: true,
}});
gsap.to(".moveright-screen",{ xPercent: -100, scrollTrigger:{
    trigger: "#trigger",
    start:"400px top",
    end: "+=10",
    scrub: 3,
    id: "L-2",
    //markers: true,
}});
gsap.to(".moveleft-screen",{ xPercent: 100, scrollTrigger:{
    trigger: "#trigger",
    start:"800px top",
    end: "+=50",
    scrub: 3,
    id: "L-1",
    //markers: true,
}});
gsap.to(".title__change",{ color:"white", scrollTrigger:{
    trigger: "#trigger",
    start:"1200px top",
    end: "+=50",
    scrub: 3,
    id: "L-1",
    //markers: true,
}});

gsap.to(".moveleft-screen",{ backgroundColor:"red", scrollTrigger:{
    trigger: "#trigger",
    start:"1200px top",
    end: "+=50",
    scrub: 3,
    id: "L-1",
    //markers: true,
}});

gsap.to(".buttfly-2",{scaleX:0.1, duration:0.5, repeat: -1, yoyo:true, ease:"power1.inOut"});





gsap.to(".container__three",{ scrollTrigger:{
    trigger: ".container__three",
    start:"top top",
    end: "+=1200",
    scrub: 0,
    id: "L-1",
    pin: true,
    //markers: true,
}});

gsap.from("#v-shot",{y:-1050, 
    scrollTrigger:{
        trigger:".container-4",
        start:"top bottom",
        end:"bottom top",
        scrub:0,
        id:"L4",
        //markers: true,
        ease: "none"
}});
gsap.from("#split-1-left",{yPercent: -100, 
    scrollTrigger:{
        trigger:"#split-trigger",
        start:"500px top",
        end:"+=100",
        scrub:3,
        id:"L4",
        
        //markers: true,
        ease: "none"
}});
gsap.from("#split-1-right",{yPercent: 100, 
    scrollTrigger:{
        trigger:"#split-trigger",
        start:"500px top",
        end:"+=100",
        scrub:3,
        id:"L4",
        
        //markers: true,
        ease: "none"
}});
gsap.from(".container__five",{ 
    scrollTrigger:{
        trigger:".container__five",
        start:"top top",
        end:"+=1800",
        scrub:0,
        id:"L4",
        pin: true,
        //markers: true,
        ease: "none"
}});

gsap.from("#split-2-left",{yPercent: -100, 
    scrollTrigger:{
        trigger:"#split-trigger",
        start:"1200px top",
        end:"+=100",
        scrub:3,
        id:"L4",
        
        //markers: true,
        ease: "none"
}});
gsap.from("#split-2-right",{yPercent: 100, 
    scrollTrigger:{
        trigger:"#split-trigger",
        start:"1200px top",
        end:"+=100",
        scrub:3,
        id:"L4",
        
        //markers: true,
        ease: "none"
}});
/*gsap.to("#split-1-left",{yPercent: 100, 
    scrollTrigger:{
        trigger:"#split-trigger",
        start:"700px top",
        end:"+=100",
        scrub:3,
        id:"L4",
        
        //markers: true,
        ease: "none"
}});
gsap.to("#split-1-right",{yPercent: -100, 
    scrollTrigger:{
        trigger:"#split-trigger",
        start:"700px top",
        end:"+=100",
        scrub:3,
        id:"L4",
        
        //markers: true,
        ease: "none"
}});*/

/*let tl = gsap.timeline();

tl.to(".eight-ball", {y:100,x:0},0)
.to(".eight-ball", {x:100,y:0},1)
.to(".eight-ball", {x:0,y:-100},3)
.to(".eight-ball", {x:-100,y:0},4);*/