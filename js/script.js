// This function will show the image in the lightbox
const zoomImg = function () {
  // Create evil image clone
  let clone = this.cloneNode();
  clone.classList.remove("zoomd");

  // Put evil clone into lightbox
  let lb = document.getElementById("lb-img");
  lb.innerHTML = "";
  lb.appendChild(clone);

  // Show lightbox
  lb = document.getElementById("lb-back");
  lb.classList.add("show");
};

window.addEventListener("load", function () {
  // Attach on click events to all .zoomD images
  let images = document.getElementsByClassName("zoomd");
  if (images.length > 0) {
    for (let img of images) {
      img.addEventListener("click", zoomImg);
    }
  }

  // Click event to hide the lightbox
  document.getElementById("lb-back").addEventListener("click", function () {
    this.classList.remove("show");
  });
});
