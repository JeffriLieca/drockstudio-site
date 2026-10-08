// Shows a neutral placeholder box when an image in /assets is missing,
// and hides optional images (like the logo) instead.
(function () {
  function handleMissing(img) {
    if (img.hasAttribute("data-optional")) {
      img.remove();
      return;
    }
    var box = img.closest(".media");
    if (box) box.classList.add("is-missing");
  }

  document.querySelectorAll("img").forEach(function (img) {
    if (img.complete && img.naturalWidth === 0) {
      handleMissing(img);
    } else {
      img.addEventListener("error", function () { handleMissing(img); }, { once: true });
    }
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
