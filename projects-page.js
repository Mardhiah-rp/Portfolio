// projects-page.js

function tileClass(category) {
    // mobile + design get tall phone frame
    if (category === "mobile" || category === "design") {
        return "project-tile project-tile--phone";
    }
    // web stays wide
    return "project-tile project-tile--wide";
}


function renderRow(category, rowId) {
    const row = document.getElementById(rowId);
    if (!row) return;

    const items = PROJECTS.filter(p => p.category === category);

    row.innerHTML = items.map(p => `
    <a class="${tileClass(category)}"
       href="project-details.html?id=${p.id}"
       draggable="false">
      <img src="${p.thumbnail}" alt="${p.title}" draggable="false">
      <div class="tile-glow"></div>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    renderRow("mobile", "mobileRow");
    renderRow("web", "webRow");
    renderRow("design", "designRow");
});
