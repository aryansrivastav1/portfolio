// TYPED.JS ANIMATION
var typed = new Typed("#element", {
  strings: ["Web Developer", "Android Developer", "Video Editor"],
  typeSpeed: 40,
  backDelay: 1000,
  loop: !0,
});

// PROGRESS BAR
let progress = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  let progressHeight = (window.scrollY / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
};

// SCROLL TO TOP
const toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// POPUP MENU AND FORM VALIDATION
document.querySelector("#openPopupBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var query = document.getElementById("message").value.trim();

    if (name === "" || email === "" || query === "") {
      document.querySelector("#formError").style.visibility = "visible";
      return;
    }

    document.querySelector("#popup").classList.add("active");
    document.querySelector("#popup-overlay").classList.add("active");
    document.querySelector("body").classList.add("popup-active");
    document.querySelector("#formError").style.visibility = "hidden";
  });

document.querySelector("#closePopupBtn").addEventListener("click", function () {
  document.querySelector("#popup").classList.remove("active");
  document.querySelector("#popup-overlay").classList.remove("active");
  document.querySelector("body").classList.remove("popup-active");
  document.querySelector("#form").reset();
});
