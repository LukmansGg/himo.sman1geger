const allElementC = ".title, .small_title, .document, .is-logo, .bigger_description, .description, .doct_foto, .circle-full-1, .circle-grey-3, .circle-logo, .circle-broder-down"
const allElement = document.querySelectorAll(allElementC);

const thisPage = document.querySelectorAll('.this-page');
thisPage.forEach(element => {
  const randomAngle = (Math.random() - 0.5) * 40; // Antara -20 dan 20 derajat
  element.style.transform = `rotate(${randomAngle}deg) scale(1.2)`;
});


const phoneHover = document.querySelector(".phone-menu");
const phoneMenuNav = document.querySelector(".phone-menu-nav-bar");
const phoneMenuArr = document.querySelector(".phone-menu-arrow");


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

document.addEventListener('DOMContentLoaded', () => {
  const slideWrapper = document.querySelector('.slide-wrapper');
  const indicators = document.querySelectorAll('.indicator');
  let currentSlide = 0;
  let startX = 0;
  let isDragging = false;

  // Touch events
  slideWrapper.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
  });

  slideWrapper.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
          if (diff > 0 && currentSlide < indicators.length - 1) {
              nextSlide();
          } else if (diff < 0 && currentSlide > 0) {
              prevSlide();
          }
          isDragging = false;
      }
  });

  slideWrapper.addEventListener('touchend', () => {
      isDragging = false;
  });

  // Indicator clicks
  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
          goToSlide(index);
      });
  });

  function goToSlide(index) {
      if (index === currentSlide) return;
      
      const direction = index > currentSlide ? 'next' : 'prev';
      slideWrapper.style.transform = `translateX(-${index * 100}%)`;
      
      // Update indicators
      indicators[currentSlide].classList.remove('active');
      indicators[index].classList.add('active');
      
      // Add animation class
      slideWrapper.classList.add(`slide-${direction}`);
      setTimeout(() => {
          slideWrapper.classList.remove(`slide-${direction}`);
      }, 500);

      currentSlide = index;
  }

  function nextSlide() {
      if (currentSlide < indicators.length - 1) {
          goToSlide(currentSlide + 1);
      }
  }

  function prevSlide() {
      if (currentSlide > 0) {
          goToSlide(currentSlide - 1);
      }
  }

  // Auto-advance slides (optional)
  setInterval(() => {
      if (currentSlide < indicators.length - 1) {
          nextSlide();
      } else {
          goToSlide(0);
      }
  }, 5000); // Change slides every 5 seconds
});
