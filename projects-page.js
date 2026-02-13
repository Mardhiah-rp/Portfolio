// projects-page.js
// Renders projects into the 3 draggable rows (mobile/web/design)

function getCategoryLabel(category) {
    if (category === "mobile") return "Mobile App";
    if (category === "web") return "Web App";
    return "Design";
}

function getTileClass(project) {
    // Mobile projects are always phone tiles
    if (project.category === "mobile") return "project-tile--phone";

    // Web projects are always wide tiles
    if (project.category === "web") return "project-tile--wide";

    // Designs can be mixed: phone or wide
    // If tile is not provided, default to wide
    if (project.category === "design") {
        return project.tile === "phone" ? "project-tile--phone" : "project-tile--wide";
    }

    return "project-tile--wide";
}

function getBestLink(project) {
    // Priority: live > figma > github > nothing
    if (project.links?.live) return project.links.live;
    if (project.links?.figma) return project.links.figma;
    if (project.links?.github) return project.links.github;
    return "";
}

function renderRow(rowEl, projects) {
    rowEl.innerHTML = "";

    projects.forEach((project) => {
        const a = document.createElement("a");
        a.className = `project-tile ${getTileClass(project)}`;
        a.href = getBestLink(project) || "#";
        a.target = getBestLink(project) ? "_blank" : "_self";
        a.rel = "noopener noreferrer";
        a.setAttribute("data-title", project.title);

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
