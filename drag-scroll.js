// drag-scroll.js
function enableDragScroll(container) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let dragged = false;

    const start = (pageX) => {
        isDown = true;
        dragged = false;
        container.classList.add("grabbing");
        startX = pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    };

    const move = (pageX) => {
        if (!isDown) return;
        const x = pageX - container.offsetLeft;
        const walk = x - startX;
        if (Math.abs(walk) > 6) dragged = true;
        container.scrollLeft = scrollLeft - walk;
    };

    const end = () => {
        isDown = false;
        container.classList.remove("grabbing");
    };

    // Mouse
    container.addEventListener("mousedown", (e) => start(e.pageX));
    container.addEventListener("mousemove", (e) => move(e.pageX));
    window.addEventListener("mouseup", end);
    container.addEventListener("mouseleave", end);

    // Touch
    container.addEventListener("touchstart", (e) => start(e.touches[0].pageX), { passive: true });
    container.addEventListener("touchmove", (e) => move(e.touches[0].pageX), { passive: true });
    container.addEventListener("touchend", end);

    // Prevent click after drag (so you don't accidentally open details)
    container.addEventListener("click", (e) => {
        if (dragged) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".drag-row").forEach(enableDragScroll);
});
