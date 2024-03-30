AOS.init();

var modal = document.getElementById("myModal");
var stayButton = document.getElementById("stayButton");
var countdownInterval; // Declare countdownInterval variable globally

// Function to open the modal
function openModal() {
  modal.style.display = "block";
  var countdown = 10;
  var countdownElement = document.getElementById("countdown");

  countdownInterval = setInterval(function () { // Assign to the global variable
    countdown--;
    countdownElement.textContent = countdown;

    if (countdown <= 0) {
      clearInterval(countdownInterval);
      redirectToNewWebsite();
    }
  }, 1000);
}

// Function to redirect to the new website
function redirectToNewWebsite() {
  window.location.href = "https://sarthakskumar.com";
}

// Event listener for the "Stay on this page" button
stayButton.addEventListener("click", function () {
  modal.style.display = "none";
  clearInterval(countdownInterval); // Clear the countdownInterval
});

// Call openModal function to start the countdown when the page loads
openModal();
// Formspree code
const form = document.getElementById("contact-form");
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("alert");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Your message has been sent.";
      document.querySelector(".alert_style").style.display = "block";

      // hide alert after 3 seconds
      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
      form.reset();
    })
    .catch((error) => {
      status.innerHTML =
        "Oops! There was a problem delivering your message, please contact via other means.";
      document.querySelector(".alert_style").style.display = "block";

      // hide alert after 3 seconds
      setTimeout(function () {
        document.querySelector(".alert_style").style.display = "none";
      }, 4000);
    });
}
form.addEventListener("submit", handleSubmit);

// NAVIGATION PANEL
let navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
// MENU SHOW
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// MENU HIDDEN
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SKILLS
/*
const skillContent = document.querySelectorAll(".skill");
const skillHeader = document.querySelectorAll(".skills_header");
const skillContentArr = Array.from(skillContent);
const skillHeaderArr = Array.from(skillHeader);

skillHeaderArr.forEach((element, idx) => {
  /*element.addEventListener("click", function () {
    skillContentArr[idx].classList.toggle("skills_open");
  });*/

// QUALIFICATION TABS
let education = document.getElementById("education");
let work = document.getElementById("work");
let volunteering = document.getElementById("volunteering");

let educationheader = document.getElementById("educationheader");
let workheader = document.getElementById("workheader");
let volunteeringheader = document.getElementById("volunteeringheader");

education.classList.add("qualification-active");
work.classList.add("qualification-inactive");
volunteering.classList.add("qualification-inactive");
workheader.style.color = "var(--text-color)";
volunteeringheader.style.color = "var(--text-color)";
educationheader.style.color = "var(--first-color)";

educationheader.addEventListener("click", () => {
  let condition1 = work.classList.contains("qualification-inactive");
  let condition2 = volunteering.classList.contains("qualification-inactive");
  if (!(condition1 && condition2)) {
    education.classList.remove("qualification-inactive");
    work.classList.add("qualification-inactive");
    volunteering.classList.add("qualification-inactive");
    workheader.style.color = "var(--text-color)";
    volunteeringheader.style.color = "var(--text-color)";
    educationheader.style.color = "var(--first-color)";
  }
});
workheader.addEventListener("click", () => {
  let condition3 = education.classList.contains("qualification-inactive");
  let condition4 = volunteering.classList.contains("qualification-inactive");
  if (!(condition3 && condition4)) {
    work.classList.remove("qualification-inactive");
    education.classList.add("qualification-inactive");
    volunteering.classList.add("qualification-inactive");
    educationheader.style.color = "var(--text-color)";
    workheader.style.color = "var(--first-color)";
    volunteeringheader.style.color = "var(--text-color)";
  }
});
volunteeringheader.addEventListener("click", () => {
  let condition5 = education.classList.contains("qualification-inactive");
  let condition6 = work.classList.contains("qualification-inactive");
  if (!(condition5 && condition6)) {
    volunteering.classList.remove("qualification-inactive");
    education.classList.add("qualification-inactive");
    work.classList.add("qualification-inactive");
    educationheader.style.color = "var(--text-color)";
    volunteeringheader.style.color = "var(--first-color)";
    workheader.style.color = "var(--text-color)";
  }
});
// PORTFOLIO SWIPER
let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav_menu a[href*="${sectionId}"]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav_menu a[href*="${sectionId}"]`)
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// HEADER SHADOW
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// SHOW SCROLL UP BUTTON
function scrollUpfunc() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUpfunc);

// DARK/LIGHT THEME
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// obtain the current theme
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "light" : "dark";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-sun" : "uil-moon";

if (selectedTheme) {
  document.body.classList[selectedTheme === "light" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "uil-sun" ? "add" : "remove"](
    iconTheme
  );
}

// Activate/Deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark icon/theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//Project, Events and Awards Section
async function fetchData() {
  try {
    const res = await fetch("./assets/data.json");
    const data = await res.json();
    const projectContainer = document.querySelector(".project_container");
    const projectsHTML = Object.entries(data.Projects)
      .map(([title, { subtitle, img, description, year, link, video }]) => {
        const subtitleHTML = subtitle
          ? `<div class="card_subtitle">${subtitle}</div>`
          : "";
        const mediaHTML = video
          ? `<video src=${img} autoplay loop style = "height: 80%" alt = "${description}"></video>`
          : `<img class="card_image" src=${img} loading="lazy" alt = "${description}"/>`;
        return `
          <div class="card" data-aos = "fade-up">
              ${mediaHTML}
              <div class="card_year">${year}</div>
            <div class="card_content">
              <div class="card_title">${title}</div>
              ${subtitleHTML}
              <p class="card_description">${description}</p>
              <a href=${link} target="_blank" class="card_link">
                View Project <i class="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
        `;
      })
      .join("");
    projectContainer.innerHTML = projectsHTML;
  } catch (err) {
    console.error(err);
  }
}

fetchData();
