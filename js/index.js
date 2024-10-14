const collapsible = (elem, numberItems = 4) => {
  let state = { closed: true };

  let $elem = document.querySelector(elem);
  let $listItems = $elem.querySelectorAll(".examples__item");
  let $showMoreLink = $elem.querySelector(".show-more-link");

  let render = () => {
    state.closed
      ? ($showMoreLink.textContent = "Показать всё")
      : ($showMoreLink.textContent = "Показать меньше");
  };

  // add classes for the 'default' items visible even when collapsed
  $listItems.forEach((item, index) => {
    if (index < numberItems) item.classList.add("default");
  });

  // handle the link click
  $elem.addEventListener("click", function (event) {
    if (!event.target.matches(".show-more-link")) return;
    state.closed ? (state.closed = false) : (state.closed = true);
    $elem.classList.toggle("open");
    $elem.classList.toggle("closed");
    render();
  });

  return $elem;
};

collapsible("#list1");
// collapsible("#list2");
