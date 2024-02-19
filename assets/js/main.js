import { slickSlide } from "./slick_slide.js";
import { menuScroll } from "./menu_scroll.js";
import { setupMenu } from "./menu_mobile.js";
import { setupSlideEffect } from "./slideSections.js";
import { typeWrite } from "./typeWrite.js";

document.addEventListener("DOMContentLoaded", function () {
    slickSlide();
});
menuScroll();
setupMenu();
setupSlideEffect();
typeWrite(document.querySelector(".typewriter"));

// import { readMore } from "./readMore.js";
// readMore(document.querySelector(".leiamais"));

// import { phoneNumberUtils } from "./contactForm.js";
// import { setupFormSubmit } from "./contactForm.js";
// const phoneInput = document.getElementById("wc-contact__phone");
// phoneInput.addEventListener("input", function () {
//   phoneNumberUtils.format(this);
// });
// setupFormSubmit();
