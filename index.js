function myfun() {
  let rand = Math.ceil(Math.random() * 300);
  return rand;
}

let btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", () => {
  btn.style.marginTop = myfun() + "px";
  btn.style.marginLeft = myfun() + "px";
  btn.style.marginBottom = myfun() + "px";
  btn.style.marginRight = myfun() + "px";
});
