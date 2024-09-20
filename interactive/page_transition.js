const allElementC = ".title, .small_title, .document, .is-logo, .bigger_description, .description, .circle-full-1, .circle-grey-3, .circle-logo, .circle-broder-down"
const allElement = document.querySelectorAll(allElementC);

const thisPage = document.querySelectorAll('.this-page');
thisPage.forEach(element => {
  const randomAngle = (Math.random() - 0.5) * 40; // Antara -20 dan 20 derajat
  element.style.transform = `rotate(${randomAngle}deg) scale(1.2)`;
});


const phoneHover = document.querySelector(".phone-menu");
const phoneMenuNav = document.querySelector(".phone-menu-nav-bar");
phoneMenuNav.style.visibility = "hidden";
phoneHover.addEventListener("click", () => {
  if (phoneHover.classList.contains("show_navigation_phone")) {
    phoneHover.classList.remove("show_navigation_phone")
    phoneMenuNav.style.visibility = "hidden";
  } else {
    phoneHover.classList.add("show_navigation_phone")
    phoneMenuNav.style.visibility = "visible";
  }
})

const elements = document.querySelectorAll('.nav-bar');

setInterval(() => {
  elements.forEach(el => {
    if (!el.classList.contains('this-page')) {
      el.classList.remove('hover-page');
      el.style.transform = 'rotate(0deg) scale(1.0)';
    }
  })
}, 5000)

elements.forEach(element => {
  element.addEventListener('mouseenter',
    () => {
      if (!element.classList.contains('this-page')) {
        elements.forEach(el => {
          if (!el.classList.contains('this-page')) {
            el.classList.remove('hover-page');
            el.style.transform = 'rotate(0deg) scale(1.0)';
          }
        });

        element.classList.add('hover-page');
        const randomAngle = (Math.random() - 0.5) * 40; // Antara -20 dan 20 derajat
        element.style.transform = `rotate(${randomAngle}deg) scale(1.2)`;
      }
    });

  element.addEventListener("click", () => {
    pageExit();

    setTimeout(() => {
      window.location.href = `page_${element.innerHTML}.html`;
    },
      2000)
  })
});

let hightlighttitle0 = document.querySelector(".hightline-title");
let hightlighttitletitle0 = document.querySelector(".hightline-title-text")
let title0 = document.querySelector(".title")
if (hightlighttitle0 && title0) {
  title0.addEventListener('mouseenter', () => {
    hightlighttitle0.classList.add("hightline-title-hovered");
    hightlighttitletitle0.classList.add("hightline-title-text-hovered");
  });

  const allElementsExceptTitle = document.querySelectorAll(`*:not(.hightline-title):not(.title):not(.small_title)`);

  allElementsExceptTitle.forEach(el => {
    el.addEventListener("mouseenter", () => {
      hightlighttitle0.classList.remove("hightline-title-hovered");
      hightlighttitletitle0.classList.remove("hightline-title-text-hovered");
    })
  });
}

function initializePageElements() {
  const elementsToAnimate = Array.from(document.querySelectorAll(allElementC)).filter(e => !e.classList.contains("navigator"));

  elementsToAnimate.sort((a, b) => {
    const rectA = a.getBoundingClientRect();
    const rectB = b.getBoundingClientRect();
    return rectA.top - rectB.top;
  });

  elementsToAnimate.forEach((e, i) => {
    e.style.animationDelay = `${i * 100}ms`;
    e.classList.remove("hidden");
    e.classList.add("slide-up");
  });
}

function pageExit() {
  document.body.style.overflowY = "hidden";

  const elementsToAnimate = Array.from(document.querySelectorAll(allElementC)).filter(e => !e.classList.contains("navigator"));

  elementsToAnimate.sort((a, b) => {
    const rectA = a.getBoundingClientRect();
    const rectB = b.getBoundingClientRect();
    return rectA.top - rectB.top;
  });

  elementsToAnimate.forEach((e, i) => {
    e.style.animationDelay = `${i * 100}ms`;
    e.classList.remove("slide-up");
    e.classList.add("slide-up-again");
  });

  let logo = document.querySelector(".logo")
  if (logo) {
    logo.classList.add("logo-load");
  }

  // Pindah ke halaman berikutnya setelah animasi selesai
}

// Panggil fungsi ini saat halaman dimuat
initializePageElements();

let is_waving = false;
setInterval(() => {
  let view_docs = document.querySelector(".bukti-button")

  if (view_docs && is_waving === false && Math.floor(Math.random()*3) === 1) {
    view_docs.classList.add("bukti-button-wave")
    is_waving = true;

    setTimeout(() => {
      view_docs.classList.remove("bukti-button-wave")
      is_waving = false;
    }, 2000)
  }
}, 5000)
