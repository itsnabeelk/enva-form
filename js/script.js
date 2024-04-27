
gsap.registerPlugin(ScrollTrigger);
// anim-text
gsap.from(".col-md-6 .form-group", {
  duration: 1,
  scrollTrigger: {
    trigger: ".col-md-6 .form-group",
    toggleActions: "play play play play",
  },
  y: -300,
  stagger: 0.3,
});
gsap.from(".logo-sec img", {
    duration: 1,
    scrollTrigger: {
      trigger: ".logo-sec img",
      toggleActions: "play play play play",
    },
    y: -300,
    stagger: 0.3,
  });
  gsap.from(".register-area a", {
    duration: 1,
    scrollTrigger: {
      trigger: ".register-area a",
      toggleActions: "play play play play",
    },
    y: -300,
    stagger: 0.3,
  });
  gsap.from(".logo-container .image-container img", {
    duration: 1,
    scrollTrigger: {
      trigger: ".logo-container .image-container img",
      toggleActions: "play play play play",
    },
    y: -300,
    stagger: 0.3,
  });
// text-animation-end


// Get the select element
const dropdown = document.getElementById('dropdown');

// Set the initial focus color to blue
dropdown.style.color = '#ccc';

// Add an event listener to change the color to black when an option is selected
dropdown.addEventListener('change', function() {
  this.style.color = '#000';
});