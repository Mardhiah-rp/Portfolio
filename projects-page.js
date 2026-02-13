// projects-page.js
// Renders projects into the 3 draggable rows (mobile/web/design)
// Clicking a tile opens the internal project details page: project-details.html?id=#

function getCategoryLabel(category) {
    if (category === "mobile") return "Mobile App";
    if (category === "web") return "Web App";
    return "Design";
}

function getTileClass(project) {
    if (project.category === "mobile") return "project-tile--phone";
    if (project.category === "web") return "project-tile--wide";

    // Designs can be mixed: phone / wide / square
    if (project.category === "design") {
        if (project.tile === "phone") return "project-tile--phone";
        if (project.tile === "square") return "project-tile--square"; // only if you added square
        return "project-tile--wide";
    }

    return "project-tile--wide";
}

function renderRow(rowEl, projects) {
    rowEl.innerHTML = "";

    projects.forEach((project) => {
        const a = document.createElement("a");
        a.className = `project-tile ${getTileClass(project)}`;

        // ✅ INTERNAL DETAILS PAGE LINK
        a.href = `project-details.html?id=${project.id}`;

        // image
        const img = document.createElement("img");
        img.src = project.thumbnail;
        img.alt = project.title;

        // overlay (white translucent + title)
        const overlay = document.createElement("div");
        overlay.className = "tile-overlay";
        overlay.innerHTML = `
            <div class="tile-overlay-inner">
                <h3 class="tile-title">${project.title}</h3>
                <p class="tile-sub">${getCategoryLabel(project.category)}</p>
            </div>
        `;

        // glow border
        const glow = document.createElement("span");
        glow.className = "tile-glow";

        a.appendChild(img);
        a.appendChild(overlay);
        a.appendChild(glow);

        rowEl.appendChild(a);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const mobileRow = document.getElementById("mobileRow");
    const webRow = document.getElementById("webRow");
    const designRow = document.getElementById("designRow");

    const mobileProjects = PROJECTS.filter((p) => p.category === "mobile");
    const webProjects = PROJECTS.filter((p) => p.category === "web");
    const designProjects = PROJECTS.filter((p) => p.category === "design");

    renderRow(mobileRow, mobileProjects);
    renderRow(webRow, webProjects);
    renderRow(designRow, designProjects);
});
