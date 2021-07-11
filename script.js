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