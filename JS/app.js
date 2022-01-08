//Start Global Variables
const sections = document.getElementsByTagName("section");
const ul = document.getElementById("navbar__list");
const icon = document.querySelector("#icon");
const fragment = document.createDocumentFragment();
//End Global Variables

//Start Events & Functions

// Create Dynamic NavBar function in DOMContentLoaded event
window.addEventListener("DOMContentLoaded", () => {
  for (const sec of sections) {
    const a = document.createElement("a");
    const li = document.createElement("li");
    a.textContent = sec.dataset.nav;
    a.setAttribute("href", `#${sec.id}`);
    a.classList.add("menu__link");
    li.appendChild(a);
    fragment.appendChild(li);
  }
  ul.appendChild(fragment);
});

// Create smooth Scroll function in click event
ul.addEventListener("click", (e) => {
  e.preventDefault();
  const activeSection = document.getElementById(e.target.getAttribute("href").substring(1));
  activeSection.scrollIntoView({ behavior: "smooth" });
});

// Create Scroll to Section function in scroll event
window.addEventListener("scroll", () => {
  for (const sec of sections) {
    const activeLink = document.querySelector(`[href= "#${sec.id}"]`);
    topSec = sec.getBoundingClientRect().top;
    if (topSec >= 0 && topSec < 150) {
      sec.classList.add("activated");
      activeLink.classList.add("active");
    } else {
      sec.classList.remove("activated");
      activeLink.classList.remove("active");
    }
  }
});

//Create toggle Menu function in click event
icon.addEventListener("click", () => {
  if (ul.style.display == "block") {
    ul.style.display = "none";
    icon.style.color = "";
  } else {
    ul.style.display = "block";
    icon.style.color = "black";
  }
});
//End Events & Functions
