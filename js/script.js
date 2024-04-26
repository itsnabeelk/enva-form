
gsap.registerPlugin(ScrollTrigger);
// anim-text
gsap.from(".col-md-6 .form-group", {
  duration: 1,
  scrollTrigger: {
    trigger: ".col-md-6 .form-group",
    toggleActions: "play restart restart reverse",
  },
  y: -300,
  stagger: 0.3,
});
gsap.from(".logo-container .image-container img", {
    duration: 1,
    scrollTrigger: {
      trigger: ".logo-container .image-container img",
      toggleActions: "reverse restart restart reverse",
    },
    y: -300,
    stagger: 0.3,
  });
// text-animation-end


