const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

function onScroll() {
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      const id = section.getAttribute("id");

      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", onScroll);
onScroll();


const modal = document.getElementById("preview-modal");
const backdrop = modal.querySelector(".preview-backdrop");
const closeBtn = modal.querySelector(".preview-close");

const imgEl = modal.querySelector(".preview-image");
const videoEl = modal.querySelector(".preview-video");

let carouselTimer = null;
let currentIndex = 0;


const galleries = {
  "web-1": {
    type: "images",
    src: [
      "img/web1-1.png",
      "img/web1-2.png",
      "img/web1-3.png",
      "img/web1-4.png"
    ]
  },

  "web-2": {
    type: "images",
    src: [
      "img/web2-1.png",
      "img/web2-2.png",
      "img/web2-3.png"
    ]
  },

  "design-image": {
    type: "images",
    src: ["img/typo.png"]
  },

  "design-video": {
    type: "video",
    src: "img/uiux2.mp4"
  }
};

function openImageGallery(id) {
  const set = galleries[id];
  if (!set) return;

  clearInterval(carouselTimer);

  imgEl.style.display = "block";
  videoEl.style.display = "none";

  currentIndex = 0;
  imgEl.src = set.src[currentIndex];

  modal.classList.add("open");

  if (set.src.length > 1) {
    carouselTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % set.src.length;
      imgEl.src = set.src[currentIndex];
    }, 5000);
  }
}

function openVideo(id) {
  const set = galleries[id];
  if (!set) return;

  clearInterval(carouselTimer);

  imgEl.style.display = "none";
  videoEl.style.display = "block";

  videoEl.src = set.src;
  videoEl.currentTime = 0;

  modal.classList.add("open");
  videoEl.play();
}


function openModal(id) {
  const set = galleries[id];
  if (!set) return;

  if (set.type === "video") openVideo(id);
  else openImageGallery(id);
}

function closeModal() {
  modal.classList.remove("open");
  clearInterval(carouselTimer);

  videoEl.pause();
}

document.addEventListener("DOMContentLoaded", () => {

  console.log("DOM fully loaded.");


  document.querySelectorAll(".media-card").forEach((card) => {
    console.log("Found card:", card); 

    const galleryID = card.dataset.gallery;
    if (!galleryID) return;

    if (card.classList.contains("phone-card")) return;

    card.addEventListener("click", () => {
      console.log("Clicked:", galleryID);
      openModal(galleryID);
    });
  });

});



closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
