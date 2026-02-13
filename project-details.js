// project-details.js

function getProjectIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

function buildCarousel(images, isMobile = false) {
  const carouselId = "projectCarousel";

  const indicators = images
    .map(
      (_, idx) => `
    <button type="button"
      data-bs-target="#${carouselId}"
      data-bs-slide-to="${idx}"
      class="${idx === 0 ? "active" : ""}"
      aria-current="${idx === 0 ? "true" : "false"}"
      aria-label="Slide ${idx + 1}">
    </button>
  `
    )
    .join("");

  const slides = images
    .map(
      (src, idx) => `
    <div class="carousel-item ${idx === 0 ? "active" : ""}">
      ${
        isMobile
          ? `<div class="phone-screen-inner"><img src="${src}" alt="Project image ${idx + 1}"></div>`
          : `<img src="${src}" class="d-block w-100 rounded-4 details-carousel-img" alt="Project image ${idx + 1}">`
      }
    </div>
  `
    )
    .join("");

  // Core carousel markup
  const carouselCore = `
    <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">${indicators}</div>
      <div class="carousel-inner">${slides}</div>

      <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  `;

  // If not mobile, return normal wide carousel
  if (!isMobile) return carouselCore;

  // If mobile, wrap carousel inside phone mock
  return `
    <div class="phone-demo-wrap">
      <div class="phone-mock">
        ${carouselCore}
      </div>
    </div>
  `;
}

function renderProject(project) {
  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectOverview").textContent = project.overview;

  const demoWrapper = document.getElementById("projectDemoWrapper");

  if (project.demoVideo) {
    // ✅ FIX: Phone frame ONLY for mobile OR projects explicitly marked tile:"phone"
    const isPhoneFrame = project.category === "mobile" || project.tile === "phone";

    if (isPhoneFrame) {
      // Phone frame (portrait / UI recordings)
      demoWrapper.innerHTML = `
        <div class="phone-demo-wrap">
          <div class="phone-mock">
            <div class="phone-screen-inner">
              <video class="demo-video" src="${project.demoVideo}" controls playsinline></video>
            </div>
          </div>
        </div>
      `;
    } else {
      // Web frame (landscape / website recordings)
      demoWrapper.innerHTML = `
        <div class="demo-wide">
          <video class="demo-video" src="${project.demoVideo}" controls playsinline></video>
        </div>
      `;
    }
  } else {
    demoWrapper.innerHTML = "";
  }

  // Carousel
  // ✅ Only MOBILE category uses the phone carousel wrapper
  const isMobileCarousel = project.category === "mobile";

  document.getElementById("projectCarouselWrapper").innerHTML = buildCarousel(
    project.carouselImages,
    isMobileCarousel
  );

  // Tools
  document.getElementById("projectTools").innerHTML = (project.tools || [])
    .map((t) => `<li class="list-group-item archive-list-item">${t}</li>`)
    .join("");

  // Features
  document.getElementById("projectFeatures").innerHTML = (project.features || [])
    .map((f) => `<li class="list-group-item archive-list-item">${f}</li>`)
    .join("");

  // Links (only show if provided)
  const linksDiv = document.getElementById("projectLinks");
  const btns = [];

  if (project.links?.live) {
    btns.push(
      `<a class="archive-link-btn" href="${project.links.live}" target="_blank" rel="noopener">Live Demo</a>`
    );
  }
  if (project.links?.github) {
    btns.push(
      `<a class="archive-link-btn" href="${project.links.github}" target="_blank" rel="noopener">GitHub</a>`
    );
  }
  if (project.links?.figma) {
    btns.push(
      `<a class="archive-link-btn" href="${project.links.figma}" target="_blank" rel="noopener">Figma</a>`
    );
  }

  linksDiv.innerHTML = btns.length
    ? btns.join("")
    : `<span class="text-muted">No links added yet.</span>`;
}

// MAIN
const id = getProjectIdFromURL();
const project = PROJECTS.find((p) => p.id === id);

if (!project) {
  document.body.innerHTML = `
    <main class="projects-page">
      <div class="projects-page-inner container py-5">
        <h1 class="mb-3">Project not found</h1>
        <a href="projects.html" class="view-all-link">← Back to Projects</a>
      </div>
    </main>
  `;
} else {
  renderProject(project);
}
