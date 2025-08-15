document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll("#serviceFilters button");
  const serviceItems = document.querySelectorAll(".service-item");

  // Filtro de categorías
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Quitar clase activa de todos
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      serviceItems.forEach((item) => {
        const categories = item.getAttribute("data-category").split(",");

        if (filter === "all" || categories.includes(filter)) {
          item.style.display = "block";
          item.classList.add("animate__fadeIn");
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Modal / Lightbox
  const imgModal = new bootstrap.Modal(document.getElementById("imgModal"));
  const imgModalSrc = document.getElementById("imgModalSrc");
  const imgModalTitle = document.getElementById("imgModalTitle");

  document.querySelectorAll(".service-card img").forEach((img) => {
    img.addEventListener("click", () => {
      imgModalSrc.src = img.src;
      imgModalTitle.textContent = img.alt;
      imgModal.show();
    });
  });
});
