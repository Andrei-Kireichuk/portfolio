gsap.registerPlugin(ScrollTrigger);

gsap.to ("#ball", {
    y:-300, duration: 0.7, repeat:-1, yoyo: true, ease: "power1",
});
gsap.to ("#ball", {
    rotation:360, duration: 3.5, repeat:-1, ease: "linear",
});

gsap.from("#shadow", {
    scale:1, duration:0.7, repeat:-1, yoyo: true, ease:"power1", opacity: 1
});

gsap.to ("#attractive", {
    xPercent: -100, repeat:-1, duration:3, ease: "power1.in"
})

gsap.to("#lake-3",{ scale:1.4, scrollTrigger:{
    trigger: "#lake-3",
    start:"top bottom",
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
    start:"300px top",
    end: "+=20",
    scrub: 2,
    id: "L-1",
    //markers: true,
}});
gsap.to(".moveleft-screen",{ xPercent: 100, scrollTrigger:{
    trigger: "#trigger",
    start:"500px top",
    end: "+=30",
    scrub: 1,
    id: "L-1",
    //markers: true,
}});
gsap.to(".container__three",{ scrollTrigger:{
    trigger: ".container__three",
    start:"top top",
    end: "+=700",
    scrub: 0,
    id: "L-1",
    pin: true,
    markers: true,
}});