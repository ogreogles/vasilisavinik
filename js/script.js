const zoomImg = function () {
  let clone = this.cloneNode();
  clone.classList.remove("zoomd");

  let lb = document.getElementById("lb-img");
  lb.innerHTML = "";
  lb.appendChild(clone);

  lb = document.getElementById("lb-back");
  lb.classList.add("show");
};

window.addEventListener("load", function () {
  let images = document.getElementsByClassName("zoomd");
  if (images.length > 0) {
    for (let img of images) {
      img.addEventListener("click", zoomImg);
    }
  }
  
  document.getElementById("lb-back").addEventListener("click", function () {
    this.classList.remove("show");
  });
});
