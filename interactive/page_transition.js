
let hightlighttitle0 = document.querySelector(".hightline-title");
let hightlighttitletitle0 = document.querySelector(".hightline-title-text")
let title0 = document.querySelector(".s_title")
if (hightlighttitle0 && title0) {
  title0.addEventListener('mouseenter', () => {
    hightlighttitle0.classList.add("hightline-title-hovered");
    hightlighttitletitle0.classList.add("hightline-title-text-hovered");
  });

  const allElementsExceptTitle = document.querySelectorAll(`*:not(.hightline-title):not(.s_title):not(.small_title)`);

  allElementsExceptTitle.forEach(el => {
    el.addEventListener("mouseenter", () => {
      hightlighttitle0.classList.remove("hightline-title-hovered");
      hightlighttitletitle0.classList.remove("hightline-title-text-hovered");
    })
  });
}
