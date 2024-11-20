let show = document.getElementById("hide");
let ul = document.getElementById("wza");
let menuIcon = document.querySelector(".icon");
// ul.style.display = "none";

menuIcon.addEventListener('click', () => {
  ul.classList.add('active')
  document.addEventListener('click', (e) => {
    if(e.target != ul) {
      ul.classList.remove('active')
    } else {
      ul.classList.add('active')
    }
  })
})



// show up button fun
let upBtn = document.querySelector(".btn-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 3270) {
    upBtn.classList.add("show");
  } else {
    upBtn.classList.remove("show");
  }
  upBtn.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
});
