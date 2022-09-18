let offset = 0;
const sliderLine = document.querySelector(".slider-line");
document.querySelector(".slider-next").addEventListener("click", function() {
    offset = offset + 1800;
    if (offset > 5399) offset = 0;
    sliderLine.style.left = -offset + "px";
});
document.querySelector(".slider-prev").addEventListener("click", function() {
    offset = offset - 1800;
    if (offset < 0) offset = 3600;
    sliderLine.style.left = -offset + "px";
});

//# sourceMappingURL=project.e10f4d43.js.map
